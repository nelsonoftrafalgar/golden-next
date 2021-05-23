import { IListItem } from '../pages/portfolio'
import { IPortfolioItem } from '../pages/portfolio/[name]'

type TListOrigin = 'french' | 'english'

export const getInstrumentList = (items: IPortfolioItem[], listOrigin: TListOrigin) =>
  items.reduce((acc: IListItem[], { slug, name, origin }: IPortfolioItem) => {
    return origin === listOrigin ? [...acc, { slug, name }] : acc
  }, [])
