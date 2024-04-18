import { redirect } from "next/navigation";
import ProductDetails from "../../../components/ui/ProductDetails";
import { getSdk } from "../../../sdk/sdk.config"
import GalleryWithBullets from "../../../components/ui/Gallery";
import ProductCardVertical from "../../../components/ui/ProductCard";

export default async function Page({ params }: { params: { code: string } }) {
  const { code } = params;

  const { data: product } = await getSdk().fakestore.getProduct({ code });

  const relatedProducts = await getSdk().fakestore.getRelatedProducts({ productId: code });

  if (product === null) {
    redirect('/not-found');
  }

  const images = [{
    imageSrc: product.image,
    alt: product.title,
  }]

  return (
    <section className="flex flex-col gap-12 p-12">
      <section className="flex flex-col md:flex-row md:gap-12">
        <GalleryWithBullets images={images} />
        <ProductDetails product={product} />
      </section>
      {relatedProducts.length > 0 && (
        <section className="flex flex-col gap-12">
          <h2 className="text-3xl font-bold">Related products</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {relatedProducts.map(product => <ProductCardVertical key={product.id} product={product} />)}
          </div>
        </section>
      )}
    </section>
  );
}
