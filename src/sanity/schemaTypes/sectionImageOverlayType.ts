import { defineField, defineType } from "sanity";

export const sectionImageOverlay = defineType({
  name: "sectionImageOverlay",
  type: "object",
  title: "Image Overlay Text",
  fields: [
    defineField({
      name: "heading",
      type: "string",
    }),
    defineField({
      name: "tagline",
      type: "string",
    }),
    defineField({
      name: "image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alternate Text",
        }),
      ],
    }),
  ],
});
