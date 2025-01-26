import React from "react";

import GalleryComp from "@/components/gallery/gallery.component";
import { getGalleryPage } from "@/sanity/queries/page";
import TransitionEffect from "@/components/transition-effect/transition-effect.component";

const GalleryPage = async () => {
  const data = await getGalleryPage();
  const { Gallery: galleryData } = data;

  console.log("GALLERY: ", galleryData);
  return (
    <>
      <TransitionEffect />

      <GalleryComp galleryData={galleryData} />
    </>
  );
};

export default GalleryPage;
