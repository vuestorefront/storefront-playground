'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var middleware = require('@vue-storefront/middleware');
var consola = require('consola');
var uuid = require('uuid');
var StoryblokClient = require('storyblok-js-client');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var consola__default = /*#__PURE__*/_interopDefaultLegacy(consola);
var StoryblokClient__default = /*#__PURE__*/_interopDefaultLegacy(StoryblokClient);

const errorMessage = {
    GENERAL: "Can't get data from Storyblok.",
    EMPTY_ID: 'Define story id, url or custom query object.',
    WRONG_CUSTOM: 'Custom query wrong format. Define proper object.',
};

const extractNestedComponents = (data, stories = false) => {
    if (data.content) {
        extractNestedComponents(data.content);
        if (Array.isArray(data.content)) {
            data.content = data.content.map((component) => {
                extractNestedComponents(component);
                if (component.content) {
                    return {
                        component: component.component,
                        content: component.content,
                        _meta: component,
                    };
                }
                return component;
            });
        }
    }
    return {
        ...data.content,
        _meta: !stories ? data : null,
    };
};

const getContent = async ({ client, config }, { id, url, custom, cache = true, locale, relations, version = 'published', }) => {
    if (!url && !id && !custom) {
        return consola__default["default"].warn(`${errorMessage.GENERAL} ${errorMessage.EMPTY_ID}`);
    }
    const resolveCustomSearch = id ? { by_uuids_ordered: id } : custom || {};
    if (!id && custom && typeof custom !== 'object') {
        return consola__default["default"].warn(`${errorMessage.GENERAL} ${errorMessage.WRONG_CUSTOM}`);
    }
    try {
        const { data } = await client.get(`cdn/stories/${id || custom ? '' : url}`, {
            ...(!cache ? { cv: uuid.v4() } : {}),
            ...resolveCustomSearch,
            resolve_relations: relations,
            language: locale,
            version,
        });
        return data.story
            ? extractNestedComponents(data.story)
            : extractNestedComponents({ content: data.stories }, true) || [];
    }
    catch (error) {
        consola__default["default"].warn(`${errorMessage.GENERAL}`, error);
        return [];
    }
};

var apiEndpoints = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getContent: getContent
});

/**
 * Builds Contentful client instance.
 */
const buildClient = (config) => {
    const { accessToken, cacheProvider, region, } = config;
    return new StoryblokClient__default["default"]({
        accessToken,
        cache: {
            clear: "auto",
            type: cacheProvider,
        },
        region,
    });
};

const onCreate = (settings) => {
    const client = buildClient(settings);
    return {
        config: settings,
        client,
    };
};
const { createApiClient } = middleware.apiClientFactory({
    onCreate,
    api: apiEndpoints,
});

exports.createApiClient = createApiClient;
//# sourceMappingURL=index.js.map
