import moneyIcon from '@/assets/svg/money.svg'
import starIcon from '@/assets/svg/star_calendar.svg'
import headIcon from '@/assets/svg/head_planning_process.svg'
import calendarIcon from '@/assets/svg/calendar.svg'
import listIcon from '@/assets/svg/treaty.svg'
import phoneIcon from '@/assets/svg/phone_consultation.svg'

import { AdvantageList } from '../../ui/Advantage/type'

export const advantageKrovli: AdvantageList = {
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
      url: moneyIcon,
      title: 'ОПЛАТА',
      description:
        'Мы понимаем, что удобство — это не только сроки, но и платежи. Поэтому всегда готовы предложить гибкую            систему оплаты, адаптированную под вас.',
    },
    {
      id: 5,
      url: listIcon,
      title: 'Индивидуальный подход',
      description:
        'Мы не работаем по шаблону. Готовы реализовать ваши требования или найти оптимальное техническое решение.',
    },
    {
      id: 6,
      url: phoneIcon,
      title: 'Техническая Консультация',
      description:
        'Если в процессе работы возникнет нестандартная задача, мы не будем гадать. Мы подключим технического            специалиста, который обладает именно той экспертизой, которая нужна для вашего проекта. Вы получаете не            просто консультацию, а гарантированно верное решение.',
    },
  ],
}
