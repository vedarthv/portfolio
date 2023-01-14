import React from "react";

function Chat() {
  return (
    <>
      <div className="chat chat-start flex flex-row">
        <div className="chat-bubble chat-bubble-primary">
          Hey Baby Yoda! My name is Vedarth! I am a recent CS grad looking for
          opportunities as a software developer.
        </div>
      </div>

      <div className="chat chat-end flex flex-row-reverse min-w-fit">
        <div className="chat-bubble chat-bubble-warning">
          That's great! How can someone get in touch with you?
        </div>
      </div>

      <div className="chat chat-start">
        <div className="chat-bubble chat-bubble-primary">
          They can contact me on my email:
          <a href="mailto:vedarth1@gmail.com" className="link link-warning">
            vedarth1@gmail.com
          </a>
        </div>
      </div>

      <div className="chat chat-end">
        <div className="chat-bubble chat-bubble-warning">
          Cool! Now how about your GitHub repository? People would need to see
          all the spaghetti code you have written.
        </div>
      </div>
      <div className="chat chat-start">
        <div className="chat-bubble chat-bubble-primary">
          I swear, I'm not that bad 😭 My GitHub username is{" "}
          <a href="https://github.com/vedarthv" className="link link-warning">
            vedarthv
          </a>
        </div>
      </div>
      <div className="chat chat-end">
        <div className="chat-bubble chat-bubble-warning">
          Hopefully someone's brave enough to hire you &#128556;
        </div>
      </div>
    </>
  );
}

export default Chat;
