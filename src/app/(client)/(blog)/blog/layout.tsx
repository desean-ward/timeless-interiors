"use client";
import useLayoutStore from "@/app/stores/layouts";
import { useEffect } from "react";

const BlogLayout = ({ children }: { children: React.ReactNode }) => {
  const setIsBlog = useLayoutStore((state) => state.setIsBlog);
  const triggerRefresh = useLayoutStore((state) => state.triggerRefresh);

  useEffect(() => {
    setIsBlog(true); // Set the layout to blog mode
    triggerRefresh(); // Trigger ScrollTrigger.refresh
    return () => {
      setIsBlog(false); // Reset layout to non-blog mode
      triggerRefresh(); // Trigger ScrollTrigger.refresh again
    };
  }, [setIsBlog, triggerRefresh]);

  return <div>{children}</div>;
};

export default BlogLayout;
