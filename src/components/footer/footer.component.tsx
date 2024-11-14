import Link from "next/link";
import {
  FooterContainer,
  FooterContent,
  FooterLink,
  LinksContainer,
} from "./footer.styles";
/* eslint-disable react/no-unescaped-entities */

const FooterComponent = () => {
  return (
    <footer className='relative top-0 sm:h-screen overflow-hidden py-24'>
      <FooterContainer id='container'>
        <FooterContent>
          <p className='font-bebas text-white text-[12vw] leading-none'>
            Let's Connect{" "}
          </p>

          <LinksContainer>
            {/* My Website */}
            <FooterLink>
              <Link href='https://www.desean-ward.me/' target='_blank'>
                www.Desean-Ward.me
              </Link>
            </FooterLink>

            {/* LinkedIn */}
            <FooterLink>
              <Link
                href='https://www.linkedin.com/in/desean-ward'
                target='_blank'
              >
                LinkedIn
              </Link>
            </FooterLink>

            {/* Github */}
            <FooterLink>
              <Link href='https://www.github.com/desean-ward' target='_blank'>
                Github
              </Link>
            </FooterLink>
          </LinksContainer>
        </FooterContent>
      </FooterContainer>
      <span className='w-screen absolute bottom-0 mb-8 text-center'>
        &copy; {new Date().getFullYear()} De Sean Ward | All rights reserved.
      </span>
    </footer>
  );
};

export default FooterComponent;
