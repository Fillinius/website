import { FC } from 'react'

import styles from './styles.module.scss'
import Title from 'antd/es/typography/Title'
import { Portfolio } from '@/components/Portfolio'
import { portfolioList } from './constants'

const PortfolioPage: FC = () => {
  return (
    <main className={styles.container}>
      <div className={styles.titleWrapper}>
        <div className={styles.title}>
          <Title level={1}>ГК Строй-Град - наши работы.</Title>
        </div>
      </div>
      {portfolioList.map((portfolio) => (
        <Portfolio key={portfolio.id} {...portfolio} />
      ))}
    </main>
  )
}

export default PortfolioPage
