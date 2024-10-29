"use client";
import React, { useState } from "react";
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

  const toggleMenu = () => {
    console.log("click");
    setShowMenu((prev) => !prev);
  };

  return (
    <header className='flex justify-between items-center px-12 absolute z-10 w-full'>
      <HeaderContainer>
        <Link href='/' className='font-bebas text-white text-xl'>
          Timeless Interiors
        </Link>
        {/* Header Links */}
        <LinksContainer className={` ${showMenu ? "top-0" : "-top-[100vh]"}`}>
          {/* Links */}
          {headerData.links.map((item, index) => {
            return (
              <li key={index} className='text-white text-base uppercase'>
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
