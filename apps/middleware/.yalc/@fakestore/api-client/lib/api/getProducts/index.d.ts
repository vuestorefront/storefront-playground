import { BoilerplateIntegrationContext, Product } from "../../types";
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
    };
}
export declare const getProducts: (context: BoilerplateIntegrationContext, params?: GetProductsParams) => Promise<{
    data: Product[];
}>;
export {};
//# sourceMappingURL=index.d.ts.map