import { SchemaTypeDefinition } from "sanity";
import { postType } from "./schemaTypes/postType";
import { authorType } from "./schemaTypes/authorType";
import { categoryType } from "./schemaTypes/categoryType";
import { blockContentType } from "./schemaTypes/blockContentType";
import { formType } from "./schemaTypes/formType";
import { heroType } from "./schemaTypes/heroType";
import { imageGalleryType } from "./schemaTypes/imageGalleryType";
import { pageType } from "./schemaTypes/pageType";
import { promotionType } from "./schemaTypes/promotionType";
import { textWithIllustrationType } from "./schemaTypes/textWithIllu";
import { videoType } from "./schemaTypes/videoType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    postType,
    authorType,
    categoryType,
    blockContentType,
    formType,
    heroType,
    imageGalleryType,
    pageType,
    promotionType,
    textWithIllustrationType,
    videoType,
  ],
};
