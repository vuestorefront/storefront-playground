/**
 * Settings to be provided in the `middleware.config.js` file.
 */
export interface MiddlewareConfig {
    /**
     * preview token from your space dashboard at https://app.storyblok.com
     */
    accessToken: string;
    /**
     * Storyblok cache provider to use. Default is `none`.
     */
    cacheProvider?: "none" | "memory";
    /**
     * Storyblok region
     */
    region?: string;
}
//# sourceMappingURL=index.d.ts.map