import Spline from "@splinetool/react-spline";
import Chat from "./Chat";

export default function App() {
  return (
    <div className="grid grid-cols-2 grid-row-2 md:space-x-4 space-y-2  grid-flow-row md:grid-flow-col min-h-screen min-w-screen">
      <div className="grid col-span-2 row-span-1 md:col-span-1 md:row-span-2 m-1 p-1 card bg-base-300 rounded-box min-h-fit justify-center">
        <Chat />
      </div>

      <div className="grid col-span-2 row-span-1 md:col-span-1 md:row-span-2 card bg-base-300 rounded-box min-h-fit m-1 p-1">
        <Spline scene="https://prod.spline.design/WQOe5kY0XHXnX542/scene.splinecode" />
      </div>
    </div>
  );
}
