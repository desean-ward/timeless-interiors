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

/* eslint-disable react/no-unescaped-entities */

const FooterComponent = () => {
  return (
    <footer
      className='relative top-0 sm:h-screen overflow-hidden py-24'
      data-bg-color='bg-black'
    >
      <FooterContainer id='container'>
        <FooterContent>
          <p className='font-bebas text-white text-[12vw] leading-none'>
            Let's Connect{" "}
          </p>

          <LinksContainer>
            {/* My Website */}
            <FooterLink>
              <FaGlobe />
              <Link href='https://www.desean-ward.me/' target='_blank'>
                Visit Me
              </Link>
            </FooterLink>

            {/* LinkedIn */}
            <FooterLink>
              <FaLinkedin />
              <Link
                href='https://www.linkedin.com/in/desean-ward'
                target='_blank'
              >
                LinkedIn
              </Link>
            </FooterLink>

            {/* Github */}
            <FooterLink>
              <FaGithub />
              <Link href='https://www.github.com/desean-ward' target='_blank'>
                Github
              </Link>
            </FooterLink>
          </LinksContainer>
          {/* Footer Bottom */}
          <FooterBottom>
            <FooterInfo>
              <FooterColumn>
                <h2 className='font-semibold'>Timeless Interiors</h2>
                <p>Transforming Vision into Reality</p>

                <NavLinks>
                  <li className='no-underline hover:text-underline '>
                    <a href='/' className='text-blue-500'>
                      Home
                    </a>
                  </li>
                  {" | "}
                  <li className='no-underline hover:text-underline'>
                    <a href='/blog' className='text-blue-500'>
                      Blog
                    </a>
                  </li>
                  {" | "}
                  <li className='no-underline hover:text-underline'>
                    <a href='/Projects' className='text-blue-500'>
                      Projects
                    </a>
                  </li>
                  {" | "}
                  <li className='no-underline hover:text-underline'>
                    <a href='/services' className='text-blue-500'>
                      Services
                    </a>
                  </li>
                  {" | "}
                  <li className='no-underline hover:text-underline'>
                    <a href='/gallery' className='text-blue-500'>
                      Gallery
                    </a>
                  </li>
                  {" | "}
                  <li className='no-underline hover:text-underline'>
                    <a href='#' className='text-blue-500'>
                      Contact Us
                    </a>
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
                    href='mailto:contact@timelessinteriors.com'
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
                <p>✨ Follow us:</p>
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
              &copy; {new Date().getFullYear()} De Sean Ward | All rights
              reserved.
            </div>
          </FooterBottom>
        </FooterContent>
      </FooterContainer>
    </footer>
  );
};

export default FooterComponent;
