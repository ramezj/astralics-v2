import { auth } from "@/auth"
import { redirect } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Issues",
    description: "Generated by create next app",
  };

export default async function page() {
    const session = await auth();
    if(!session) redirect('/login');
    return (
        <div className="p-4">
        <h1 className="font-bold text-3xl">Issues</h1>
        </div>
    )
}