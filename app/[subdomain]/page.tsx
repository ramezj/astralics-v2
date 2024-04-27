export default function Page({ params }: { params: { subdomain: string } }) {
    return <div>Sub : {params.subdomain}</div>
  }