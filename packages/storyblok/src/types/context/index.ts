import type { AxiosInstance } from "axios";
import type { IntegrationContext } from "@vue-storefront/middleware";
import type { MiddlewareConfig, Endpoints } from "../index";

/**
 * Runtime integration context, which includes API client instance, settings, and endpoints that will be passed via middleware server.
 * */
export type StoryblockIntegrationContext = IntegrationContext<
  AxiosInstance,
  MiddlewareConfig,
  Endpoints
>;

