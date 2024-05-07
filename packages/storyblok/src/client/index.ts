import StoryblokClient from "storyblok-js-client";
import type { MiddlewareConfig } from "../types";

/**
 * Builds Storyblok client instance.
 */
export const buildClient = (config: MiddlewareConfig) => {
  const { accessToken, cacheProvider, region } = config;

  return new StoryblokClient({
    accessToken,
    cache: {
      clear: "auto",
      type: cacheProvider,
    },
    region,
  });
};
