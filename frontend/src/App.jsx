import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import UsersPage from "./pages/UsersPage";
import CommentsPage from "./pages/CommentsPage";
import { Toaster } from "react-hot-toast";
import { useAuthStore } from "./store/userAuth";
import { useEffect } from "react";
import { Loader } from "lucide-react";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  const { userInfo } = useAuthStore();

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={userInfo ? <HomePage /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/users"
          element={userInfo ? <UsersPage /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/comments/:commentId"
          element={userInfo ? <CommentsPage /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/login"
          element={!userInfo ? <LoginPage /> : <Navigate to={"/"} />}
        />
        <Route
          path="/signup"
          element={!userInfo ? <SignupPage /> : <Navigate to={"/"} />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Toaster />
    </>
  );
};
export default App;
