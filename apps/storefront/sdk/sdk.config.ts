import { CreateSdkOptions, createSdk } from "@vue-storefront/next";
import { Endpoints } from "@fakestore/api-client";
import { Endpoints as SbEndpoints } from "@vue-storefront/storyblok-api";
import { ExtensionEndpoints as FakeStoreEndpoints } from "../../middleware/types";

const options: CreateSdkOptions = {
  middleware: {
    apiUrl: "http://localhost:8181",
  }
};

export const { getSdk } = createSdk(
  options,
  ({ buildModule, middlewareUrl, middlewareModule, getRequestHeaders }) => ({
    fakestore: buildModule(middlewareModule<Endpoints & FakeStoreEndpoints>, {
      apiUrl: middlewareUrl + "/fakestore",
      defaultRequestConfig: {
        headers: getRequestHeaders(),
      },
    }),
    storyblok: buildModule(middlewareModule<SbEndpoints>, {
      apiUrl: middlewareUrl + "/storyblok",
      defaultRequestConfig: {
        headers: getRequestHeaders(),
      },
    }),
  }),
);