import Image from 'next/image';
import classNames from 'classnames';
import ProductCardVertical from '../ui/ProductCard';
import placeholderImage from '~/public/images/card-placeholder.png';

type ProductListProps = {
  items: {
    product: string
  }[];
};

export default function ProductList({ items }: ProductListProps) {
  const skus = items?.map(({ product }) => product);
  const products = useProductsCatalog({ skus }, { select: (data) => data.products });

  if (!products.isSuccess || products.data.length === 0) {
    return null;
  }

  const productsList = skus.reduce<SfProductCatalogItem[]>((acc, entry) => {
    const productData = products.data.find((product) => product.sku === entry);
    if (productData) {
      acc.push(productData);
    }
    return acc;
  }, []);

  return productsList.map(({ id, sku, slug, name, price, primaryImage }) => (
    <ProductCardVertical
      key={id + sku}
      id={id}
      size="sm"
      className={classNames('w-[148px] md:w-[192px] shrink-0 self-stretch')}
      title={name || ''}
      price={price?.value}
      oldPrice={price?.isDiscounted ? price?.regularPrice : undefined}
      link={appRoutes.product.compile({ id, sku, slug })}
      slotImage={
        <Image
          className="object-contain aspect-square"
          data-testid="image-slot"
          src={primaryImage?.url ?? placeholderImage}
          alt={primaryImage?.alt ?? ''}
          width="192"
          height="192"
          unoptimized={!primaryImage}
          crossOrigin="anonymous"
        />
      }
    />
  ));
}
