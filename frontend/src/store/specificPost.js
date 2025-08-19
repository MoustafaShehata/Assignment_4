import { create } from "zustand";

export const useSpecificPostStore = create((set) => ({
  userId: "",
  id: "",
  title: "",
  body: "",
  setSpecificPost: ({ userId, id, title, body }) =>
    set({
      userId,
      id,
      title,
      body,
    }),
}));
