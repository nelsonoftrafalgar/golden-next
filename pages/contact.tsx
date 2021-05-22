import { FC } from 'react'
import axios from 'axios'

interface IProps {
  email: string
  url: string
}

const Contact: FC<IProps> = ({ email, url }) => {
  return (
    <div className="contact-section">
      <p className="contact-email">{email}</p>
      <a className="contact-url" href={`https://${url}`} target="_blank" rel="noopener noreferrer">
        {url}
      </a>
    </div>
  )
}

export default Contact

export const getStaticProps = async () => {
  const response = await axios.get(`${process.env.API_URL}/contact`)

  return {
    props: {
      email: response.data.email,
      url: response.data.url
    }
  }
}
