// using aws4fetch (because lightweight and edge-compatible with the edge runtime) to upload images to cloudflare r2
import { AwsClient } from "aws4fetch";

class ImageStorage {
    private awsClient: AwsClient;
    static instance: ImageStorage;

    private constructor() {
        this.awsClient = new AwsClient({
            accessKeyId: process.env.R2_ACCESS_KEY_ID!,
            secretAccessKey: process.env.R2_SECRET_ACCESS_KEY!,
            service: "s3",
            region: "auto",
        });
    }

    static getInstance() {
        if (!ImageStorage.instance) {
            ImageStorage.instance = new ImageStorage();
        }
        return ImageStorage.instance;
    }

    async uploadImage(key: string, image: File) {
        // key is userId
        console.log(`upload image called with key ${key} and image ${image}`);
        const arrayBuffer = await image.arrayBuffer();

        const response = await this.awsClient.fetch(
            `${process.env.R2_ENDPOINT}/${process.env.R2_BUCKET}/${key}`,
            {
                method: "PUT",
                body: arrayBuffer,
                headers: {
                    "Content-Type": image.type,
                    "Content-Length": image.size.toString(),
                },
            }
        );
        console.log("response", response);

        if (!response.ok) {
            throw new Error("Failed to upload image");
        }

        const data = await response.json();
        return data.url;
    }

    async getImageUrl(key: string) {
        const response = await this.awsClient.fetch(
            `${process.env.R2_ENDPOINT}/${process.env.R2_BUCKET}/${key}`,
            {
                method: "GET",
            }
        );

        if (!response.ok) {
            throw new Error("Failed to get image url");
        }

        const data = await response.json();
        return data.url;
    }

    
}

export const imageStorage = ImageStorage.getInstance();