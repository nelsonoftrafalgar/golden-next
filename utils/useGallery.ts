import { useState } from 'react'

export interface IImage {
  id: number
  url: string
}

export const useGallery = (images: IImage[]) => {
  const { 0: min, [images.length - 1]: max } = images.sort((a, b) => a.id - b.id)
  const [counter, setCounter] = useState(min.id)
  const currentImage = images.find(({ id }) => id === counter)

  const nextClick = () => {
    counter < max.id ? setCounter(counter + 1) : setCounter(min.id)
  }

  const prevClick = () => {
    counter > min.id ? setCounter(counter - 1) : setCounter(max.id)
  }

  return { nextClick, prevClick, currentImage }
}
