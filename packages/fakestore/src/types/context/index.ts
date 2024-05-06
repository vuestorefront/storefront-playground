import type { AxiosInstance } from "axios";
import type { IntegrationContext } from "@vue-storefront/middleware";
import type { MiddlewareConfig, Endpoints } from "../index";

/**
 * Runtime integration context, which includes API client instance, settings, and endpoints that will be passed via middleware server.
 * This interface name is starting with `Boilerplate`, but you should use your integration name in here.
 * */
export type FakeStoreIntegrationContext = IntegrationContext<
  AxiosInstance,
  MiddlewareConfig,
  Endpoints
>;
