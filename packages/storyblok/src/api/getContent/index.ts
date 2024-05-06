import consola from "consola";
import type { ISbStory } from "storyblok-js-client";
import { v4 as uuid } from "uuid";
import { errorMessage } from "../../helpers/constants";
import type { ContentSearchParams } from "../../types";

/**
 * Get content from Storyblok.
 * 
 * @remarks
 * Uses the [storyblok-js-client](https://github.com/storyblok/storyblok-js-client) to fetch content.
 * 
 * @example
 * Get content of a home page.
 * 
 * ```ts
 * import { getSdk } from "@/sdk/sdk.config"
 * const sdk = getSdk();
 * 
 * const content = await sdk.storyblok.getContent({
 *   url: 'home',
 * });
 * ```
 */
export const getContent = async (
  { client },
  {
    url,
    cache = true,
    locale,
    relations,
    version = "published",
  }: ContentSearchParams
) => {
  try {
    const { data }: { data: ISbStory["data"] } = await client.get(
      `cdn/stories/${url}`,
      {
        ...((!cache ? { cv: uuid() } : {}) as any),
        resolve_relations: relations,
        language: locale,
        version,
      }
    );

    return data.story.content;
  } catch (error) {
    consola.warn(`${errorMessage.GENERAL}`, error);
    return null;
  }
};
