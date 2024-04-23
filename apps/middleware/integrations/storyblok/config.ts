import type { Integration } from "@vue-storefront/middleware";
import type { MiddlewareConfig } from "@vue-storefront/storyblok-api";

export const config = {
  location: "@vue-storefront/storyblok-api/server",
  configuration: {
    accessToken: "IaNvC2fZbEAndJhxNfMLmwtt",
    cacheProvider: "memory",
    region: "ca",
  },
} satisfies Integration<MiddlewareConfig>;
