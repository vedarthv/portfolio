import Spline from "@splinetool/react-spline";
import Chat from "./Chat";

export default function App() {
  return (
    <div className="grid grid-cols-2 md:grid-col-1 md:space-x-4 space-y-2   min-h-screen min-w-screen">
      <div className="grid col-span-2 md:col-span-1 m-1 p-1 card bg-base-300 rounded-box min-h-fit justify-center">
        <Chat />
      </div>

      <div className="grid col-span-2 row-span-1 md:col-span-1 md:row-span-2 card bg-base-300 rounded-box min-h-fit m-1 p-1">
        <Spline scene="https://prod.spline.design/WQOe5kY0XHXnX542/scene.splinecode" />
      </div>
    </div>
  );
}
