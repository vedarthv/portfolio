import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { User } from "./Schema";
import emailjs from "@emailjs/browser";

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<User>({
    resolver: zodResolver(User),
  });

  const onSubmit = (data) => {
    emailjs.send(
      process.env.SERVICE_ID!,
      process.env.TEMPLATE_ID!,
      data,
      process.env.EMAILJS_PUB_KEY!
    );
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label
              htmlFor="my-modal-3"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h2 className="text-lg font-bold">Get in touch!</h2>
            <div className="divider" />
            <div className="grid grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  className="input input-bordered m-2 w-full max-w-xs"
                  {...register("firstName")}
                />
                {errors.firstName?.message && (
                  <p className="text-red-700">{errors.firstName?.message}</p>
                )}
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="input input-bordered m-2 w-full max-w-xs"
                  {...register("lastName")}
                />
                {errors.lastName?.message && (
                  <p className="text-red-700">{errors.lastName?.message}</p>
                )}
              </div>

              <div className="col-span-2">
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered m-2 w-full"
                  {...register("email")}
                />
                {errors.email?.message && (
                  <p className="text-red-700">{errors.email?.message}</p>
                )}
              </div>

              <div className="col-span-2">
                <textarea
                  className="textarea textarea-bordered m-2 w-full"
                  placeholder="Message"
                  {...register("body")}
                />
                {errors.body?.message && (
                  <p className="text-red-700">{errors.body?.message}</p>
                )}
              </div>
            </div>
            <div className="divider" />
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <label htmlFor="my-modal-3" className="btn secondary m-2 w-24">
              Cancel
            </label>
            <button
              className="btn primary m-2 w-24"
              type="submit"
              disabled={isSubmitting}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
