import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useScreenWidth = create(
    persist(
        (set) => ({
        screenWidth: window.innerWidth,
        setScreenWidth: (width: number) => set({ screenWidth: width }),
        }),
        {
            name: "screenWidth-storage",
            getStorage: () => localStorage,
            storage: createJSONStorage(() => localStorage),
        }
    )
    );

export default useScreenWidth;
