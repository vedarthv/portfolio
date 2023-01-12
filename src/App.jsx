import Spline from "@splinetool/react-spline";

export default function App() {
  return (
    <div className="flex flex-col min-w-screen min-h-screen lg:flex-row">
      <div className="grid flex-grow min-h-screen card bg-base-300 rounded-box place-items-center">
        <div className="chat chat-start">
          <div className="chat-bubble chat-bubble-primary">
            Hey Baby Yoda! My name is Vedarth! I am a recent CS grad looking for
            opportunities as a software developer.
          </div>
        </div>

        <div className="chat chat-end">
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
            Hopefully someone's brave enough to hire you 🫡
          </div>
        </div>
      </div>
      <div className="divider lg:divider-horizontal" />
      <div className="grid flex-grow min-w-screen min-h-screen ">
        <div className="min-w-screen/2 min-h-screen max-h-screen ">
          <Spline scene="https://prod.spline.design/WQOe5kY0XHXnX542/scene.splinecode" />
        </div>
      </div>
    </div>
  );
}
