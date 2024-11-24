import { defineField, defineType } from "sanity";

export const imageGalleryType = defineType({
  name: "gallery",
  type: "object",
  title: "Gallery",
  fields: [
    defineField({
      name: "heading",
      type: "string",
    }),
    {
      name: "images",
      type: "array",
      of: [
        defineField({
          name: "image",
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative text",
            },
          ],
        }),
      ],
      options: {
        layout: "grid",
      },
    },
  ],
});

