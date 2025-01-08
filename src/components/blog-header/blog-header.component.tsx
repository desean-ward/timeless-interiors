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
  MobileMenuContainer,
} from "./blog-header.styles";
import { BsArrowUpSquareFill } from "react-icons/bs";
import { usePathname } from "next/navigation";

const BlogHeaderComponent = () => {
  // Header background color - dependent on scroll
  const [bgColor, setBgColor] = useState<string>("bg-transparent");

  // Mobile Menu State
  const [showMenu, setShowMenu] = useState(false);

  // Back to top arrow visibility state
  const [isVisible, setIsVisible] = useState(false);

  // Hold a reference to the current path name
  const pathname = usePathname();

  // Reference to the Header animations
  // const headerAnimation = useRef<gsap.core.Timeline | null>(null);

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
    gsap
      .timeline()
      .set("#backToTop", {
        opacity: 0,
        visibility: "hidden",
      })
      .to("#backToTop", {
        bottom: isVisible ? "2rem" : "0rem",
        opacity: isVisible ? 1 : 0,
        visibility: "visible",
        duration: 0.2,
        delay: 0.1,
        ease: "none",
      });
  }, [isVisible]);

  // useGSAP(() => {
  //   // Get the screen width
  //   const screenWidth = window.innerWidth;

  //   /* ****** Header Container ****** */
  //   if (!headerAnimation.current) {
  //     headerAnimation.current = gsap.timeline();

  //     headerAnimation.current
  //       .set("#headerContainer", {
  //         top: "100vh",
  //         visibility: "hidden",
  //         opacity: 0,
  //         position: "relative",
  //       })
  //       .fromTo(
  //         "#headerContainer",
  //         {
  //           top: "100vh",
  //           opacity: 0,
  //           visibility: "visible",
  //           width: "1.5%",
  //           height: "1px",
  //           backgroundColor: "transparent",
  //           paddingBottom: "2rem",
  //           delay: 2,
  //         },
  //         {
  //           top: "1rem",
  //           opacity: 1,
  //           duration: 1,
  //         }
  //       )
  //       .to("#headerContainer", {
  //         width: "100%",
  //         duration: 0.5,
  //       })

  //       /* ******* Logo ******** */
  //       .fromTo(
  //         "#logo",
  //         {
  //           display: "block",
  //           opacity: 0,
  //           x: -200,
  //         },
  //         {
  //           opacity: 1,
  //           x: 0,
  //           duration: 0.5,
  //         }
  //       )

  //       /* ****** Contact Us ****** */
  //       .fromTo(
  //         ["#contactUs", "#menuBtn"],
  //         {
  //           opacity: 0,
  //           x: 200,
  //         },
  //         {
  //           opacity: 1,
  //           x: 0,
  //           duration: 0.5,
  //         },
  //         "<" // Start with the previous animation
  //       );

  //     /* ****** Nav Links ****** */
  //     if (screenWidth >= 900) {
  //       headerAnimation.current
  //         .set(".nav-link", { pointerEvents: "none", opacity: 0 })
  //         .fromTo(
  //           ".nav-link",
  //           {
  //             opacity: 0,
  //             y: "100vh",
  //             scale: 120,
  //           },
  //           {
  //             opacity: 1,
  //             y: 0,
  //             duration: 0.5,
  //             scale: 1,
  //             stagger: 0.2,
  //             // delay: 2,
  //           }
  //         )

  //         .set(".nav-link", { pointerEvents: "all" });
  //     }
  //   }
  // }, []);

  /* ****** Mobile Menu ****** */
  useGSAP(() => {
    // Open and close animations
    if (showMenu) {
      gsap.to("#mobileMenu", {
        opacity: 1,
        visibility: "visible", // Make it visible
        left: 0,
        duration: 0.3,
      });

      gsap.fromTo(
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
    } else {
      // Close menu animation
      gsap.to("#mobileMenu", {
        opacity: 0,
        left: "100%",
        duration: 0.3,
        onComplete: () => {
          // Hide the menu after the animation completes
          gsap.set("#mobileMenu", { visibility: "hidden" });
        },
      });
    }
  }, [showMenu]);

  return (
    <>
      <HeaderWrapper id='headerWrapper' $bgColor={bgColor}>
        <HeaderContainer id='headerContainer' className='opacity-1'>
          <Link
            id='logo'
            href='/'
            className='relative font-bebas text-white text-xl opacity-1'
          >
            Timeless <span className='text-[tan]'>Interiors</span>
          </Link>
          {/* Header Links */}
          <LinksContainer
            id='linksContainer'
            className={`${showMenu ? "top-0" : "top-[100vh]"}`}
          >
            {/* Links */}
            {headerData.links.map((item, index) => {
              return (
                <li
                  key={index}
                  className='nav-link relative z-5 hover:text-[tan] text-base uppercase'
                >
                  <Link
                    href={item.href}
                    onClick={() => {
                      if (showMenu) toggleMenu();
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </LinksContainer>

          {/* Contact Us Button */}
          <div id='contactUs'>
            <ContactUsButton href='mailto:dward@desean-ward.me' target='_blank'>
              Contact Us
            </ContactUsButton>
          </div>

          {/* Mobile Menu Button */}
          <div id='menuBtn'>
            <MobileMenuButton onClick={() => toggleMenu()}>
              {showMenu ? "Close" : "Menu"}
            </MobileMenuButton>
          </div>
        </HeaderContainer>

        {/* Mobile Menu */}
        <MobileMenuContainer id='mobileMenu' className='bg-black' />
      </HeaderWrapper>

      {/* Back To Top Button */}
      <BackToTopBtn id='backToTop'>
        <BsArrowUpSquareFill
          color='#D2B48C'
          size={42}
          onClick={() => scrollToTop()}
          className='hover:opacity-70'
        />
      </BackToTopBtn>
    </>
  );
};

export default BlogHeaderComponent;
