import Image from "next/image";
import { auth } from "@/auth";
import { Navigation } from "@/components/shared/Navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Astralics",
  description: "Generated by create next app",
};

export default async function Home() {
  const session = await auth();
  return (
    <>
    <Navigation session={session}/>
    <div className="text-center w-full py-6">
      <div className="py-8">
        <h1 className="font-bold text-4xl">Collect Feedback.</h1>
        <h1 className="font-bold text-4xl">Build Better Products.</h1>
      </div>
    </div>
    </>
  );
}
