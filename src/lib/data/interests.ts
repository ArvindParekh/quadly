import { prisma } from "../prisma"


export const getCommonInterests = async (userId: string, thisUserId: string) => {

    try {
        const userInterests = await prisma.userDetails.findFirst({
            where: {
                userId: thisUserId,
            },
            include: {
                interests: true,
            }
        })

        const thisUserInterests = await prisma.userDetails.findUnique({
            where: {
                userId: userId,
            },
            include: {
                interests: true,
            }
        })

        if (!userInterests || !thisUserInterests) {
            throw new Error("User not found");
        }

        const commonInterests = userInterests.interests.filter(interest => thisUserInterests.interests.some(i => i.id === interest.id));

        return commonInterests;
    } catch (error) {
        console.error(error);
        return [];
    }
}