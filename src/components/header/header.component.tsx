"use client";
import React, { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
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
  console.log("showMenu:", showMenu);

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
    if (pathname === "/gallery" || pathname === "/blog") {
      // Set back ground for the Gallery page
      setBgColor("bg-background");
      return;
    } else {
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
  }, [pathname]);

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

  // Animate the 'backToTop' button
  useGSAP(() => {
    gsap.to("#backToTop", {
      bottom: isVisible ? "2rem" : "0rem",
      opacity: isVisible ? 1 : 0,
      duration: 0.2,
      delay: 0.1,
      ease: "none",
    });
  }, [isVisible]);

  useGSAP(() => {
    /* ****** Header Container ****** */
    gsap.set("#headerContainer", { top: "100vh", visibility: "visible" });
    gsap
      .timeline()
      .fromTo(
        "#headerContainer",
        {
          top: "100vh",
          opacity: 0,
          width: "2.5%",
        },
        {
          top: 0,
          display: "flex",
          opacity: 1,
          duration: 1,
        }
      )
      .to("#headerContainer", {
        opacity: 1,
        width: "100%",
        duration: 0.5,
      })

      /* ******* Logo ******** */
      .fromTo(
        "#logo",
        {
          display: "block",
          opacity: 0,
          x: -200,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
        }
      )

      /* ****** Contact Us ****** */
      .fromTo(
        "#contactUs",
        {
          display: "none",
          opacity: 0,
          x: 200,
        },
        {
          display: "block",
          opacity: 1,
          x: 0,
          duration: 0.5,
        },
        "<" // Start with the previous animation
      )

      /* ****** Nav Links ****** */
      .fromTo(
        ".nav-link",
        {
          opacity: 0,
          y: "100vh",
          scale: 120,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          scale: 1,
          stagger: 0.2,
        }
      );
  }, []);

  return (
    <HeaderWrapper $bgColor={bgColor}>
      <HeaderContainer id='headerContainer'>
        <Link
          id='logo'
          href='/'
          className='relative font-bebas text-white text-xl opacity-0'
        >
          Timeless <span className='text-[tan]'>Interiors</span>
        </Link>
        {/* Header Links */}
        <LinksContainer className={`${showMenu ? "top-0" : "-top-[100vh]"}`}>
          {/* Links */}
          {headerData.links.map((item, index) => {
            return (
              <li
                key={index}
                className='nav-link relative z-5 hover:text-[tan] text-base uppercase'
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
          <div id='contactUs'>
            <ContactUsButton href='mailto:dward@desean-ward.me' target='_blank'>
              Contact Us
            </ContactUsButton>
          </div>
        </div>{" "}
      </HeaderContainer>

      {/* Back To Top Button */}
      <BackToTopBtn id='backToTop'>
        <BsArrowUpSquareFill
          color='#D2B48C'
          size={42}
          onClick={() => scrollToTop()}
          className='hover:opacity-70'
        />
      </BackToTopBtn>
    </HeaderWrapper>
  );
};

export default HeaderComponent;
