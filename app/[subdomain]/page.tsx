import { GetPageBySubdomain } from "@/actions/page/GetPageBySubdomain"

export default async function Page({ params }: { params: { subdomain: string } }) {
    const page = await GetPageBySubdomain(params.subdomain);
    return (
      <>
      {JSON.stringify(page)}
      </>
    )
  }