"use server"
import prisma from "@/lib/database";
import { auth } from "@/auth";

export async function GetPageBySubdomain(subdomain: string) {
    try {
        const page = await prisma.page.findFirst({
            where: {
                subdomain:subdomain
            },
            include: {
                feedbacks: true
            }
        })
        return { page }
    } catch (error) {
        return { error }
    }
}