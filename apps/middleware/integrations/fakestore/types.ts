import { WithoutContext } from "@vue-storefront/middleware";
import type { relatedProductsExtension } from "./extensions";

export type { Endpoints as FakeStoreEndpoints } from "@fakestore/api-client";

export type RelatedProductsExtension = typeof relatedProductsExtension;
export type RelatedProductsEndpoints = WithoutContext<
  RelatedProductsExtension["extendApiMethods"]
>;
