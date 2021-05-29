import { act, renderHook } from '@testing-library/react-hooks'

import { useGallery } from '../../utils/useGallery'

const mockImages = [
  { id: 1, url: 'mockUrl1' },
  { id: 2, url: 'mockUrl2' },
  { id: 3, url: 'mockUrl3' }
]

test('it should increment gallery', () => {
  const { result } = renderHook(() => useGallery(mockImages))
  expect(result.current.currentImage).toMatchObject({ id: 1, url: 'mockUrl1' })
  act(() => {
    result.current.nextClick()
  })
  expect(result.current.currentImage).toMatchObject({ id: 2, url: 'mockUrl2' })
  act(() => {
    result.current.nextClick()
  })
  expect(result.current.currentImage).toMatchObject({ id: 3, url: 'mockUrl3' })
  act(() => {
    result.current.nextClick()
  })
  expect(result.current.currentImage).toMatchObject({ id: 1, url: 'mockUrl1' })
})

test('it should decrement gallery', () => {
  const { result } = renderHook(() => useGallery(mockImages))
  expect(result.current.currentImage).toMatchObject({ id: 1, url: 'mockUrl1' })
  act(() => {
    result.current.prevClick()
  })
  expect(result.current.currentImage).toMatchObject({ id: 3, url: 'mockUrl3' })
  act(() => {
    result.current.prevClick()
  })
  expect(result.current.currentImage).toMatchObject({ id: 2, url: 'mockUrl2' })
  act(() => {
    result.current.prevClick()
  })
  expect(result.current.currentImage).toMatchObject({ id: 1, url: 'mockUrl1' })
})
