/* eslint-disable import/no-unresolved */
import {Gallery} from "next-gallery"
import homepage_images from 'public/homepage-images/images_with_thumbnails.json'
import {useState} from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function Photography() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  // Use a neutral gray if blur data is not provided
  const parseJSON = () => {

    return homepage_images.map(item => ({
        src: item.src,
        alt: item.alt,
        aspect_ratio: Number(item.aspect_ratio.split('/')[0]) / Number(item.aspect_ratio.split('/')[1]),
        nextImageProps: {
            placeholder: item.blurDataURL ? "blur" : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mPs+A8AAhUBiUo2eoUAAAAASUVORK5CYII=",
            blurDataURL: item.blurDataURL ?? ""
        }
    }))
  }

  const images = parseJSON();

  return (
    <div className="container">
      <Gallery
        widths={[500, 1000, 1600]}
          // ratios={[2.2, 4, 6, 8]}
        ratios={[2.2, 4, 4, 5]}
        gap={'2px'}
        lastRowBehavior='fill'
        images={images}
        overlay={(i) => (
            <div
                className="absolute top-0 left-0 w-full h-full cursor-pointer"
                onClick={() => {
                    setIndex(i);
                    setOpen(true);
                }}
            />
        )}
      />

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={images}
        index={index}
      />
    </div>
  )
}