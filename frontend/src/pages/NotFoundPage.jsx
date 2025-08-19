import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="h-screen relative n bg-linear-to-b from-black/75 via-black/60 to-black/50">
      <img
        className="absolute top-0 left-0 w-full h-full -z-10"
        src="/404.png"
        alt="404-img"
      />
      <header className="max-w-6xl px-5 pt-4 md:mx-auto">
        <img className="w-44" src="/netflix-logo.png" alt="logo" />
      </header>

      <div className="h-[85%] flex flex-col justify-center items-center text-white space-y-8">
        <h1 className="text-center text-3xl md:text-5xl font-bold">
          Lost Your Way?
        </h1>
        <p className="text-center text-sm md:text-lg font-bold">
          Sorry we can't find that page. you 'll find lots to explore on the
          home page.{" "}
        </p>
        <Link to={"/"} className="px-4 py-2 bg-white text-black rounded">
          Netflix Home
        </Link>
      </div>
    </div>
  );
};
export default NotFoundPage;
