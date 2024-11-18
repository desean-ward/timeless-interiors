import { defineField, defineType } from "sanity";

export const expertiseType = defineType({
  name: "expertise",
  type: "object",
  title: "Expertise",
  fields: [
    defineField({
      name: "heading",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
    }),
    defineField({
      name: "tagline",
      type: "string",
    }),
    defineField({
      name: "excerpt",
      type: "text",
    }),
    defineField({
      name: "link",
      type: "url",
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
