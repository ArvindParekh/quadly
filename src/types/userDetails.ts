export interface Interest {
   id: string;
   name: string;
}

export interface UserInterest {
   id: string;
   interest: Interest;
}

export type UserDetailsClient = {
   interests: {
      id: string;
      interestName: string;
   }[];
} & {
   name: string;
   id: string;
   userId: string;
   department: string | null;
   year: string | null;
   profilePicture: string | null;
   bio: string | null;
   availability: string | null;
   reading: string | null;
};
