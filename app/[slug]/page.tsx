import { GetPageBySubdomain } from "@/actions/page/GetPageBySubdomain"

export default async function Page({ params }: { params: { slug: string } }) {
    const page = await GetPageBySubdomain(params.slug);
    return (
      <>
      {JSON.stringify(page)}
      </>
    )
  }