import cover from "../public/indoor.jpg.jpg";
import WindowView from "./_sections/WindowView";

export default function HomePage() {
  return (
    <div
      className="w-full h-screen flex justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${cover.src})` }}
    >
      <div className="relative w-[90%] max-w-[75%] py-8 h-[60%] bg-transparent rounded-[15px] backdrop-filter backdrop-blur-2xl">
        <WindowView />
      </div>
    </div>
  );
}
