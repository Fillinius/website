'use client'

import { FC } from 'react'

import Title from 'antd/es/typography/Title'
import { Home } from '@/components'
import bgImage from '@/assets/images/bg.jpg'

import styles from './styles.module.scss'

const HomePage: FC = () => {
  return (
    <main className={styles.container}>
      <div className={styles.titleWrapper} style={{ backgroundImage: `url(${bgImage.src})` }}>
        <div className={styles.title}>
          <Title level={1}>ГК Строй-Град</Title>
        </div>
      </div>
      <Home />
    </main>
  )
}

export default HomePage
