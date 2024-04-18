import consola from "consola";
import { v4 as uuid } from 'uuid';
import { ContentSearchParams, ApiResponse } from "../../types";
import { errorMessage } from "../../helpers/constants";
import { extractNestedComponents } from "../../helpers/utils";
import { ISbStory } from "storyblok-js-client";

export const getContent = async (
  { client, config },
  {
    url,
    cache = true,
    locale,
    relations,
    version = 'published',
  }: ContentSearchParams,
) => {
  try {
    const { data }: { data: ISbStory['data'] } = await client.get(
      `cdn/stories/${url}`,
      {
        ...((!cache ? { cv: uuid() } : {}) as any),
        resolve_relations: relations,
        language: locale,
        version,
      },
    )


    return data.story.content;
  } catch (error) {
    consola.warn(`${errorMessage.GENERAL}`, error)
    return null
  }
};
