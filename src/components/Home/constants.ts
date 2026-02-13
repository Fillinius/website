import listIcon from '@/assets/svg/treaty.svg'
import calendarIcon from '@/assets/svg/calendar.svg'
import handsfreeIcon from '@/assets/svg/handsfree_call.svg'
import phoneIcon from '@/assets/svg/phone_consultation.svg'
import certificationIcon from '@/assets/svg/certification.svg'
import starIcon from '@/assets/svg/star_calendar.svg'
import headIcon from '@/assets/svg/head_planning_process.svg'
import moneyIcon from '@/assets/svg/money.svg'

import { AdvantageList } from '../../ui/Advantage/type'

export const advantageHome: AdvantageList = {
  title: 'Преимущества нашей компании',
  cards: [
    {
      id: 1,
      url: listIcon,
      title: 'Условия',
      description:
        'Мы не работаем по шаблону. Проанализировав ваши цели и бюджет, мы разработаем персональное предложение. В            итоге вы получите покрытие, которое на 100% cоответствует вашим техническим заданиям и ожиданиям по            качеству.',
    },
    {
      id: 2,
      url: calendarIcon,
      title: 'Ассортимент',
      description:
        'Десятки проверенных решений — от эконом-класса до премиум. Наши специалисты помогут сравнить и выбрать            именно то, что идеально подойдет под ваши задачи и бюджет.',
    },
    {
      id: 3,
      url: handsfreeIcon,
      title: 'Индивидуальный менеджер',
      description:
        'Ваш менеджер сопровождает вас на всех этапах, чтобы вы могли не отвлекаться на организационные вопросы. Мы           берем рутину на себя.',
    },
    {
      id: 4,
      url: phoneIcon,
      title: 'Техническая Консультация',
      description:
        'Если в процессе работы возникнет нестандартная задача, мы не будем гадать. Мы подключим технического            специалиста, который обладает именно той экспертизой, которая нужна для вашего проекта. Вы получаете не            просто консультацию, а гарантированно верное решение.',
    },
    {
      id: 5,
      url: certificationIcon,
      title: 'Аттестация',
      description:
        'Мы инвестируем в развитие наших бригад: обязательное обучение и регулярная аттестация дополняют их            практический опыт. Для вас это значит идеально выполненную работу без рисков и переделок.',
    },
    {
      id: 6,
      url: starIcon,
      title: 'Надежность',
      description:
        'Мы дорожим репутацией ответственного партнера, поэтому строго соблюдаем согласованные даты. Вы можете быть            уверены: ваши планы не будут нарушены. Все работы выполняются с официальной гарантией и в срок.',
    },
    {
      id: 7,
      url: headIcon,
      title: 'Индивидуальный подход',
      description:
        'Мы не работаем по шаблону. Готовы реализовать ваши требования к планировке и другим параметрам помещения,            найдя оптимальное техническое решение.',
    },
    {
      id: 8,
      url: moneyIcon,
      title: 'ОПЛАТА',
      description:
        'Мы понимаем, что удобство — это не только сроки, но и платежи. Поэтому всегда готовы предложить гибкую            систему оплаты, адаптированную под вас.',
    },
  ],
}
