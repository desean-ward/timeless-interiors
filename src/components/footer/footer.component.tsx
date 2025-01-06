/* eslint-disable react/no-unescaped-entities */
"use client";
import { useState } from "react";
import Link from "next/link";
import {
  FooterBottom,
  FooterColumn,
  FooterContainer,
  FooterContent,
  FooterInfo,
  FooterLink,
  LinksContainer,
  NavLinks,
  SocialLinks,
} from "./footer.styles";
import { FaGithub, FaGlobe, FaLinkedin } from "react-icons/fa";

import footerLinks from "@/data/footerLinks.json";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { Spotlight } from "../ui/spotlight";

gsap.registerPlugin(ScrollTrigger);

const FooterComponent = () => {
  const [isHovered, setIsHovered] = useState<number | null>(null);

  const [inView, setInview] = useState(false);

  useGSAP(() => {
    const footerlinks = document.querySelectorAll(".footer-link");

    gsap.from("#lets-connect", {
      y: 500,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: "#footer-container",
        start: "top 50%",
        end: "bottom bottom",
        toggleActions: "play none reverse none",
        markers: false,
      },
      onStart: () => {
        setInview(true);
      },
    });

    gsap.from(footerlinks, {
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      scrollTrigger: {
        trigger: "#footer-container",
        start: "top 15%",
        end: "bottom bottom",
        toggleActions: "play none reverse none",
        markers: false,
      },
    });

    gsap.from(".footer-column", {
      opacity: 0,
      duration: 1,
      delay: 1,
      scrollTrigger: {
        trigger: "#footer-container",
        start: "top 15%",
        end: "bottom bottom",
        toggleActions: "play none reverse none",
        markers: false,
      },
    });

    // Cleanup on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      // gsap.globalTimeline.clear(); // Clear timelines
    };
  }, []);

  return (
    <footer
      id='footer-wrapper'
      className='relative top-0 sm:h-screen overflow-hidden py-24'
      data-bg-color='bg-background'
    >
      <FooterContainer id='footer-container'>
        {inView && (
          <Spotlight
            className='-top-40 left-0 md:left-60 md:-top-20'
            fill='tan'
          />
        )}
        <FooterContent>
          <div className='overflow-hidden'>
            <p
              id='lets-connect'
              className='font-bebas text-white text-[12vw] leading-none relative text-center mb-8 lg:mb-0'
            >
              Let's <span className='text-[tan]'>Connect</span>{" "}
            </p>

            <LinksContainer>
              {footerLinks.links.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  target='_blank'
                  className='footer-link'
                >
                  <FooterLink
                    onMouseEnter={() => setIsHovered(index)}
                    onMouseLeave={() => setIsHovered(null)}
                  >
                    <span>
                      {index === 0 ? (
                        <FaGlobe />
                      ) : index === 1 ? (
                        <FaLinkedin />
                      ) : (
                        <FaGithub />
                      )}
                    </span>

                    <span
                      className={
                        isHovered === index ? "text-black" : "text-[tan]"
                      }
                    >
                      {link.label}
                    </span>
                  </FooterLink>
                </Link>
              ))}
            </LinksContainer>
          </div>

          {/* Footer Bottom */}
          <FooterBottom id='footer-bottom'>
            <FooterInfo>
              <FooterColumn className='footer-column'>
                <p className='font-semibold'>
                  Timeless{" "}
                  <span className='text-[tan] hover:text-black'>Interiors</span>
                </p>
                <p>Transforming Vision into Reality</p>

                <NavLinks>
                  <li className='no-underline hover:text-underline '>
                    <Link href='/' className='text-blue-500'>
                      Home
                    </Link>
                  </li>
                  {" | "}
                  <li className='no-underline hover:text-underline'>
                    <Link href='/blog' className='text-blue-500'>
                      Blog
                    </Link>
                  </li>
                  {" | "}
                  <li className='no-underline hover:text-underline'>
                    <Link href='/Projects' className='text-blue-500'>
                      Projects
                    </Link>
                  </li>
                  {" | "}
                  <li className='no-underline hover:text-underline'>
                    <Link href='/services' className='text-blue-500'>
                      Services
                    </Link>
                  </li>
                  {" | "}
                  <li className='no-underline hover:text-underline'>
                    <Link href='/gallery' className='text-blue-500'>
                      Gallery
                    </Link>
                  </li>
                  {" | "}
                  <li className='no-underline hover:text-underline'>
                    <Link
                      href='mailto:dward@desean-ward.me'
                      className='text-blue-500'
                    >
                      Contact Us
                    </Link>
                  </li>
                </NavLinks>
              </FooterColumn>

              {/* Location */}
              <FooterColumn className='footer-column'>
                <p>
                  <strong>📍 Location:</strong> Chicago, Il USA
                </p>
                <p>
                  <strong>📧 Email:</strong>{" "}
                  <a
                    href='mailto:dward@desean-ward.me'
                    className='text-blue-500'
                  >
                    contact@timelessinteriors.com
                  </a>
                </p>
                <p>
                  <strong>📞 Phone:</strong> +1 (773) 209-1814
                </p>
              </FooterColumn>

              {/* Social Links */}
              <FooterColumn className='footer-column'>
                <p>✨ Follow us</p>
                <SocialLinks>
                  <li className='no-underline hover:text-underline'>
                    <a href='#' className='text-blue-500'>
                      Facebook
                    </a>
                  </li>
                  {" | "}
                  <li className='no-underline hover:text-underline'>
                    <a href='#' className='text-blue-500'>
                      Instagram
                    </a>
                  </li>
                  {" | "}
                  <li className='no-underline hover:text-underline'>
                    <a href='#' className='text-blue-500'>
                      Pinterest
                    </a>
                  </li>
                  {" | "}
                  <li className='no-underline hover:text-underline'>
                    <a href='#' className='text-blue-500'>
                      LinkedIn
                    </a>
                  </li>
                </SocialLinks>
              </FooterColumn>
            </FooterInfo>

            {/* Copyright */}
            <div className='w-full absolute bottom-0 left-0 mb-8 text-center'>
              &copy; {new Date().getFullYear()} De Sean Ward{" "}
              <span className='text-[tan]'>|</span> Timeless Interiors{" "}
              <span className='text-[tan]'>|</span> All rights reserved.
            </div>
          </FooterBottom>
        </FooterContent>
      </FooterContainer>
    </footer>
  );
};

export default FooterComponent;
