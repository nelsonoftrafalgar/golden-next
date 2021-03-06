import { IImage, useGallery } from '../utils/useGallery'

import CustomImage from '../components/CustomImage'
import { FC } from 'react'
import Image from 'next/image'
import axios from 'axios'

interface IProps {
  images: IImage[]
}

const Gallery: FC<IProps> = ({ images }) => {
  const { nextClick, prevClick, currentImage } = useGallery(images)
  return (
    <section className="gallery-section">
      <button className="gallery-btn" onClick={prevClick}>
        <Image src={'/icons/prev.svg'} width={100} height={100} alt="prev button" />
      </button>
      <div className="gallery-image">
        <CustomImage src={currentImage.url} alt="gallery image" />
      </div>
      <button className="gallery-btn" onClick={nextClick}>
        <Image src={'/icons/next.svg'} width={100} height={100} alt="next button" />
      </button>
    </section>
  )
}

export default Gallery

export const getStaticProps = async () => {
  const response = await axios.get(`${process.env.API_URL}/gallery`)

  return {
    props: {
      images: response.data.images
    },
    revalidate: 1
  }
}
