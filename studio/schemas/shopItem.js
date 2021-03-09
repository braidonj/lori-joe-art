import { MdLocalGroceryStore as icon } from "react-icons/Md";

export default {
  name: "shop-item",
  title: "Shop Items",
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
      name: "itemImage",
      title: "Image of Item",
      type: "image",
      validation: Rule => Rule.required(),
    },
  ],
};
