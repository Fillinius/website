'use client'

import { FC } from 'react'

import styles from './styles.module.scss'
import { FooterCompany } from './FooterCompany'

export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <FooterCompany />
    </footer>
  )
}
