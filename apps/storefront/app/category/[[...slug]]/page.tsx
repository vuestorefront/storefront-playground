import CategorySidebar from "../../../components/ui/CategorySidebar"
import ProductCardVertical from "../../../components/ui/ProductCard";
import { getSdk } from "../../../sdk/sdk.config"

export default async function Category({ params }: { params: { slug: string }, searchParams: URLSearchParams }) {
  const { data: categories } = await getSdk().fakestore.getCategories();
  const { data: products } = await getSdk().fakestore.getProducts({
    category: params.slug && params.slug[0] || '', options: {
      limit: 20
    }
  });

  const withAllCategories = ['all', ...categories];

  return (
    <div className="flex justify-center items-center gap-12 md:px-6 md:py-16 md:items-start md:mx-auto xl:max-w-[1400px]">
      <aside className="hidden md:flex w-3/12 flex-col justify-center gap-4 mx-auto">
        <CategorySidebar categories={withAllCategories} slug={params.slug} />
      </aside>
      <main className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCardVertical key={product.id} product={product} />
        ))}
      </main>
    </div >
  )
}
