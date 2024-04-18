import { Context } from "@fakestore/api-client";
import { ApiClientExtension, IntegrationContext } from "@vue-storefront/middleware";

require('dotenv').config();

export const extensionMethods = {
  getRelatedProducts: async (context: IntegrationContext, params: { productId: string }) => {
    const storyblokClient = context.getApiClient('storyblok');

    try {
      const cmsContent = await storyblokClient.api.getContent({
        url: `product-${params.productId}`,
      });

      const productIds = cmsContent.body.map((item: { product_id: string }) => item.product_id);

      const promises = productIds.map((productId: string) => context.api.getProduct({ code: productId }));

      const relatedProducts = await (await Promise.all(promises)).map((product: Context['$boilerplate']['fakestore']['getProduct']['data']) => product.data);

      return relatedProducts as Context['$boilerplate']['fakestore']['getProduct']['data'][] || [];
    } catch (error) {
      console.error(error);
      return [];
    }
  },
};

export const integrations = {
  fakestore: {
    location: '@fakestore/api-client/server',
    configuration: {},
    extensions: (extensions: ApiClientExtension[]) => [
      ...extensions,
      {
        name: 'fakestore-cms',
        extendApiMethods: {
          ...extensionMethods,
        }
      }
    ]
  },
  storyblok: {
    location: '@vue-storefront/storyblok-api/server',
    configuration: {
      accessToken: 'IaNvC2fZbEAndJhxNfMLmwtt',
      cacheProvider: 'memory',
      region: 'ca',
    },
  }
};