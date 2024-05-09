import { GetPageBySlug } from "@/actions/page/GetPageBySlug";

export default async function Page({ params }: { params: { slug: string } }) {
    const page = await GetPageBySlug(params.slug);
    return (
      <>
      <div>
        <h1 className="font-bold text-2xl">{page.page?.name}</h1>
      </div>
      </>
    )
  }