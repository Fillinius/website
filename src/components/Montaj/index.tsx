import { FC } from 'react'

import styles from './styles.module.scss'
import Title from 'antd/es/typography/Title'
import { Advantage } from '@/ui/Advantage'

export const Motaj: FC = () => {
  return (
    <div className={styles.krovliWrapper}>
      <section className={styles.krovliHeaderWrapper}>
        <Title level={2} className={styles.title}>
          Что такое мембранные кровли и где их применяют?
        </Title>
        <p className={styles.text}>
          ПВХ-мембрана — это современный материал для устройства плоских кровель, который сочетает долговечность,
          простоту монтажа и высокую герметичность. Мембрана выпускается в больших рулонах, быстро укладывается и
          позволяет выполнять кровельные работы без применения открытого огня, что делает технологию более безопасной.
          Чаще всего используются для покрытия плоских крыш промышленных предприятий, складов и производственных цехов.
          <br />
          <br />
          Важное преимущество такого покрытия — скорость монтажа. В отличие от традиционных рулонных материалов,
          ПВХ-мембрана сваривается горячим воздухом, а не наплавляется горелкой. Это снижает трудозатраты и позволяет
          вести работы круглогодично, даже при отрицательных температурах.
        </p>
      </section>
      <section className={styles.chooseKrovliWrapper}>
        <Title level={3} className={styles.title}>
          Монтаж мембранной кровли
        </Title>
        <p className={styles.textRed}> Почему нам доверяют?</p>
        {/* <Advantage {...advantageKrovli} /> */}
      </section>
    </div>
  )
}
