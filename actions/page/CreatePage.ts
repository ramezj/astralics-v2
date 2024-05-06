"use server"
import prisma from "@/lib/database";
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";

export async function CreatePage(name: string, slug: string, website: string) {
    const session = await auth();
    if(!session) return { error: 'unauthenticated'}
    try {
        const slugExists = await prisma.page.findFirst({
            where: {
                slug: slug
            }
        })
        if(slugExists) return { error: 'subdomain in use'}
        const page = await prisma.page.create({
            data: {
                userId: session.user?.id as string,
                name: name,
                slug: slug,
                website: website
            }
        })
        revalidatePath('/choose-page');
        return { page }
    } catch (error) {
        return { error }
    }
}