import { BsBrush } from "react-icons/Bs";

export default {
  name: "painting",
  title: "Paintings",
  icon: BsBrush,
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: Rule => Rule.required(),
    },
    {
      name: "paintingImage",
      title: "Image of Painting",
      type: "image",
      validation: Rule => Rule.required(),
    },
    {
      name: "paintingType",
      title: "Type of Painting",
      type: "string",
      validation: Rule => Rule.required(),
    },
    {
      name: "dimensions",
      title: "Dimensions",
      type: "string",
      validation: Rule => Rule.required(),
    },
    {
      title: "Has the painting been sold?",
      name: "sold",
      type: "boolean",
    },
    {
      title: "Price",
      name: "price",
      type: "number",
    },
    {
      title: "Are prints available?",
      name: "prints",
      type: "boolean",
    },
    {
      title: "Category",
      name: "category",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          {
            title: "Kootenay Life",
            value: "kl-gallery",
          },
          { title: "Mickey Mouse House", value: "mmh-gallery" },
          { title: "Dog", value: "dog-gallery" },
          { title: "Canadiana", value: "can-gallery" },
        ],
      },
      validation: Rule => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    },
  ],
};
