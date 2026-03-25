import betonIcon from '@/assets/images/beton.webp'
import floorIcon from '@/assets/images/floor.webp'
import fundIcon from '@/assets/images/fund.webp'
import mkIcon from '@/assets/images/mk.webp'
import plIcon from '@/assets/images/pl.webp'
import spIcon from '@/assets/images/spfull.webp'
import starIcon from '@/assets/svg/star_calendar.svg'
import headIcon from '@/assets/svg/head_planning_process.svg'
import calendarIcon from '@/assets/svg/calendar.svg'
import sertificationIcon from '@/assets/svg/certification.svg'
import { MontajCard } from './types'
import { AdvantageList } from '@/ui/Advantage/type'

export const arrImages: MontajCard[] = [
  {
    id: 1,
    title: 'Устройство железобетонных конструкций',
    imageUrl: betonIcon,
  },
  {
    id: 2,
    title: 'Монтаж металлоконструкций',
    imageUrl: mkIcon,
  },
  {
    id: 3,
    title: 'Монтаж профнастила',
    imageUrl: plIcon,
  },
  {
    id: 4,
    title: 'Устройство фундамента',
    imageUrl: fundIcon,
  },
  {
    id: 5,
    title: 'Устройство межэтажных перекрытий',
    imageUrl: floorIcon,
  },
  {
    id: 6,
    title: 'Монтаж сэндвич панелей',
    imageUrl: spIcon,
  },
]

export const advantageMontaj: AdvantageList = {
  title: '',
  cards: [
    {
      id: 1,
      url: starIcon,
      title: 'Высокое качество работ',
      description:
        'Мастера с опытом более 5 лет. Мы инвестируем в развитие наших бригад: обязательное обучение и регулярная аттестация дополняют их            практический опыт.',
    },
    {
      id: 2,
      url: headIcon,
      title: 'Гарантия на работы',
      description: 'На все выполненные работы даем гарантию согласно договору',
    },
    {
      id: 3,
      url: calendarIcon,
      title: 'Гарантия сроков',
      description: 'Гарантируем выполнить работу точно в срок или выплатим заказчику неустойку*',
    },
    {
      id: 4,
      url: sertificationIcon,
      title: 'доверие',
      description:
        'Мы заслужили доверие наших клиентов благодаря честности, надежности и ответственного подхода к работе',
    },
  ],
}
