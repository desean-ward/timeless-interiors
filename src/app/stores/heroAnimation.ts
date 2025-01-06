import {create} from "zustand";

type AnimationState = {
  hasHeroAnimated: boolean;
  isHeroHidden: boolean;
  setHeroAnimated: () => void;
  hideHeroElements: () => void;
};

const useAnimationStore = create<AnimationState>((set) => ({
  hasHeroAnimated: false,
  isHeroHidden: false,
  setHeroAnimated: () => set({ hasHeroAnimated: true }),
  hideHeroElements: () => set({ isHeroHidden: true }),
}));

export default useAnimationStore;
