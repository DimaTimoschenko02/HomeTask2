import { object, string } from "yup";

export const noteSchema = object({
  name: string().trim().required().max(20).min(3),
  content: string().trim().required(),
  category: string().oneOf(["task", "qoute", "random", "idea"]),
});
