// Uses algolia to search for users and posts
// Uses prisma to fetch data from my database and then send it to algolia
// Two classes: databaseSyncManager class to upload data to algolia and algoliaManager class to handle searching for it in my application.

import { PrismaClient } from "@/generated/prisma/client";
import { Algoliasearch, algoliasearch } from "algoliasearch";

class DatabaseAgoliaSyncManager {
   private prisma: PrismaClient;
   private algoliaClient: Algoliasearch;
   private static instance: DatabaseAgoliaSyncManager;

   private constructor(prisma: PrismaClient, algoliaClient: Algoliasearch) {
      this.prisma = prisma;
      this.algoliaClient = algoliaClient;
   }

   static getInstance(prisma: PrismaClient, appId: string, apiKey: string) {
      const algoliaClient = algoliasearch(appId, apiKey);
      if (!this.instance) {
         this.instance = new DatabaseAgoliaSyncManager(prisma, algoliaClient);
      }
      return this.instance;
   }

   async syncUser(userDetailsId: string) {
      try {
         const user = await this.prisma.userDetails.findUnique({
            where: {
               id: userDetailsId,
            },
         });

         if (!user) {
            throw new Error("User not found");
         }

        //  const userData = {
        //     objectID: user.id,
        //     name: user.name,
        //  };

         await this.algoliaClient.saveObject({
            indexName: "users",
            body: {
                objectID: user.id,
                name: user.name,
                department: user.department,
                year: user.year,
                profilePicture: user.profilePicture,
                bio: user.bio,
                availability: user.availability,
                reading: user.reading,
            }
         });
      } catch (error) {
         console.error("Error syncing user to algolia", error);
      }
   }

   async syncPost(postId: string) {
      try {
         const post = await this.prisma.post.findUnique({
            where: {
               id: postId,
            },
            include: {
                author: true,
            }
         });

         if (!post) {
            throw new Error("Post not found");
         }



         await this.algoliaClient.saveObject({
            indexName: "posts",
            body: {
                objectID: post.id,
                content: post.content,
                authorId: post.authorId,
                authorName: post.author.name,
                authorProfilePicture: post.author.profilePicture,
            }
         });
      } catch (error) {
         console.error("Error syncing post to algolia", error);
      }
   }

   async syncAllUsers() {
      try {
         const users = await this.prisma.userDetails.findMany();

         for (const user of users) {
            await this.syncUser(user.id); // need to implement batching if this gets too big
         }

         console.log("All users synced to algolia");
      } catch (error) {
         console.error("Error syncing all users to algolia", error);
      }
   }

   async syncAllPosts() {
      try {
         const posts = await this.prisma.post.findMany();

         for (const post of posts) {
            await this.syncPost(post.id); // need to implement batching if this gets too big
         }

         console.log("All posts synced to algolia");
      } catch (error) {
         console.error("Error syncing all posts to algolia", error);
      }
   }
}

class AgoliaSearchManager {
    private algoliaClient: Algoliasearch;
    private static instance: AgoliaSearchManager;

    private constructor(appId: string, apiKey: string) {
        this.algoliaClient = algoliasearch(appId, apiKey);
    }

    static getInstance(appId: string, apiKey: string) {
        if (!this.instance) {
            this.instance = new AgoliaSearchManager(appId, apiKey);
        }
        return this.instance;
    }

    async searchAll(query: string) {
        try {
            const results = await this.algoliaClient.search({
                requests: [
                    {
                        indexName: "users",
                        query,
                    },
                    {
                        indexName: "posts",
                        query,
                    }
                ],
            });

            return results;
        } catch (error) {
            console.error("Error searching algolia", error);
            return [];
        }
    }
}

export { DatabaseAgoliaSyncManager, AgoliaSearchManager };
