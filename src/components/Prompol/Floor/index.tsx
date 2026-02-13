import { FC } from 'react'

import styles from './styles.module.scss'
import Title from 'antd/es/typography/Title'
import { TypeFloor } from './TypeFloor'

export const Floor: FC = () => {
  return (
    <section className={styles.floorWrapper}>
      <Title level={2} className={styles.floorTitle}>
        Что такое бетонные полы и где их применяют?
      </Title>
      <p className={styles.floorText}>
        Бетонные полы – это универсальный тип напольного покрытия, созданный на основе цемента, песка и щебня.
        <br />
        Главная задача такого покрытия – создать прочное и ровное бетонное основание. Сфера их применения невероятно
        широка: от жилых помещений до складских помещений и производственных цехов. Мы используем их везде, где
        требуется надежность и долговечность. Это вариант, проверенный временем.
      </p>
      <TypeFloor />
    </section>
  )
}
