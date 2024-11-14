"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import headerData from "@/data/headerData.json";
import {
  ContactUsButton,
  HeaderContainer,
  LinksContainer,
  MobileMenuButton,
} from "./header.styles";

const HeaderComponent = () => {
  const [showMenu, setShowMenu] = useState(false);

  // Toggle scroll lock based on menu state
  useEffect(() => {
    if (showMenu) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    
    // Cleanup function to remove the class when the component unmounts
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [showMenu]);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <header className='flex justify-between items-center px-12 absolute z-10 w-full'>
      <HeaderContainer>
        <Link href='/' className='font-bebas text-white text-xl'>
          Timeless Interiors
        </Link>
        {/* Header Links */}
        <LinksContainer className={`${showMenu ? "top-0" : "-top-[100vh]"}`}>
          {/* Links */}
          {headerData.links.map((item, index) => {
            return (
              <li key={index} className='text-white text-base uppercase' onClick={() => toggleMenu()}>
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
      </HeaderContainer>
    </header>
  );
};

export default HeaderComponent;
