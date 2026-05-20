'use client'

import { FC } from 'react'

import styles from './styles.module.scss'
import { Policy } from '@/components'

const StaticPage: FC = () => {
  return (
    <main className={styles.container}>
      <div className={styles.headWrapper}>
        <Policy />
      </div>
    </main>
  )
}

export default StaticPage
