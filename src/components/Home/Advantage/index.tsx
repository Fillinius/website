import { FC } from 'react'

import Image from 'next/image'
import Title from 'antd/es/typography/Title'
import listIcon from '@/assets/svg/treaty.svg'
import calendarIcon from '@/assets/svg/calendar.svg'
import handsfreeIcon from '@/assets/svg/handsfree_call.svg'
import phoneIcon from '@/assets/svg/phone_consultation.svg'
import certificationIcon from '@/assets/svg/certification.svg'
import starIcon from '@/assets/svg/star_calendar.svg'
import headIcon from '@/assets/svg/head_planning_process.svg'
import moneyIcon from '@/assets/svg/money.svg'

import styles from './styles.module.scss'

export const Advantage: FC = () => {
  return (
    <article className={styles.container}>
      <div className={styles.title}>
        <Title level={3}>Преимущества нашей компании</Title>
      </div>
      <div className={styles.advantageWrapper}>
        <div className={styles.advantageBlock}>
          <div className={styles.advantageImage}>
            <Image src={listIcon} alt="условия" />
          </div>
          <div className={styles.advantageTitle}>Условия</div>
          <div className={styles.advantageText}>
            Мы не работаем по шаблону. Проанализировав ваши цели и бюджет, мы разработаем персональное предложение. В
            итоге вы получите покрытие, которое на 100% соответствует вашим техническим заданиям и ожиданиям по
            качеству.
          </div>
        </div>
        <div className={styles.advantageBlock}>
          <div className={styles.advantageImage}>
            <Image src={calendarIcon} alt="Ассортимент" />
          </div>
          <div className={styles.advantageTitle}>Ассортимент</div>
          <div className={styles.advantageText}>
            Десятки проверенных решений — от эконом-класса до премиум. Наши специалисты помогут сравнить и выбрать
            именно то, что идеально подойдет под ваши задачи и бюджет.
          </div>
        </div>
        <div className={styles.advantageBlock}>
          <div className={styles.advantageImage}>
            <Image src={handsfreeIcon} alt="Индивидуальный менеджер" />
          </div>
          <div className={styles.advantageTitle}>Индивидуальный менеджер</div>
          <div className={styles.advantageText}>
            Ваш менеджер сопровождает вас на всех этапах, чтобы вы могли не отвлекаться на организационные вопросы. Мы
            берем рутину на себя.
          </div>
        </div>
        <div className={styles.advantageBlock}>
          <div className={styles.advantageImage}>
            <Image src={phoneIcon} alt="Техническая Консультация" />
          </div>
          <div className={styles.advantageTitle}>Техническая Консультация</div>
          <div className={styles.advantageText}>
            Если в процессе работы возникнет нестандартная задача, мы не будем гадать. Мы подключим технического
            специалиста, который обладает именно той экспертизой, которая нужна для вашего проекта. Вы получаете не
            просто консультацию, а гарантированно верное решение.
          </div>
        </div>
        <div className={styles.advantageBlock}>
          <div className={styles.advantageImage}>
            <Image src={certificationIcon} alt="Аттестация" />
          </div>
          <div className={styles.advantageTitle}>Аттестация</div>
          <div className={styles.advantageText}>
            Мы инвестируем в развитие наших бригад: обязательное обучение и регулярная аттестация дополняют их
            практический опыт. Для вас это значит идеально выполненную работу без рисков и переделок.
          </div>
        </div>
        <div className={styles.advantageBlock}>
          <div className={styles.advantageImage}>
            <Image src={starIcon} alt="Надежность" />
          </div>
          <div className={styles.advantageTitle}>Надежность</div>
          <div className={styles.advantageText}>
            Мы дорожим репутацией ответственного партнера, поэтому строго соблюдаем согласованные даты. Вы можете быть
            уверены: ваши планы не будут нарушены. Все работы выполняются с официальной гарантией и в срок.
          </div>
        </div>
        <div className={styles.advantageBlock}>
          <div className={styles.advantageImage}>
            <Image src={headIcon} alt="Индивидуальный подход" />
          </div>
          <div className={styles.advantageTitle}>Индивидуальный подход</div>
          <div className={styles.advantageText}>
            Мы не работаем по шаблону. Готовы реализовать ваши требования к планировке и другим параметрам помещения,
            найдя оптимальное техническое решение.
          </div>
        </div>
        <div className={styles.advantageBlock}>
          <div className={styles.advantageImage}>
            <Image src={moneyIcon} alt="ОПЛАТА" />
          </div>
          <div className={styles.advantageTitle}>ОПЛАТА</div>
          <div className={styles.advantageText}>
            Мы понимаем, что удобство — это не только сроки, но и платежи. Поэтому всегда готовы предложить гибкую
            систему оплаты, адаптированную под вас.
          </div>
        </div>
      </div>
    </article>
  )
}
