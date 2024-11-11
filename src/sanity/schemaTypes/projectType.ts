import { defineArrayMember, defineField, defineType } from "sanity";

export const projectType = defineType({
  name: "project",
  type: "object",
  title: "Project Information",
  fields: [
    defineField({
      name: "projectname",
      type: "string",
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
      name: "location",
      type: "string",
    }),
    defineField({
      name: "url",
      title: "url",
      type: "url",
      description: `Can be a path starting wit  a '/' or a full Url starting with 'http://' or 'https://'`,
    }),
    {
      name: "images",
      type: "array",
      of: [
        defineArrayMember({
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
