import { FC, useState } from 'react'

interface IProps {
  src: string
  alt: string
  className?: string
}

const CustomImage: FC<IProps> = ({ src, alt, className = '' }) => {
  const [hasError, setHasError] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  if (hasError) return <img className={className} src="" alt="image load failed" />

  return (
    <img
      className={className}
      onLoad={() => setIsLoaded(true)}
      onError={() => setHasError(true)}
      style={{ visibility: isLoaded ? 'visible' : 'hidden' }}
      src={src}
      alt={alt}
    />
  )
}

export default CustomImage
