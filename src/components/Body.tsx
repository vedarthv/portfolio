import React, { useState } from "react";
import Form from "./Form/Form";

function Body() {
  const [modalOpen, setModalOpen] = useState(false);
  const closeModal = () => {
    setModalOpen((prev) => !prev);
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello there, I am Vedarth!</h1>
          <p className="py-6">
            I am a Full Stack Developer currently volunteering at Shelter
            Movers!
          </p>
          <label
            className="btn btn-primary"
            htmlFor="my-modal-3"
            onClick={() => setModalOpen(!modalOpen)}
          >
            Get in touch!
          </label>
          <Form onClose={() => closeModal} />
        </div>
      </div>
    </div>
  );
}

export default Body;
