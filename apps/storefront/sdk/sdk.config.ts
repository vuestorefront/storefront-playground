import { CreateSdkOptions, createSdk } from "@vue-storefront/next";
import { Endpoints } from "@fakestore/api-client";

const options: CreateSdkOptions = {
  middleware: {
    apiUrl: "http://localhost:8181",
  }
};

export const { getSdk } = createSdk(
  options,
  ({ buildModule, middlewareUrl, middlewareModule, getRequestHeaders }) => ({
    fakestore: buildModule(middlewareModule<Endpoints>, {
      apiUrl: middlewareUrl + "/fakestore",
      defaultRequestConfig: {
        headers: getRequestHeaders(),
      },
    }),
  }),
);