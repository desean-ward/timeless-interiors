import { groq } from "next-sanity";
import { client } from "../lib/client";

export type ContentType = {
  type: string;
  excerpt: string;
  heading: string;
  image: {
    _type: string;
    asset: unknown;
  };
};

export type ImageType = {
  url: string;
};

export async function getServicesPage(slug: string) {
  const getPageQuery = groq`*[_type == "page" && slug.current == ${slug}][0]{
    
    'Heading':title,
    'Content':pageBuilder[][_type == "textWithIllustration"]{
      "type": _type,
      excerpt,
      heading,
      image
    
    },
    'Gallery':pageBuilder[][_type == "gallery"][0]{
      _type,
      'imageUrls':images[].asset->{
        'url':url
      }
    },

      'CallToAction':pageBuilder[][_type == "callToAction"][0]{
      _type == "callToAction" => @-> {
      _type,
      title,
      link
    }
        },
    'Video':pageBuilder[][_type == "video"][0]{
     videoLabel,
     url
    },
      'FormContact':pageBuilder[][_type == "form"][0]{
     label,
     heading,
     form
    },
}`;

  return await client.fetch(getPageQuery, {
    revalidate: new Date().getSeconds(),
  });
}
