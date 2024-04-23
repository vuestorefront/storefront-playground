import { MiddlewareConfig } from "@fakestore/api-client";
import { Integration } from "@vue-storefront/middleware";
import { relatedProductsExtension } from "./extensions";

export const config = {
  location: "@fakestore/api-client/server",
  configuration: {},
  extensions: (extensions) => [...extensions, relatedProductsExtension],
} satisfies Integration<MiddlewareConfig>;
