import { GetAllUserPages } from "@/actions/page/GetAllUserPages";
import { Metadata } from "next"
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { GetUser } from "@/actions/user/GetUser";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CreateNewPage } from "@/components/shared/CreateNewPage";
import { SquareArrowOutUpRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Astralics | Choose Page",
    description: "Generated by create next app",
};
  
export default async function Page() {
    const session = await auth();
    if(!session) redirect('/login');
    const user = await GetUser();
    const pages = await GetAllUserPages();
    return (
        <>
        {/* {JSON.stringify(pages)} */}
        <br />
        <br />
        <div className="w-full items-center flex justify-center">
        <Card className="md:w-[30%] w-[90%]">
            <CardHeader>
                <CardTitle className="align-middle text-center text-lg">Choose Your Page</CardTitle>
            </CardHeader>
            <CardContent className="items-center justify-center flex flex-col gap-4">
            {pages.pages?.map((page:Page) => {
                return (
                    <>
                    <Button variant="outline" asChild className="w-full">
                        <Link href={`/${page.slug}/overview`}>
                            {page.name}
                            {/* <SquareArrowOutUpRight className="w-4 h-4 ml-2"/> */}
                        </Link>
                    </Button>
                    </>
                )
            })}
            <CreateNewPage />
            </CardContent>
        </Card>
        </div>
        </>
    )
}