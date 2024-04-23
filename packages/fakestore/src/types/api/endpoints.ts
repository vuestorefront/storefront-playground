import type { WithoutContext } from "@vue-storefront/middleware";
import type * as apiMethods from "../../api";

export type ApiMethods = typeof apiMethods;

export type Endpoints = WithoutContext<ApiMethods>;
