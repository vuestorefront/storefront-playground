import { apiClientFactory } from "@vue-storefront/middleware";
import * as apiEndpoints from "./api";
import { buildClient } from "./client";
import type { MiddlewareConfig } from "./index";

const onCreate = (settings: MiddlewareConfig) => {
  const client = buildClient(settings);

  return {
    config: settings,
    client,
  };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const { createApiClient } = apiClientFactory<any, any>({
  onCreate,
  api: apiEndpoints,
});

export { createApiClient };
