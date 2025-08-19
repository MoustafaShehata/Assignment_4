import { LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/userAuth";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useSpecificPostStore } from "../store/specificPost";

const CommentsPage = () => {
  const { commentId } = useParams();
  const { logout } = useAuthStore();

  // getAllRelatedComments
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const getAllComments = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/comments"
        );
        setComments(
          response.data.filter((comment) => comment.postId == commentId)
        );
      } catch (error) {
        console.log("Error while getAllPosts " + error.message);
      }
    };
    getAllComments();
  }, []);

  const { userId, id, title, body } = useSpecificPostStore();
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
        <div className="bg-white w-[20em] md:w-[35em] rounded px-3 py-2">
          <h1>
            <span>userId</span> : {userId}
          </h1>
          <p>
            <span>Id</span> : {id}
          </p>
          <p>
            <span>title</span> :{" "}
            {title?.length > 50 ? title.slice(0, 50) + "..." : title}
          </p>
          <p>
            <span>body</span> :{" "}
            {body?.length > 50 ? body.slice(0, 50) + "..." : body}
          </p>
        </div>
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="bg-white w-[20em] md:w-[35em] rounded px-3 py-2"
          >
            <h1>
              <span>postId</span> : {comment.postId}
            </h1>
            <p>
              <span>Id</span> : {comment.id}
            </p>
            <p>
              <span>name</span> :{" "}
              {comment.name.length > 50
                ? comment.name.slice(0, 50) + "..."
                : comment.name}
            </p>
            <p>
              <span>email</span> :{" "}
              {comment.email.length > 50
                ? comment.email.slice(0, 50) + "..."
                : comment.email}
            </p>

            <p>
              <span>body</span> :{" "}
              {comment.body.length > 50
                ? comment.body.slice(0, 50) + "..."
                : comment.body}
            </p>
          </div>
        ))}
      </section>
      {/* sec-end */}
    </div>
  );
};
export default CommentsPage;
