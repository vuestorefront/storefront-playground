import { MiddlewareConfig } from "@vue-storefront/fakestore-api";
import { Integration } from "@vue-storefront/middleware";
import { relatedProductsExtension } from "./extensions";

export const config = {
  location: "@vue-storefront/fakestore-api/server",
  configuration: {},
  extensions: (extensions) => [...extensions, relatedProductsExtension],
} satisfies Integration<MiddlewareConfig>;
