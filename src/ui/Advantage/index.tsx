import { FC } from 'react'

import Image from 'next/image'
import Title from 'antd/es/typography/Title'
import { advantageHome } from '../../components/Home/constants'

import styles from './styles.module.scss'

export const Advantage: FC = () => {
  return (
    <article className={styles.container}>
      <div className={styles.title}>
        <Title level={3}>{advantageHome.title}</Title>
      </div>
      <div className={styles.advantageWrapper}>
        {advantageHome.cards.map((card) => (
          <li key={card.id} className={styles.advantageBlock}>
            <div className={styles.advantageImage}>
              <Image src={card.url} width={100} height={100} alt={card.title} />
            </div>
            <div className={styles.advantageTitle}>{card.title}</div>
            <div className={styles.advantageText}>{card.description}</div>
          </li>
        ))}
      </div>
    </article>
  )
}
