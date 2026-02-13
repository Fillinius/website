import { FC } from 'react'

import Title from 'antd/es/typography/Title'

import styles from './styles.module.scss'

export const AboutCompany: FC = () => {
  return (
    <article className={styles.container}>
      <div className={styles.titleWrappre}>
        <Title level={2} className={styles.textTitle}>
          ООО «Строй-Град» - строительная компания, отличающаяся индивидуальным подходом в поиске готовых решений по
          устройству, строительству и ремонту.
        </Title>
        <p className={styles.text}>
          Стоимость работ зависит от вида услуги, а также материалов, которые использует заказчик.
        </p>
        <hr />
      </div>
      <br />
      <div className={styles.textWrapper}>
        <p> Наши специалисты нацелены на подбор оптимального решения Ваших задач.</p>
        <Title level={3}>У нас есть все условия для строительства сложных и ответственных объектов:</Title>
        <ul>
          <li>выполнение любых видов работ по устройству, восстановлению и ремонту</li>
          <li>комплексное проведение работ: от замеров — до сдачи объекта;</li>
          <li>собственный парк строительного оборудования;</li>
          <li>контроль качества укладки материалов — на всех этапах;</li>
          <li>профессиональная команда строителей;</li>
          <li>строгое соблюдение сроков выполнения работ;</li>
          <li>
            <strong>гарантия на выполненные работы.</strong>
          </li>
        </ul>
      </div>
    </article>
  )
}
