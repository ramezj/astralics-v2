"use server"
import prisma from "@/lib/database";
import { auth } from "@/auth";

export async function GetPageBySlug(slug: string) {
    try {
        const page = await prisma.page.findFirst({
            where: {
                slug:slug
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