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
import { projectType } from "./schemaTypes/projectType";
import { sectionImageOverlay } from "./schemaTypes/sectionImageOverlayType";
import { expertiseType } from "./schemaTypes/expertiseType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    postType,
    authorType,
    categoryType,
    blockContentType,
    formType,
    heroType,
    sectionImageOverlay,
    imageGalleryType,
    pageType,
    promotionType,
    projectType,
    textWithIllustrationType,
    videoType,
    expertiseType,
  ],
};
