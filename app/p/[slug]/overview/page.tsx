import { auth } from "@/auth"
import { redirect } from "next/navigation";
import { GetPageBySlug } from "@/actions/page/GetPageBySlug";

export default async function page( { params }: { params: { slug: string } }) {
    const session = await auth();
    if(!session) redirect('/login');
    const page = await GetPageBySlug(params.slug);
    if(page.error) { console.error(page.error) }
    return (
        <div className="p-4">
        <h1 className="font-bold text-3xl">Overview</h1>
        {JSON.stringify(page)}
        </div>
    )
}