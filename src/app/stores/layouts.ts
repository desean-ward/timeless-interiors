// stores/layoutStore.ts
import { create } from "zustand";

interface LayoutState {
  isBlog: boolean; // Determines if the current layout is for the blog
  setIsBlog: (value: boolean) => void; // Function to update the value
  refreshPage: boolean; // Trigger for manual refresh
  triggerRefresh: () => void; // Action to toggle refresh
}

const useLayoutStore = create<LayoutState>((set) => ({
  isBlog: false, // Default to false
  setIsBlog: (value) => set({ isBlog: value }),
  refreshPage: false,
  triggerRefresh: () => set((state) => ({ refreshPage: !state.refreshPage })),
}));

export default useLayoutStore;
