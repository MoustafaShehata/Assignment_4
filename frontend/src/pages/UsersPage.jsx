import { LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/userAuth";
import { useEffect, useState } from "react";
import axios from "axios";

const UsersPage = () => {
  const { logout, users } = useAuthStore();

  return (
    <div className="relative min-h-screen bg-black">
      <header className="text-white flex justify-around items-center pt-4">
        <div className="flex space-x-6 items-center">
          <img className="w-44" src="/netflix-logo.png" alt="logo" />
          <Link
            className="hover:underline underline-offset-3 text-lg font-medium"
            to={"/"}
          >
            Posts
          </Link>
          <Link
            className="hover:underline underline-offset-3 text-lg font-medium"
            to={"/users"}
          >
            Users
          </Link>
        </div>

        <div className="flex items-center gap-5">
          <img
            className="w-8 rounded transform hover:scale-75 cursor-pointer duration-300 delay-150 ease-in-out"
            src="/avatar2.png"
            alt="avatar-img"
          />
          <abbr title="Logout">
            <LogOut className="cursor-pointer" onClick={logout} />
          </abbr>
        </div>
      </header>
      {/* header-end */}

      {/* sec-start */}
      <section className="h-[80%]  mt-20 flex flex-col items-center gap-2">
        {users.map((user) => (
          <div
            key={user?._id}
            className="bg-white w-[20em] md:w-[35em] rounded px-3 py-2 "
          >
            <h1>
              <span>id</span> : {user?._id}
            </h1>
            <p>
              <span>userName</span> : {user?.username}
            </p>
            <p>
              <span>email</span> : {user?.email}
            </p>
          </div>
        ))}
      </section>
      {/* sec-end */}
    </div>
  );
};
export default UsersPage;
