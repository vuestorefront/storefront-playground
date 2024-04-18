import { type WithoutContext } from "@vue-storefront/middleware";
import { extensionMethods } from "./middleware.config";

export { type Endpoints as FakeStoreEndpoints } from "@fakestore/api-client";
export type ExtensionEndpoints = WithoutContext<typeof extensionMethods>;
