import consola from "consola";
import type { FakeStoreIntegrationContext, Product } from "../../types";

interface GetProductsParams {
  code: string;
}

/**
 * Get details of a product from Fakestore API.
 *
 * @remarks
 * Check out the Fakestore API documentation for more information.
 * {@link https://fakestoreapi.com/docs}
 *
 * @param params
 * Parameter object which can be used with this method.
 * Refer to its type definition to learn about possible properties.
 *
 * @returns
 * Returns a representation of a list of Products.
 *
 * @example
 * Fetching a product by its code
 *
 * ```ts
 * import { getSdk } from "@/sdk/sdk.config"
 * const sdk = getSdk();
 *
 * const product = await sdk.fakestore.getProduct({ code: '1' });
 * ```
 */
export const getProduct = async (
  context: FakeStoreIntegrationContext,
  params: GetProductsParams
): Promise<{ data: Product }> => {
  try {
    const product = await fetch(
      `https://fakestoreapi.com/products/${params?.code}`
    );
    const data = await product.json();

    return { data };
  } catch (error) {
    consola.error("Error while fetching products", error);
    return { data: null };
  }
};
