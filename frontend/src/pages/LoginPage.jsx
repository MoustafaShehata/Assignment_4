import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/userAuth";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuthStore();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    login({ email, password });
  };

  return (
    <div className="relative h-screen bg-linear-to-b from-black/75 via-black/60 to-black/50">
      <img
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        src="/hero.png"
        alt="hero-img"
      />

      {/* header-start  */}
      <header className=" max-w-6xl px-5 md:mx-auto ">
        <img className="w-44 pt-4" src="/netflix-logo.png" alt="logo" />
      </header>
      {/* header-end  */}

      {/* sec-start */}
      <section className="w-full h-[80%] flex justify-center items-center ">
        <form
          onSubmit={handleFormSubmit}
          className="text-white sm:px-6 px-2 py-6 bg-black/75 rounded-2xl space-y-5"
        >
          <h1 className="text-center text-4xl font-bold ">Login</h1>
          <div>
            <label htmlFor="email">Email</label> <br />
            <input
              className="w-[22em] h-[2.5em] cursor-pointer outline-none pl-2 mt-2 border border-gray-500 rounded"
              type="text"
              placeholder="you@example.com"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="password">Password</label> <br />
            <input
              className="w-[22em] h-[2.5em] cursor-pointer outline-none pl-2 mt-2 border border-gray-500 rounded"
              type="password"
              placeholder="**********"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className=" w-[22em] h-[2.5em] cursor-pointer text-center bg-red-600 rounded">
            Login
          </button>

          <p className="text-center">
            Dont have an account ?{" "}
            <Link className="text-red-500" to={"/signup"}>
              {" "}
              signup
            </Link>
          </p>
        </form>
      </section>
      {/* sec-end */}
    </div>
  );
};
export default LoginPage;
