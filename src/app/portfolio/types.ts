import { StaticImageData } from 'next/image'

export interface PortfolioProp {
  id: number
  title: string
  image: StaticImageData[]
  description: string
  orderer: string
  square: number
}
