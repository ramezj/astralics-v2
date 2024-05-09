import { auth } from "@/auth"
import { redirect } from "next/navigation";

export default async function page() {
    const session = await auth();
    if(!session) redirect('/login');
    return (
        <div className="p-4">
        <h1 className="font-bold text-3xl">Ideas</h1>
        
        </div>
    )
}