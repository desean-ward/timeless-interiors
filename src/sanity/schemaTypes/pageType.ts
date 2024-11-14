import { defineArrayMember, defineField, defineType } from "sanity";

export const pageType = defineType({
  name: "page",
  type: "document",
  title: "Page",
  fields: [
    defineField({ name: "title", type: "string" }),
    defineField({
      name: "slug",
      type: "string",
      title: "Slug",
    }),
    defineField({
      name: "pageBuilder",
      type: "array",
      title: "Page builder",
      of: [
        defineArrayMember({
          type: "hero",
        }),
        defineArrayMember({
          type: "textWithIllustration",
        }),
        defineArrayMember({
          type: "gallery",
        }),
        defineArrayMember({
          type: "form",
        }),
        defineArrayMember({
          type: "video",
        }),
        defineArrayMember({
          type: "reference",
          to: [{ type: "promotion" }],
        }),
        defineArrayMember({
          type: "project",
        }),
      ],
    }),
  ],
});
