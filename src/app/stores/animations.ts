import { create } from "zustand";

type AnimationState = {
  // Hero's Grid Overlay State
  hasHeroAnimated: boolean;
  setHeroAnimated: () => void;

  //
  isHeroHidden: boolean;
  hideHeroElements: () => void;

  // Footer Animation Reset on Route Changes
  triggerFooterAnimation: boolean;
  toggleFooterAnimation: () => void;

  // Track route changes
  footerAnimationCounter: number;
  incrementFooterAnimation: () => void;

  currentSlug: string;
  setCurrentSlug: (slug: string) => void;
  triggerFooterRefresh: boolean;
  toggleFooterRefresh: () => void;
};

const useAnimationStore = create<AnimationState>((set) => ({
  hasHeroAnimated: false,
  setHeroAnimated: () => set({ hasHeroAnimated: true }),
  isHeroHidden: false,
  hideHeroElements: () => set({ isHeroHidden: true }),
  triggerFooterAnimation: false,
  toggleFooterAnimation: () =>
    set((state) => ({ triggerFooterAnimation: !state.triggerFooterAnimation })),
  footerAnimationCounter: 0,
  incrementFooterAnimation: () =>
    set((state) => ({
      footerAnimationCounter: state.footerAnimationCounter + 1,
    })),
  currentSlug: "",
  setCurrentSlug: (slug) => set({ currentSlug: slug }),
  triggerFooterRefresh: false,
  toggleFooterRefresh: () =>
    set((state) => ({ triggerFooterRefresh: !state.triggerFooterRefresh })),
}));

export default useAnimationStore;
