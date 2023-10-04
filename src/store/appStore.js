import { create } from "zustand";

// example
const useAppStore = create((set) => ({
  appName: "Keepup",
  optionPage: false,
  component: "list",
  toggleOptionPage: () => set((state) => ({ optionPage: !state.optionPage })),
  setComponent: (c) => set({ component: c }),
}));

export default useAppStore;
