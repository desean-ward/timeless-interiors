import GalleryComp from "@/components/gallery/gallery.component";
import { getGalleryPage } from "@/sanity/queries/page";
import React from "react";

const GalleryPage = async () => {
  const data = await getGalleryPage();
  const { Gallery: galleryData } = data;

  console.log("GALLERY: ", galleryData);
  return <GalleryComp galleryData={galleryData} />;
};

export default GalleryPage;
