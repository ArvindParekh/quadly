export interface Interest {
    id: string;
    name: string;
  }
  
  export interface UserInterest {
    id: string;
    interest: Interest;
  }
  
  export interface UserDetailsClient {
    id: string;
    userId: string;
    name: string;
    bio: string;
    department: string;
    year: string;
    image: string;
    reading: string;
    availability: string;
    userInterests: UserInterest[];
  }