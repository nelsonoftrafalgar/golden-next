import { FC, useState } from 'react'

import Link from 'next/link'
import axios from 'axios'
import { getInstrumentList } from '../../utils/getInstrumentList'

export interface IListItem {
  slug: string
  name: string
}

interface IProps {
  frenchList: IListItem[]
  englishList: IListItem[]
}

const Portfolio: FC<IProps> = ({ englishList, frenchList }) => {
  const [isEnglishListVisible, setToggleEnglishList] = useState(false)
  const [isFrenchListVisible, setToggleFrenchList] = useState(false)
  return (
    <section className="portfolio-section">
      <div className="viols-menu">
        <button onClick={() => setToggleFrenchList(!isFrenchListVisible)} className="viols-menu-btn">
          French
        </button>
        {isFrenchListVisible ? (
          <ul className="viols-menu-list">
            {frenchList.map(({ slug, name }) => (
              <li key={slug} className="viols-menu-list-item">
                <Link href={`/portfolio/${slug}`}>
                  <a>{name}</a>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <div className="viols-menu-image">
            <img src={'/icons/french-bg.svg'} />
          </div>
        )}
      </div>
      <div className="viols-menu">
        <button onClick={() => setToggleEnglishList(!isEnglishListVisible)} className="viols-menu-btn">
          English
        </button>
        {isEnglishListVisible ? (
          <ul className="viols-menu-list">
            {englishList.map(({ slug, name }) => (
              <li key={slug} className="viols-menu-list-item">
                <Link href={`/portfolio/${slug}`}>
                  <a>{name}</a>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <div className="viols-menu-image">
            <img src={'/icons/english-bg.svg'} />
          </div>
        )}
      </div>
    </section>
  )
}

export default Portfolio

export const getStaticProps = async () => {
  const { data } = await axios.get(`${process.env.API_URL}/portfolio`)
  const frenchList = getInstrumentList(data.items, 'french')
  const englishList = getInstrumentList(data.items, 'english')

  return {
    props: {
      frenchList,
      englishList
    },
    revalidate: 1
  }
}
