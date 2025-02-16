// Import necessary types
import { SchemaTypeDefinition } from "sanity";
import { postType } from "./postType";
import { authorType } from "./authorType";
import { categoryType } from "./categoryType";
import { blockContentType } from "./blockContentType";
import { formType } from "./formType";
import { heroType } from "./heroType";
import { imageGalleryType } from "./imageGalleryType";
import { pageType } from "./pageType";
import { promotionType } from "./promotionType";
import { textWithIllustrationType } from "./textWithIllu";
import { videoType } from "./videoType";
import { projectType } from "./projectType";
import { sectionImageOverlay } from "./sectionImageOverlayType";
import { expertiseType } from "./expertiseType";
import { callToActionType } from "./callToActionType";

// Register all types in the schema
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    categoryType,
    postType,
    authorType,
    pageType,
    promotionType,
    formType,
    heroType,
    sectionImageOverlay,
    imageGalleryType,
    textWithIllustrationType,
    videoType,
    projectType,
    expertiseType,
    callToActionType,
  ],
};
