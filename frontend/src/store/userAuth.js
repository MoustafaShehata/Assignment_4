import axios from "axios";
import { create } from "zustand";
import toast from "react-hot-toast";

export const useAuthStore = create((set) => ({
  user: null,
  users: localStorage.getItem("allUsers")
    ? JSON.parse(localStorage.getItem("allUsers"))
    : null,
  isLoggingIn: false,
  isSiningUp: false,
  isLoggingOut: false,
  isCheckingAuth: true,
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,

  // signup
  signup: async (credentials) => {
    set({ isSiningUp: true });
    try {
      const response = await axios.post("/api/v1/auth/signup", credentials);

      localStorage.setItem("allUsers", JSON.stringify(response.data.users));
      localStorage.setItem("userInfo", JSON.stringify(response.data.user));
      const expirationTime = new Date().getTime() + 15 * 24 * 60 * 60 * 1000;
      localStorage.setItem("expirationTime", expirationTime);

      set({
        isSiningUp: false,
        user: response.data.user,
        users: JSON.parse(localStorage.getItem("allUsers")),
        userInfo: JSON.parse(localStorage.getItem("userInfo")),
      });
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.response.data.message || "Failed to signup");
      set({ isSiningUp: false, user: null, users: null });
    }
  },
  // login
  login: async (credentials) => {
    set({ isLoggingIn: true });
    try {
      const response = await axios.post("/api/v1/auth/login", credentials);

      localStorage.setItem("allUsers", JSON.stringify(response.data.users));
      localStorage.setItem("userInfo", JSON.stringify(response.data.user));
      const expirationTime = new Date().getTime() + 15 * 24 * 60 * 60 * 1000;
      localStorage.setItem("expirationTime", expirationTime);

      set({
        isLoggingIn: false,
        user: response.data.user,
        users: JSON.parse(localStorage.getItem("allUsers")),
        userInfo: JSON.parse(localStorage.getItem("userInfo")),
      });
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.response.data.message || "Failed to login");
      set({ isLoggingIn: false, user: null, users: null });
    }
  },

  // logout
  logout: async () => {
    set({ isLoggingOut: true });
    try {
      const response = await axios.get("/api/v1/auth/logout");
      toast.success(response.data.message);
      set({ isLoggingOut: false, user: null, users: null, userInfo: null });
      localStorage.clear();
    } catch (error) {
      toast.error(error.response.message || "Failed to logout");
      set({ isLoggingOut: false, user: null, users: null });
    }
  },

  // // authcheck
  // authcheck: async () => {
  //   set({ isCheckingAuth: true });
  //   try {
  //     const response = await axios.get("/api/v1/auth/authcheck");
  //     set({
  //       isCheckingAuth: false,
  //       user: response.data.user,
  //       users: response.data.users,
  //     });
  //   } catch (error) {
  //     set({ isCheckingAuth: false, user: null, users: null });
  //   }
  // },
}));
