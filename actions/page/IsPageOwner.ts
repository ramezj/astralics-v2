"use server"
import prisma from "@/lib/database";
import { auth } from "@/auth";

export async function IsPageOwner(slug: string) {
    const session = await auth();
    try {
        const page = await prisma.page.findFirst({
            where: {
                slug:slug
            },
            include: {
                feedbacks: true
            }
        })
        console.log(" PAGE USER ID :", page?.userId);
        console.log(" SESSION USER ID", session?.user?.id);
        if(page?.userId != session?.user?.id) {
            return { error: 'unauthenticated'}
        } else {
            return { page }
        }
    } catch (error) {
        return { error }
    }
}