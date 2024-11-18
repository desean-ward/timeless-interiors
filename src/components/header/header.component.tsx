"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import headerData from "@/data/headerData.json";
import {
  BackToTopBtn,
  ContactUsButton,
  HeaderContainer,
  HeaderWrapper,
  LinksContainer,
  MobileMenuButton,
} from "./header.styles";
import { BsArrowUpSquareFill } from "react-icons/bs";
import { usePathname } from "next/navigation";

const HeaderComponent = () => {
  // Header background color - dependent on scroll
  const [bgColor, setBgColor] = useState<string>("bg-transparent");

  // Mobile Menu State
  const [showMenu, setShowMenu] = useState(false);

  // Back to top arrow visibility state
  const [isVisible, setIsVisible] = useState(false);

  // Hold a reference to the current path name
  const pathname = usePathname();

  // Show / Hide Mobile Menu
  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  // Scroll To Top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Listen for section change or pathname to determine the header's background color
  useEffect(() => {
    if (pathname === "/gallery") {
      // Set back ground for the Gallery page
      setBgColor("bg-black");
      return;
    }
    else {
      setBgColor("bg-transparent");
    }
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bgColor = entry.target.getAttribute("data-bg-color");
            if (bgColor) setBgColor(bgColor);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    // Observe 'sections' and 'footer' for header background color
    const elementsToObserve =
      document.querySelectorAll<HTMLElement>("section, footer");
    elementsToObserve.forEach((element) => observer.observe(element));

    // Clean up
    return () => observer.disconnect();
  }, []);

  // Toggle scroll lock based when mobile menu is showing
  useEffect(() => {
    if (showMenu) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    // Cleanup function to remove the class when the component unmounts
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [showMenu]);

  // useEffect to back to top arrow visibility
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 20) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <HeaderWrapper $bgColor={bgColor}>
      <HeaderContainer>
        <Link href='/' className='font-bebas text-white text-xl'>
          Timeless Interiors
        </Link>
        {/* Header Links */}
        <LinksContainer className={`${showMenu ? "top-0" : "-top-[100vh]"}`}>
          {/* Links */}
          {headerData.links.map((item, index) => {
            return (
              <li
                key={index}
                className='text-white text-base uppercase'
                onClick={() => toggleMenu()}
              >
                <Link href={item.href}>{item.label}</Link>
              </li>
            );
          })}
        </LinksContainer>
        {/* Mobile Menu Button */}
        <div>
          <MobileMenuButton onClick={() => toggleMenu()}>
            {showMenu ? "Close" : "Menu"}
          </MobileMenuButton>

          {/* Contact Us Button */}
          <ContactUsButton>Contact Us</ContactUsButton>
        </div>{" "}
        <BackToTopBtn
          id='#backToTop'
          className={isVisible ? "opacity-100" : "opacity-0"}
        >
          <BsArrowUpSquareFill
            color='#766455'
            size={42}
            onClick={() => scrollToTop()}
          />
        </BackToTopBtn>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default HeaderComponent;
