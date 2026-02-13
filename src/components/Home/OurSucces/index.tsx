import { FC } from 'react'

import styles from './styles.module.scss'
import Title from 'antd/es/typography/Title'
import { Row, Col, Card } from 'antd'

export const OurSucces: FC = () => {
  return (
    <article className={styles.container}>
      <div className={styles.ourSuccesWrapper}>
        <div className={styles.titleWrapper}>
          <Title level={3} className={styles.title}>
            {' '}
            Наши успехи
          </Title>
          <p className={styles.text}>
            Мы делаем большие успехи и всегда развиваемся! Вот некоторые факты о том, как мы работаем:
          </p>
        </div>
        <div className={styles.blockWrapper}>
          <div className={styles.block}>
            <div className={styles.blockTitle}>В наличии</div>

            <p className={styles.blockText}>
              большой запас материалов и более 100 единиц оборудования для оперативного монтажа
            </p>
          </div>
          <div className={styles.block}>
            <div className={styles.blockTitle}>Более 5 лет</div>

            <p className={styles.blockText}>
              инженеры имеют опыт работы на крупных федеральных проектах. Следим за инновациями, повышаем квалификацию
            </p>
          </div>
          <div className={styles.block}>
            <div className={styles.blockTitle}>Более 100 объектов</div>

            <p className={styles.blockText}>
              выполнили за последние 3 года. Работаем согласно СНиП и СП. Регулярно обновляем парк оборудования
            </p>
          </div>
          <div className={styles.block}>
            <div className={styles.blockTitle}>Скидки до 10%</div>

            <p className={styles.blockText}>
              на материалы за счет работы напрямую с заводами. Являемся рекомендованными производителями работ
            </p>
          </div>
        </div>
      </div>
    </article>
  )
}
