import React from "react";

interface FormProps {
  onClose: () => void;
}
function Form() {
  return (
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
            <input
              type="text"
              placeholder="First Name"
              className="input input-bordered m-2 w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="input input-bordered m-2 w-full max-w-xs"
            />

            <div className="col-span-2">
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered m-2 w-full"
              />
            </div>

            <textarea
              className="textarea textarea-bordered m-2 w-full col-span-2"
              placeholder="Message"
            ></textarea>
          </div>

          <div className="divider" />
          <input type="checkbox" id="my-modal-3" className="modal-toggle" />
          <label htmlFor="my-modal-3" className="btn secondary m-2 w-24">
            Cancel
          </label>

          <button className="btn primary m-2 w-24">Send</button>
        </div>
      </div>
    </div>
  );
}

export default Form;
