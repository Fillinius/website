import { FC } from 'react'

import styles from './styles.module.scss'
import { PortfolioProp } from '@/app/portfolio/types'
import Image from 'next/image'

export const Portfolio: FC<PortfolioProp> = (prop) => {
  const { title, image, description, orderer, square } = prop
  return (
    <section className={styles.portfolioWrapper}>
      <div className={styles.cardList}>
        <div className={styles.card}>
          <div className={styles.cardImage}>
            <Image src={image[0]} alt={title} />
          </div>
          <div className={styles.cardText}>
            <div className={styles.cardTitle}>{title}</div>
            <div className={styles.cardOrderer}>Заказчик: {orderer}</div>
            <div className={styles.cardDescription}>Особенности: {description}</div>
            <div className={styles.cardSquere}>Объем работ: {square} м2</div>
          </div>
        </div>
      </div>
    </section>
  )
}
