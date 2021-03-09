import { TiDocumentText as icon } from "react-icons/Ti";

export default {
  name: "shop-info",
  title: "Shop Page Information",
  icon: icon,
  type: "document",
  fields: [
    {
      title: "Text",
      name: "text",
      type: "array",
      of: [{ type: "block" }],
      validation: Rule => Rule.required(),
    },
  ],
};
