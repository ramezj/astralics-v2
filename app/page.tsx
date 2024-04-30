import Image from "next/image";
import { auth } from "@/auth";
import { Navigation } from "@/components/shared/Navigation";

export default async function Home() {
  const session = await auth();
  return (
    <>
    <Navigation session={session}/>
    <h1 className="font-bold text-2xl">Hello World, This is NOT a Subdomain.</h1>
    </>
  );
}
