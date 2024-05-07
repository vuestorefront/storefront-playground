import { WithoutContext } from "@vue-storefront/middleware";
import type { relatedProductsExtension } from "./extensions";
import { Endpoints as FakeStoreEndpoints } from "@vue-storefront/fakestore-api";

export type { Endpoints as FakeStoreEndpoints } from "@vue-storefront/fakestore-api";

export type RelatedProductsExtension = typeof relatedProductsExtension;
export type RelatedProductsEndpoints = WithoutContext<
  RelatedProductsExtension["extendApiMethods"]
>;

export type ExtendedFakeStoreEndpoints = FakeStoreEndpoints & RelatedProductsEndpoints;