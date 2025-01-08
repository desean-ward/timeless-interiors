"use client";
import { createContext, useContext } from "react";

// Define the context type
type LayoutContextProps = {
  isBlog: boolean;
};

// Create the context with a default value
export const LayoutContext = createContext<LayoutContextProps | undefined>(
  undefined
);

// Custom hook to consume the context
export const useLayoutContext = () => {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error(
      "useLayoutContext must be used within LayoutContext.Provider"
    );
  }
  return context;
};
