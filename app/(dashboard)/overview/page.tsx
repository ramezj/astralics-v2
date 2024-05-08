import { auth } from "@/auth"
import { GetAllUserPages } from "@/actions/page/GetAllUserPages"
import { redirect } from "next/navigation";

export default async function page() {
    const session = await auth();
    if(!session) redirect('/login');
    const pages = await GetAllUserPages();
    if(pages.error) redirect('/login');
    return (
        <div className="p-4">
        <h1 className="font-bold text-3xl">Pages</h1>
        {pages.pages?.pages.map((page: Page) => {
            return (
                <>
                {page.name}, {page.id}
                <br />
                </>
            )
        })}
        </div>
    )
}