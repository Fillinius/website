export interface AdvantageCard {
  id: number
  url: string
  title: string
  description: string
}

export interface AdvantageList {
  title: string
  cards: AdvantageCard[]
}
