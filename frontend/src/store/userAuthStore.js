import { create } from "zustand";
import { axiosInstance } from "../lib/axios.js";

export const UseAuthStore = create((set) => ({
  authUser: null,
  isCheckingAuth: true,
  isSigningUp: false,
  isLoggingIn: false,
  isUpdatingProfile: false,
  checkAuth: async () => {
    try {
      const res = await axiosInstance.get("/auth/check");
      set({ authUser: res.data, isCheckingAuth: false });
    } catch (error) {
      set({ authUser: null });
      console.log("Error in checkAuth store:", error);
    } finally {
      set({ isCheckingAuth: false });
    }
  },
}));
