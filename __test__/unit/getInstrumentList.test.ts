import { getInstrumentList } from '../../utils/getInstrumentList'

const mockItems: any = [
  { slug: 'test-slug1', name: 'test-name1', origin: 'french' },
  { slug: 'test-slug2', name: 'test-name2', origin: 'english' },
  { slug: 'test-slug3', name: 'test-name3', origin: 'french' },
  { slug: 'test-slug4', name: 'test-name4', origin: 'english' }
]

test('it filters instruments by origin', () => {
  expect(getInstrumentList(mockItems, 'english')).toMatchObject([
    { slug: 'test-slug2', name: 'test-name2' },
    { slug: 'test-slug4', name: 'test-name4' }
  ])

  expect(getInstrumentList(mockItems, 'french')).toMatchObject([
    { slug: 'test-slug1', name: 'test-name1' },
    { slug: 'test-slug3', name: 'test-name3' }
  ])
})
