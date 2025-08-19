import { LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/userAuth";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSpecificPostStore } from "../store/specificPost";

const HomePage = () => {
  const { logout } = useAuthStore();

  // getAllPosts
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getAllPosts = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setPosts(response.data);
      } catch (error) {
        console.log("Error while getAllPosts " + error.message);
      }
    };
    getAllPosts();
  }, []);

  const { setSpecificPost } = useSpecificPostStore();
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
        {posts.map((post) => (
          <Link
            onClick={() =>
              setSpecificPost({
                userId: post.userId,
                id: post.id,
                title: post.title,
                body: post.body,
              })
            }
            to={`/comments/${post.userId}`}
            key={post.id}
            className="bg-white w-[20em] md:w-[35em] rounded px-3 py-2"
          >
            <h1>
              <span>userId</span> : {post.userId}
            </h1>
            <p>
              <span>Id</span> : {post.id}
            </p>
            <p>
              <span>title</span> :{" "}
              {post.title.length > 50
                ? post.title.slice(0, 50) + "..."
                : post.title}
            </p>
            <p>
              <span>body</span> :{" "}
              {post.body.length > 50
                ? post.body.slice(0, 50) + "..."
                : post.body}
            </p>
          </Link>
        ))}
      </section>
      {/* sec-end */}
    </div>
  );
};
export default HomePage;
