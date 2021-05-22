import { IImage, useGallery } from '../utils/useGallery'

import { FC } from 'react'
import Image from 'next/image'
import axios from 'axios'

interface IProps {
  images: IImage[]
}

const Gallery: FC<IProps> = ({ images }) => {
  const { nextClick, prevClick, currentImage } = useGallery(images)
  return (
    <div className="gallery-section">
      <button className="gallery-btn" onClick={prevClick}>
        <Image src={'/icons/prev.svg'} width={100} height={100} />
      </button>
      <div className="gallery-image">
        <img src={`${process.env.apiUrl}${currentImage.url}`} />
      </div>
      <button className="gallery-btn" onClick={nextClick}>
        <Image src={'/icons/next.svg'} width={100} height={100} />
      </button>
    </div>
  )
}

export default Gallery

export const getStaticProps = async () => {
  const response = await axios.get(`${process.env.API_URL}/gallery`)

  return {
    props: {
      images: response.data.images
    }
  }
}
