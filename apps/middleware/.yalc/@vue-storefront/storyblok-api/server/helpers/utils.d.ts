import { Content, Image } from '../types';
export declare const buildImageObject: (items: Image[], actions?: {
    replace: boolean;
}) => Image[] | Image;
export declare const extractNestedComponents: (data: {
    content: Content[];
} | Content[] | Content, stories?: boolean) => void | boolean;
//# sourceMappingURL=utils.d.ts.map