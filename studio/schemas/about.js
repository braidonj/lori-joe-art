import { AiOutlineFileText as icon } from "react-icons/Ai";

export default {
  name: "about-page",
  title: "About Page",
  icon: icon,
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: Rule => Rule.required(),
    },
    {
      name: "aboutImage",
      title: "About Page Image",
      type: "image",
      validation: Rule => Rule.required(),
    },
    {
      title: "Text",
      name: "text",
      type: "array",
      of: [{ type: "block" }],
      validation: Rule => Rule.required(),
    },
  ],
};
