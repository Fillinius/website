'use client'

import { Modal } from 'antd'
import { FC, useEffect, useState } from 'react'
import Link from 'next/link'
import { PATHS } from '@/constants/routes'

import styles from './styles.module.scss'

export const CookieConsent: FC = () => {
  const [isModalCookieOpen, setIsModalCookieOpen] = useState<boolean>(false)

  useEffect(() => {
    const hasConsent = localStorage.getItem('cookie-consent')
    if (!hasConsent) {
      setIsModalCookieOpen(true)
    }
  }, [])

  const handleAcceptCookies = () => {
    localStorage.setItem('cookie-consent', 'true')
    setIsModalCookieOpen(false)
  }

  const handleDeclineCookies = () => {
    localStorage.setItem('cookie-consent', 'false')
    setIsModalCookieOpen(false)
  }

  return (
    <Modal
      open={isModalCookieOpen}
      onOk={handleAcceptCookies}
      onCancel={handleDeclineCookies}
      closable={false}
      centered
      width={480}
    >
      <p>
        Мы используем файлы cookie для улучшения работы сайта и анализа трафика. Продолжая пользоваться сайтом, вы
        соглашаетесь с обработкой cookie.
        <br />
        <Link href={PATHS.policy} className={styles.link}>
          Узнать больше
        </Link>
      </p>
    </Modal>
  )
}
