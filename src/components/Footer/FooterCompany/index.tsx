'use client'

import { FC } from 'react'
import logoIcon from '@/assets/svg/logo.svg'

import styles from './styles.module.scss'
import Image from 'next/image'

export const FooterCompany: FC = () => {
  return (
    <div className={styles.companyWrapper}>
      <Image src={logoIcon} alt="logo" width={200} />
      <div className={styles.text}>
        <p> Адрес: г. Нижний Новгород, ул. Бригадная, 14</p>
        <p>Телефон: +7 910 887 81 18</p>
        <p>E-Mail: stroy-grad.52@mail.ru</p>
        <p>Режим работы: Пн-Пт: 8.00 - 17.00</p>
        <br />
        <p>© ООО "ГК Строй-Град" 2025. Политика конфиденциальности </p>
        <p>@Fillinius</p>
      </div>
    </div>
  )
}
