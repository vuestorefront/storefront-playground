import type { CreateSdkOptions} from "@vue-storefront/next";
import { createSdk } from "@vue-storefront/next";
import type {
  FakeStoreEndpoints,
  RelatedProductsEndpoints,
  StoryblokEndpoints,
} from "../../middleware/types";

const options: CreateSdkOptions = {
  middleware: {
    apiUrl: "http://localhost:8181",
  },
};

export const { getSdk } = createSdk(
  options,
  ({ buildModule, middlewareUrl, middlewareModule, getRequestHeaders }) => ({
    fakestore: buildModule(
      middlewareModule<FakeStoreEndpoints & RelatedProductsEndpoints>,
      {
        apiUrl: middlewareUrl + "/fakestore",
        defaultRequestConfig: {
          headers: getRequestHeaders(),
        },
      }
    ),
    storyblok: buildModule(middlewareModule<StoryblokEndpoints>, {
      apiUrl: middlewareUrl + "/storyblok",
      defaultRequestConfig: {
        headers: getRequestHeaders(),
      },
    }),
  })
);
