import { create } from "zustand";
import { persist } from "zustand/middleware";

type AnimationState = {
  // Hero's Grid Overlay State
  hasHeroAnimated: boolean;
  setHeroAnimated: () => void;

  // Hero Visibility
  isHeroHidden: boolean;
  hideHeroElements: () => void;

  // Footer Animation Reset on Route Changes
  triggerFooterAnimation: boolean;
  toggleFooterAnimation: () => void;

  // Track route changes
  footerAnimationCounter: number;
  incrementFooterAnimation: () => void;

  // Current route slug
  currentSlug: string;
  setCurrentSlug: (slug: string) => void;

  // Refresh Footer
  triggerFooterRefresh: boolean;
  toggleFooterRefresh: () => void;
};

const useAnimationStore = create<AnimationState>()(
  persist(
    (set) => ({
      // Hero Animation State
      hasHeroAnimated: false,
      setHeroAnimated: () => set({ hasHeroAnimated: true }),

      // Hero Visibility
      isHeroHidden: false,
      hideHeroElements: () => set({ isHeroHidden: true }),

      // Footer Animation
      triggerFooterAnimation: false,
      toggleFooterAnimation: () =>
        set((state) => ({
          triggerFooterAnimation: !state.triggerFooterAnimation,
        })),

      // Footer Animation Counter
      footerAnimationCounter: 0,
      incrementFooterAnimation: () =>
        set((state) => ({
          footerAnimationCounter: state.footerAnimationCounter + 1,
        })),

      // Current Slug
      currentSlug: "",
      setCurrentSlug: (slug: string) => set({ currentSlug: slug }),

      // Footer Refresh
      triggerFooterRefresh: false,
      toggleFooterRefresh: () =>
        set((state) => ({
          triggerFooterRefresh: !state.triggerFooterRefresh,
        })),
    }),
    {
      name: "animation-store", // Key in sessionStorage
      storage: {
        // Use sessionStorage instead of localStorage
        getItem: (key) => {
          const value = sessionStorage.getItem(key);
          return value ? JSON.parse(value) : null;
        },
        setItem: (key, value) => {
          sessionStorage.setItem(key, JSON.stringify(value));
        },
        removeItem: (key) => {
          sessionStorage.removeItem(key);
        },
      },
      // Only persist `hasHeroAnimated`
      // partialize: (state) => ({
      //   hasHeroAnimated: state.hasHeroAnimated,
      // }),
    }
  )
);

export default useAnimationStore;
