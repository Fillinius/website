'use client'

import { Button, Modal } from 'antd'
import { FC, useEffect, useState } from 'react'
import YandexMetrica from '../YandexMetrika'

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
      // styles={{
      //   body: { padding: '5px 5px' },
      // }}
    >
      <p>
        Мы используем файлы cookie для улучшения работы сайта и анализа трафика. Продолжая пользоваться сайтом, вы
        соглашаетесь с обработкой cookie.
      </p>
    </Modal>
  )
}
