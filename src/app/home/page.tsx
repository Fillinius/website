'use client'

import { FC } from 'react'

import Title from 'antd/es/typography/Title'
import { CookieConsent, Home } from '@/components'
import bgImage from '@/assets/images/sklad_slice.png'

import styles from './styles.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { PATHS } from '@/constants/routes'

const HomePage: FC = () => {
  return (
    <main className={styles.container}>
      <div className={styles.titleWrapper}>
        <div className={styles.title}>
          <Title level={1}>
            Строительство складов под ключ <strong>от 30 000 руб/м² *</strong>
          </Title>
        </div>
        <div className={styles.titleImage}>
          <Image src={bgImage} alt="sklad" />
          <div className={styles.titleMontaj}>
            <Link href={PATHS.montaj}>Монтаж</Link>
          </div>
          <div className={styles.titleKrovli}>
            <Link href={PATHS.krovli}>Кровли</Link>
          </div>
          <div className={styles.titlePol}>
            <Link href={PATHS.prompol}>Полы</Link>
          </div>
        </div>
      </div>
      <Home />
      <CookieConsent />
    </main>
  )
}

export default HomePage
