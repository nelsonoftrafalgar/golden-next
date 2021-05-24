import { FC } from 'react'
import axios from 'axios'

interface IProps {
  content: string
  image: {
    url: string
    alternativeText: string
  }
}

const About: FC<IProps> = ({ content, image }) => {
  return (
    <section className="about-section">
      <div
        className="about-content"
        dangerouslySetInnerHTML={{
          __html: content
        }}
      />
      <img className="about-image" src={`${process.env.apiUrl}${image.url}`} alt={image.alternativeText} />
    </section>
  )
}

export default About

export const getStaticProps = async () => {
  const response = await axios.get(`${process.env.API_URL}/about`)

  return {
    props: {
      content: response.data.content,
      image: response.data.image
    },
    revalidate: 1
  }
}
