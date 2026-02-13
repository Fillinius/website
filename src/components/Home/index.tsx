import { FC } from 'react'

import { AboutCompany } from './AboutCompany'
import { OurSucces } from './OurSucces'
import { Advantage } from '../../ui/Advantage'
import { advantageHome } from './constants'

import styles from './styles.module.scss'

export const Home: FC = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <AboutCompany />
        <OurSucces />
        <Advantage {...advantageHome} />
      </div>
    </section>
  )
}
