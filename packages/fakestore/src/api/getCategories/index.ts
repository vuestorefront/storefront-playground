import consola from "consola";
import type { BoilerplateIntegrationContext } from "../../types";

export const getCategories = async (
  _context: BoilerplateIntegrationContext
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
