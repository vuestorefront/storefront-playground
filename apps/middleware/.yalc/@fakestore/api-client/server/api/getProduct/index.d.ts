import { BoilerplateIntegrationContext, Product } from "../../types";
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
interface GetProductsParams {
    code: string;
}
export declare const getProduct: (context: BoilerplateIntegrationContext, params: GetProductsParams) => Promise<{
    data: Product;
}>;
export {};
//# sourceMappingURL=index.d.ts.map