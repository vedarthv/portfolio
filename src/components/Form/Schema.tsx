import { z } from "zod";

export const User = z
  .object({
    firstName: z
      .string({
        required_error: "Name is required",
      })
      .min(1, { message: "First name is required" }),
    lastName: z
      .string({
        required_error: "Last Name is required",
      })
      .min(1, { message: "Last name is required" }),
    email: z.string().email({ message: "Invalid email address" }),
    body: z
      .string()
      .min(1, { message: "Body is required" })
      .max(200, { message: "Maximum number of characters allowed is 200" }),
  })
  .required({ firstName: true, lastName: true, email: true, body: true });

export type User = z.infer<typeof User>;
