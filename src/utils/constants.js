import Image1 from '../images/image-product-1.jpg'
import Image1Thumbnail from '../images/image-product-1-thumbnail.jpg'
import Image2 from '../images/image-product-2.jpg'
import Image2Thumbnail from '../images/image-product-2-thumbnail.jpg'
import Image3 from '../images/image-product-3.jpg'
import Image3Thumbnail from '../images/image-product-3-thumbnail.jpg'
import Image4 from '../images/image-product-4.jpg'
import Image4Thumbnail from '../images/image-product-4-thumbnail.jpg'

export const IMAGES = {
  1: {
    large: Image1,
    small: Image1Thumbnail
  },
  2: {
    large: Image2,
    small: Image2Thumbnail
  },
  3: {
    large: Image3,
    small: Image3Thumbnail
  },
  4: {
    large: Image4,
    small: Image4Thumbnail
  },
}

export const BREAKPOINTS = {
  phone: 550,
  tablet: 1100,
  laptop: 1500,
};

export const QUERIES = {
  tabletAndLarger: `(min-width: ${BREAKPOINTS.phone / 16}rem)`,
  laptopAndLarger: `(min-width: ${BREAKPOINTS.tablet / 16}rem)`,
  desktopAndLarger: `(min-width: ${BREAKPOINTS.laptop / 16}rem)`,
};