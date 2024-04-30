"use server"
import prisma from "@/lib/database";
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";

export async function CreatePage(name: string, subdomain: string, website: string) {
    const session = await auth();
    if(!session) return { error: 'unauthenticated'}
    try {
        const subdomainexists = await prisma.page.findFirst({
            where: {
                subdomain: subdomain
            }
        })
        if(subdomainexists) return { error: 'subdomain in use'}
        const page = await prisma.page.create({
            data: {
                userId: session.user?.id as string,
                name: name,
                subdomain: subdomain,
                website: website
            }
        })
        revalidatePath('/choose-page');
        return { page }
    } catch (error) {
        return { error }
    }
}