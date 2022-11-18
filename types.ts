
interface StrapiResponse<T> {
  data: {
    id: number
    attributes: T
  }
}

export interface StrapiImage {
  name: string
  hash: string
  ext: string
  mime: string
  path: null
  width: number
  height: number
  size: number
  url: string
}

export interface Article {
  Title: string
  Excerpt: string
  Cover: StrapiResponse<{
    name: string
    alternativeText: string
    caption: string
    formats: {
      thumbnail: StrapiImage
      medium: StrapiImage
      large: StrapiImage
    }
  }>
}
