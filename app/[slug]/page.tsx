import { GetPageBySlug } from "@/actions/page/GetPageBySlug";

export default async function Page({ params }: { params: { slug: string } }) {
    const page = await GetPageBySlug(params.slug);
    return (
      <>
      {JSON.stringify(page)}
      </>
    )
  }