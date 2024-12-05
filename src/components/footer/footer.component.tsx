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

/* eslint-disable react/no-unescaped-entities */

const FooterComponent = () => {
  const [isHovered, setIsHovered] = useState<number | null>(null);

  return (
    <footer
      className='relative top-0 sm:h-screen overflow-hidden py-24'
      data-bg-color='bg-background'
    >
      <FooterContainer id='container'>
        <FooterContent>
          <p className='font-bebas text-white text-[12vw] leading-none'>
            Let's <span className='text-[tan]'>Connect</span>{" "}
          </p>

          <LinksContainer>
            {footerLinks.links.map((link, index) => (
              <Link key={index} href={link.href} target='_blank'>
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

          {/* Footer Bottom */}
          <FooterBottom>
            <FooterInfo>
              <FooterColumn>
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
              <FooterColumn>
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
              <FooterColumn>
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
