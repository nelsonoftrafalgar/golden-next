import { FC } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

export interface IPortfolioItem {
  id: number
  name: string
  slug: string
  origin: string
  description: {
    id: number
    head: string
    strings: string
    back: string
    front: string
    purfling: string
    varnish: string
    stringLength: string
    sides: string
    fingerboard: string
    neck: string
  }
  image: {
    url: string
  }
}

interface IProps {
  item: IPortfolioItem
}

const Name: FC<IProps> = ({ item }) => {
  const router = useRouter()

  if (router.isFallback) {
    return <section className="portfolio-section">Loading ...</section>
  }

  const { name, image, description } = item

  return (
    <section className="portfolio-section">
      <div className="viol-wrapper">
        <div className="viol-image">
          <img src={`${process.env.apiUrl}${image.url}`} alt="instrument image" />
        </div>
        <div className="viol-spec">
          <h2 className="viol-name">{name}</h2>
          <ul>
            <li>Front - {description.front}</li>
            <li>Back - {description.back}</li>
            <li>Sides - {description.sides}</li>
            <li>Neck - {description.neck}</li>
            <li>Fingerboard - {description.fingerboard}</li>
            <li>Head - {description.head}</li>
            <li>Purfling - {description.purfling}</li>
            <li>Varnish - {description.varnish}</li>
            <li>String Length - {description.stringLength}</li>
            <li>Strings - {description.strings}</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Name

export const getStaticPaths = async () => {
  const { data } = await axios.get(`${process.env.API_URL}/portfolio`)
  const paths = data.items.map((item: IPortfolioItem) => ({ params: { name: item.slug } }))

  return { paths, fallback: true }
}

export const getStaticProps = async ({ params }) => {
  const { data } = await axios.get(`${process.env.API_URL}/portfolio`)
  const item = data.items.find((item: IPortfolioItem) => item.slug === params.name)

  if (!item) {
    return {
      notFound: true
    }
  }

  return {
    props: { item },
    revalidate: 1
  }
}
