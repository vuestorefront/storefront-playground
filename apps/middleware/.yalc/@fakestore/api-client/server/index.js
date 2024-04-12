'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var axios = require('axios');
var middleware = require('@vue-storefront/middleware');
var consola = require('consola');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var axios__default = /*#__PURE__*/_interopDefaultLegacy(axios);
var consola__default = /*#__PURE__*/_interopDefaultLegacy(consola);

/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * Greets the integrator with a friendly message.
 *
 * @remarks
 * This is an example method that can be used as a starting point for creating new methods.
 *
 * @example
 * SDK usage:
 * ```ts
 * const result = await sdk.boilerplate.exampleMethod("test");
 * console.log(result); // { data: "Hello, Vue Storefront Integrator!" }
 * ```
 */
const exampleMethod = async (context, params) => {
    consola__default["default"].log("exampleEndpoint has been called");
    // Example request could look like this:
    // return await context.client.get(`example-url?id=${params.id}`);
    return { data: "Hello, Vue Storefront Integrator!" };
};

const getProducts = async (context, params) => {
    const { limit = 10, sort = "asc" } = params.options || {};
    const url = params.category ? `https://fakestoreapi.com/products/category/${params.category}?limit=${limit}&sort=${sort}` : `https://fakestoreapi.com/products?limit=${limit}&sort=${sort}`;
    try {
        const products = await fetch(url);
        const data = await products.json();
        return { data };
    }
    catch (error) {
        consola__default["default"].error("Error while fetching products", error);
        return { data: [] };
    }
};

const getProduct = async (context, params) => {
    try {
        const product = await fetch(`https://fakestoreapi.com/products/${params?.code}`);
        const data = await product.json();
        return { data };
    }
    catch (error) {
        consola__default["default"].error("Error while fetching products", error);
        return { data: null };
    }
};

const getCategories = async (context) => {
    try {
        const categories = await fetch("https://fakestoreapi.com/products/categories");
        const data = await categories.json();
        return { data };
    }
    catch (error) {
        consola__default["default"].error("Error while fetching categories", error);
        return { data: [] };
    }
};

var apiEndpoints = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getProducts: getProducts,
  getProduct: getProduct,
  getCategories: getCategories,
  exampleMethod: exampleMethod
});

/**
 * In here you should create the client you'll use to communicate with the backend.
 * Axios is just an example.
 */
const buildClient = () => {
    const axiosInstance = axios__default["default"].create();
    return axiosInstance;
};
const onCreate = (settings) => {
    const client = buildClient();
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
