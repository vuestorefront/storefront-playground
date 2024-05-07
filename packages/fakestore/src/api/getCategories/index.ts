import consola from "consola";
import type { FakeStoreIntegrationContext } from "../../types";

/**
 * Get all categories
 * 
 * @remarks
 * Check out the Fakestore API documentation for more information.
 * {@link https://fakestoreapi.com/docs}
 *
 * @returns
 * Returns list of categories.
 *
 * @example
 * Fetching all categories
 *
 * ```ts
 * import { getSdk } from "@/sdk/sdk.config"
 * const sdk = getSdk();
 *
 * const product = await sdk.fakestore.getCategories();
 * ```
 * @returns 
 */
export const getCategories = async (
  context: FakeStoreIntegrationContext
): Promise<{ data: string[] }> => {
  try {
    const categories = await fetch(
      "https://fakestoreapi.com/products/categories"
    );
    const data = await categories.json();

    return { data };
  } catch (error) {
    consola.error("Error while fetching categories", error);
    return { data: [] };
  }
};
