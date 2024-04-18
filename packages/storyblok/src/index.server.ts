import axios from "axios";
import { apiClientFactory } from "@vue-storefront/middleware";
import { MiddlewareConfig } from "./index";
import * as apiEndpoints from "./api";
import { buildClient } from "./client";


const onCreate = (settings: MiddlewareConfig) => {
  const client = buildClient(settings);

  return {
    config: settings,
    client,
  };
};

const { createApiClient } = apiClientFactory<any, any>({
  onCreate,
  api: apiEndpoints,
});

export { createApiClient };
