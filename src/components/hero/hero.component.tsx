"use client";
import {
  ExploreBtn,
  ExploreBtnContainer,
  GridItem,
  GridOverlay,
  HeroContainer,
  HeroWrapper,
} from "./hero.styles";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import useAnimationStore from "@/app/stores/heroAnimation";

export const revalidate = 0;

// Hero Props
type HeroProps = {
  heroData: {
    heroImage: string;
    altText?: string;
    heading: string;
    tagline: string;
  };
};

const Hero = ({ heroData }: HeroProps) => {
  // Get screen width to determine if on mobile
  const screenWidth = window.innerWidth;

  // Zustand store for animation state
  const { hasHeroAnimated, setHeroAnimated, isHeroHidden, hideHeroElements } =
    useAnimationStore();

  // Hero Animation
  useGSAP(() => {
    if (!hasHeroAnimated) {
      gsap
        .timeline()
        .set("#explore-btn", {
          opacity: 0,
        })
        .fromTo(
          "#hero-heading",
          {
            y: 100,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            delay: screenWidth < 900 ? 2 : 3,
          }
        )
        .fromTo(
          "#hero-tagline",
          {
            xPercent: -100,
            opacity: 0,
          },
          {
            xPercent: 0,
            opacity: 1,
            duration: 0.3,
          }
        )
        .to(".hero-grid-item", {
          rotateY: "90deg",
          opacity: 0,
          borderBottom: "1px solid gray",
          duration: 1,
          delay: 0.2,
          ease: "easeOut",
        })
        .to(["#explore-btn"], {
          opacity: 1,
          visibility: "visible",
          duration: 0.5,
        })
        .eventCallback("onComplete", () => {
          setHeroAnimated(); // Mark the animation as complete
          hideHeroElements(); // Persist the hidden state
        });
    }

    // Cleanup on unmount
    return () => {
      gsap.globalTimeline.clear(); // Clear timelines
    };
  }, [hasHeroAnimated, setHeroAnimated]);

  return (
    <HeroWrapper id='hero-section' data-bg-color='bg-transparent'>
      <HeroContainer id='container' className='size-full sm:px-24 px-6'>
        <div id='bg-image'>
          <Image
            src={heroData?.heroImage || "/images/dark-bg.png"}
            alt='Hero Image'
            fill
            className='w-full h-full object-cover absolute -z-10'
          />
        </div>

        {/* Grid Overlay */}
        <GridOverlay
          id='hero-grid-overlay'
          // Show or hide the grid overlay
          className={isHeroHidden ? "hidden-elements" : ""}
        >
          {Array.from({ length: 100 }).map((_, index) => (
            <GridItem
              className={`hero-grid-item ${
                isHeroHidden ? "hidden-elements" : ""
              }`}
              key={index}
            />
          ))}
        </GridOverlay>

        {/* Explore Button */}
        <ExploreBtnContainer id='explore-container'>
          <ExploreBtn id='explore-btn' className='opacity-1 relative z-1'>
            Explore
          </ExploreBtn>

          {/* Hero Text */}
          <div id='text' className='flex flex-col py-4 px-4 overflow-hidden'>
            <h1
              id='hero-heading'
              className='font-bold text-4xl leading-none text-white font-bebas text-shadow-sm text-shadow-black'
            >
              Transforming <span className="text-[tan] text-shadow text-shadow-lg">Vision</span> Into Reality
            </h1>
            <p
              id='hero-tagline'
              className='text-white text-lg text-shadow-sm bg-gradient-to-r from-black to-transparent p-4 rounded-lg'
            >
              <span id='hero-tagline-text'>At Timeless <span className="text-[tan]">Interiors</span>, we bring your unique vision to life.</span>
            </p>
          </div>
        </ExploreBtnContainer>
      </HeroContainer>
    </HeroWrapper>
  );
};

export default Hero;
