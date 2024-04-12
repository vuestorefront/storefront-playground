import CategorySidebar from "../../../components/ui/CategorySidebar"
import ProductCardVertical from "../../../components/ui/ProductCard";
import { getSdk } from "../../../sdk/sdk.config"

export default async function Category({ params }: { params: { slug: string }, searchParams: URLSearchParams }) {
  const { data: categories } = await getSdk().fakestore.getCategories();
  const { data: products } = await getSdk().fakestore.getProducts({ category: params.slug && params.slug[0] || '' });

  const withAllCategories = ['all', ...categories];

  return (
    <div className="flex gap-12 px-6 py-16 items-start">
      <aside className="w-3/12 flex flex-col justify-center gap-4">
        <CategorySidebar categories={withAllCategories} slug={params.slug} />
      </aside>
      <main className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {products.map((product) => (
          <ProductCardVertical key={product.id} product={product} />
        ))}
      </main>
    </div >
  )
}
