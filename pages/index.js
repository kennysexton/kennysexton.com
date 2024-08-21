/* eslint-disable import/no-unresolved */
import { Gallery } from "next-gallery"
import Image from 'next/image';
import homepage_images from 'public/homepage-images/images_with_thumbnails.json'

export default function Photography() {

  // Use a neutral gray if blur data is not provided
  const parseJSON = () => {

    const imageData = homepage_images.map(item => ({
      src: item.src,
      alt: item.alt,
      aspect_ratio: Number(item.aspect_ratio.split('/')[0]) / Number(item.aspect_ratio.split('/')[1]),
      nextImageProps: {
        placeholder: item.blurDataURL ? "blur" : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mPs+A8AAhUBiUo2eoUAAAAASUVORK5CYII=",
        blurDataURL: item.blurDataURL ?? ""
      }
    }))

    return imageData
  }

  return (
    <div className="container">
      <Gallery
        // widths={[500, 1000, 1600]}
        // ratios={[2.2, 4, 6, 8]}
        widths={[500, 1000, 1600]}
        ratios={[2.2, 4, 4, 5]}
        gap={'2px'}
        lastRowBehavior='fill'
        images={parseJSON()}
      />
    </div>
  )
}