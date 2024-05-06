import { GetPageBySubdomain } from "@/actions/page/GetPageBySubdomain"
import { auth } from "@/auth";
import { IsPageOwner } from "@/actions/page/IsPageOwner";
import { redirect } from "next/navigation";

export default async function Page({ params }: { params: { subdomain: string } }) {
    const session = await auth();
    console.log(session);
    const IsOwner = await IsPageOwner(params.subdomain);
    console.log(IsOwner)
    return (
      <>
      OVERVIEW
      {JSON.stringify(IsOwner.page)}
      </>
    )
  }