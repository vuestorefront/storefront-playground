export * from "./api";
export * from "./config";
export * from "./context";
export interface ContentSearchParams {
    cache?: boolean;
    version?: Version;
    id?: string;
    url?: string;
    custom?: {} | CustomSearch;
    locale?: string;
    relations?: string;
}
export type Version = 'draft' | 'published';
export interface CustomSearch {
    field: string;
    value: string;
}
export interface ApiContext {
    client: any;
    config: ContentSearchParams;
}
export interface Content {
    content: any;
    component: string;
}
export interface ApiResponse {
    story?: Content;
    stories?: Content[];
    cv: string;
    rels: {}[];
    links: {}[];
}
export interface Component {
    _editable?: {};
    component: string;
}
export interface Image {
    image: string;
}
//# sourceMappingURL=index.d.ts.map