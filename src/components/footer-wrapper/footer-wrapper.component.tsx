"use client";
import useLayoutStore from "@/app/stores/layouts";
import BlogFooterComponent from "../blog-footer/blog-footer.component";
import FooterComponent from "../footer/footer.component";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

const FooterWrapper = () => {
  gsap.registerPlugin(ScrollTrigger);

  const { isBlog, triggerRefresh } = useLayoutStore();

  useEffect(() => {
    ScrollTrigger.refresh();
    console.log("ScrollTrigger refreshed");
  }, [triggerRefresh]);

  return isBlog ? <BlogFooterComponent /> : <FooterComponent />;
};

export default FooterWrapper;
