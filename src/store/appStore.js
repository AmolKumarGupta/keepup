import { create } from "zustand";

// example
const useAppStore = create((set) => ({
  appName: "Keepup",
  optionPage: false,
  toggleOptionPage: () => set(state => ({optionPage: !state.optionPage}))
}));

export default useAppStore;
