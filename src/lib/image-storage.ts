// using aws4fetch (because lightweight and edge-compatible with the edge runtime) to upload images to cloudflare r2
import { AwsClient } from "aws4fetch";

class ImageStorage {
    private awsClient: AwsClient;
    static instance: ImageStorage;

    private constructor() {
        this.awsClient = new AwsClient({
            accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
            service: "s3",
            region: "us-east-1",
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
        const formData = new FormData();
        formData.append("file", image);

        const response = await this.awsClient.fetch(
            `https://r2.cloudflarestorage.com/v1/object/upload/${key}`,
            {
                method: "POST",
                body: formData,
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }
        );

        if (!response.ok) {
            throw new Error("Failed to upload image");
        }

        const data = await response.json();
        return data.url;
    }

    async getImageUrl(key: string) {
        const response = await this.awsClient.fetch(
            `https://r2.cloudflarestorage.com/v1/object/get/${key}`,
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