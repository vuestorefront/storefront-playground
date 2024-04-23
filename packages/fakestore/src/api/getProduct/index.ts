import consola from "consola";
import type { BoilerplateIntegrationContext, Product } from "../../types";

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
 * import { sdk } from '~/sdk';
 *
 * const product = await sdk.fakestore.getProduct({ code: '1' });
 * ```
 */
export const getProduct = async (
  context: BoilerplateIntegrationContext,
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
