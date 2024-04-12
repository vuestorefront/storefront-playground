import { redirect } from "next/navigation";
import ProductDetails from "../../components/ui/ProductDetails";
import { getSdk } from "../../sdk/sdk.config"
import GalleryWithBullets from "../../components/ui/Gallery";

export default async function Page({ params }: { params: { code: string } }) {
  const { code } = params;

  const { data: product } = await getSdk().fakestore.getProduct({ code });

  if (product === null) {
    redirect('/not-found');
  }

  const images = [{
    imageSrc: product.image,
    alt: product.title,
  }]

  return (
    <section className="p-12">
      <section className="flex gap-12">
        <GalleryWithBullets images={images} />
        <ProductDetails product={product} />
      </section>
    </section>
  );
}
