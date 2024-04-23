import { ApiClientExtension } from "@vue-storefront/middleware";
import { getRelatedProducts } from "../../../api/related-products";

export const relatedProductsExtension = {
  name: "relatedProducts",
  extendApiMethods: {
    getRelatedProducts,
  },
} satisfies ApiClientExtension;
