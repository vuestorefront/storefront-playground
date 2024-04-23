import type { Product } from '@fakestore/api-client';
import { SfButton, SfRating, SfCounter, SfLink, SfIconShoppingCart, SfIconFavorite } from '@storefront-ui/react';
import Image from 'next/image';

export default function ProductCardVertical({ product }: { product: Product }) {
  return (
    <div className="border border-neutral-200 rounded-md hover:shadow-lg max-w-[300px]">
      <div className="relative">
        <SfLink href={`/product/${product.id}`} className="block">
          <Image
            src={product.image}
            alt="Great product"
            className="object-cover h-auto rounded-md aspect-square"
            width="300"
            height="300"
          />
        </SfLink>
        <SfButton
          variant="tertiary"
          size="sm"
          square
          className="absolute bottom-0 right-0 mr-2 mb-2 bg-white ring-1 ring-inset ring-neutral-200 !rounded-full"
          aria-label="Add to wishlist"
        >
          <SfIconFavorite size="sm" />
        </SfButton>
      </div>
      <div className="p-4 border-t border-neutral-200">
        <SfLink href="#" variant="secondary" className="no-underline">
          {product.title}
        </SfLink>
        <div className="flex items-center pt-1">
          <SfRating size="xs" value={product.rating.rate} max={5} />

          <SfLink href="#" variant="secondary" className="pl-1 no-underline">
            <SfCounter size="xs">{product.rating.count}</SfCounter>
          </SfLink>
        </div>
        <p
          className="block py-2 font-normal typography-text-sm text-neutral-700"
          dangerouslySetInnerHTML={{ __html: product.description.length > 100 ? product.description.slice(0, 100) + '...' : product.description }}
        ></p>
        <span className="block pb-2 font-bold typography-text-lg">${product.price}</span>
        <SfButton size="sm" slotPrefix={<SfIconShoppingCart size="sm" />}>
          Add to cart
        </SfButton>
      </div>
    </div>
  );
}
