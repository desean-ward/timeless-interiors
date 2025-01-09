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
} from "./blog-footer.styles";
import { FaGithub, FaGlobe, FaLinkedin } from "react-icons/fa";

import footerLinks from "@/data/footerLinks.json";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
// import useAnimationStore from "@/app/stores/animations";
import { Spotlight } from "@/components/ui/spotlight";
import useAnimationStore from "@/app/stores/animations";

gsap.registerPlugin(ScrollTrigger);

const BlogFooterComponent = () => {
  // Social icon hovered
  const [isHovered, setIsHovered] = useState<number | null>(null);

  // Spotlight animation
  const [inView, setInView] = useState(false);

  const { triggerFooterRefresh, currentSlug } = useAnimationStore();

  // Flags to disable animations
  const disableAnimations = true;

  // TODO: ***** Find solutions to animations not triggering properly on dynamic routes ***** /

  useGSAP(() => {
    setInView(true);
    if (disableAnimations) return;

    const footerlinks = document.querySelectorAll(".footer-link");

    // Let's Connect Scroll Trigger
    const lcTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#footer-container",
        start: "top 70%",
        end: "bottom bottom",
        toggleActions: "play none reverse none",
        markers: false,
      },
    });

    // Animate "Let's Connect"
    lcTimeline.from("#lets-connect", {
      y: 500,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
      onStart: () => setInView(true),
      onReverseComplete: () => setInView(false),
    });

    // Footer Links ScrollTrigger
    const flTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#footer-container",
        start: "top 25%",
        end: "bottom bottom",
        toggleActions: "play none reverse none",
        markers: false,
      },
    });

    // Animate Footer Links
    flTimeline.from(footerlinks, {
      opacity: 0,
      stagger: 0.2,
      duration: 0.5,
    });

    flTimeline.from(".footer-column", {
      opacity: 0,
      duration: 0.5,
    });
  }, [currentSlug]);

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
                    <Link href='/' className='text-blue-500 hover:text-[tan]'>
                      Home
                    </Link>
                  </li>
                  {" | "}
                  <li className='no-underline hover:text-underline'>
                    <Link href='/blog' className='text-blue-500 hover:text-[tan]'>
                      Blog
                    </Link>
                  </li>
                  {" | "}
                  <li className='no-underline hover:text-underline'>
                    <Link href='/projects' className='text-blue-500 hover:text-[tan]'>
                      Projects
                    </Link>
                  </li>
                  {" | "}
                  <li className='no-underline hover:text-underline'>
                    <Link href='/services' className='text-blue-500 hover:text-[tan]'>
                      Services
                    </Link>
                  </li>
                  {" | "}
                  <li className='no-underline hover:text-underline'>
                    <Link href='/gallery' className='text-blue-500 hover:text-[tan]'>
                      Gallery
                    </Link>
                  </li>
                  {" | "}
                  <li className='no-underline hover:text-underline'>
                    <Link
                      href='mailto:dward@desean-ward.me'
                      className='text-blue-500 hover:text-[tan]'
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
                    className='text-blue-500 hover:text-[tan]'
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
                    <a href='#' className='text-blue-500 hover:text-[tan]'>
                      Facebook
                    </a>
                  </li>
                  {" | "}
                  <li className='no-underline hover:text-underline'>
                    <a href='#' className='text-blue-500 hover:text-[tan]'>
                      Instagram
                    </a>
                  </li>
                  {" | "}
                  <li className='no-underline hover:text-underline'>
                    <a href='#' className='text-blue-500 hover:text-[tan]'>
                      Pinterest
                    </a>
                  </li>
                  {" | "}
                  <li className='no-underline hover:text-underline'>
                    <a href='#' className='text-blue-500 hover:text-[tan]'>
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

export default BlogFooterComponent;
