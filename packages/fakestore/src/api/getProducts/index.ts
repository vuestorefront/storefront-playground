import consola from "consola";
import { BoilerplateIntegrationContext, Product, TODO } from "../../types";

/**
 * Get details of multiple products from Fakestore API.
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
 * Fetching a list of products.
 *
 * ```ts
 * import { sdk } from '~/sdk';
 *
 * const product = await sdk.fakestore.getProducts();
 * ``` *
 * @example
 * Fetching a list of products with options.
 *
 * ```ts
 * import { sdk } from '~/sdk';
 *
 * const product = await sdk.fakestore.getProducts({
 *  options: {
 *   limit: 5,
 *    sort: 'asc'
 * }
 * });
 * ```
 */

interface GetProductsParams {
  category?: string;
  options?: {
    limit?: number;
    sort?: string;
  }
}

export const getProducts = async (
  context: BoilerplateIntegrationContext,
  params?: GetProductsParams,
): Promise<{ data: Product[] }> => {
  const { limit = 10, sort = "asc" } = params.options || {};

  const url = params.category ? `https://fakestoreapi.com/products/category/${params.category}?limit=${limit}&sort=${sort}` : `https://fakestoreapi.com/products?limit=${limit}&sort=${sort}`;

  try {
    const products = await fetch(url);
    const data = await products.json();

    return { data };
  } catch (error) {
    consola.error("Error while fetching products", error);
    return { data: [] };
  }
};
