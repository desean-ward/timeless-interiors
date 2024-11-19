import { defineField, defineType } from "sanity";

export const callToActionType = defineType({
  name: "callToAction",
  type: "object",
  title: "Call to Action",
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "label",
      type: "string",
    }),
    defineField({
      name: "link",
      type: "url",
    }),
  ],
});
