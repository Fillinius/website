'use client'

import { FC, useEffect, useRef, useState } from 'react'
import { classNames } from '@/utils/classNames'
import Link from 'next/link'
import Image from 'next/image'
import { PATHS } from '@/constants/routes'
import { Burger } from './Burger'
import logoIcon from '@/assets/svg/logo.svg'
import callIcon from '@/assets/svg/call.svg'
import location from '@/assets/svg/location.svg'

import styles from './styles.module.scss'
import { CustomMenu } from '@/ui/CustomMenu'

declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}

export const Header: FC = () => {
  const [headerSize, setHeaderSize] = useState<number>(1200)
  const [loading, setLoaing] = useState<boolean>(true)

  const headerRef = useRef<HTMLDivElement>(null)

  // Хук для отслеживания кликов
  const useTrackClick = (eventName: string) => {
    return () => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', eventName, {
          event_time: new Date().toISOString(),
          page_url: window.location.href,
        })
      }
    }
  }

  const trackPhoneClick = useTrackClick('phone_click')
  const trackEmailConstructionClick = useTrackClick('email_construction_click')
  const trackEmailIndustrialClick = useTrackClick('email_industrial_click')

  const resizeHeadler = () => {
    if (headerRef.current) {
      const { clientWidth } = headerRef.current
      setHeaderSize(clientWidth)
      if (clientWidth > 900 && clientWidth < 1200) {
        const overflow = window.getComputedStyle(document.documentElement).overflow
        if (overflow === 'hidden') {
          document.documentElement.style.overflow = 'auto'
        }
      }
    }
  }

  useEffect(() => {
    window.addEventListener('resize', resizeHeadler)
    resizeHeadler()
    setLoaing(false)
    return () => window.removeEventListener('resize', resizeHeadler)
  }, [])

  return (
    <header ref={headerRef} className={styles.header}>
      <div className={classNames(styles.headerWrapper, loading ? styles.mockHeader : '')}>
        <div className={styles.headerLogo}>
          <Link href={PATHS.home}>
            <Image src={logoIcon} alt="ГК СтройГрад" />
          </Link>
        </div>
        <div className={styles.headerDescription}>
          <div className={styles.descriptionWrap}>
            <div className={styles.headerPhone}>
              <div className={styles.headerDescription_phone}>
                <Image src={callIcon} alt="call" />
                <Link href="tel:+79108878118" onClick={trackPhoneClick} className={styles.phoneText}>
                  +7 910 887 81 18
                </Link>
              </div>
              <div className={styles.headerDescription_location}>
                <Image src={location} alt="location" />
                <div className={styles.locationWrap}>
                  <p className={styles.text}>г. Нижний Новгород, ул. Бригадная, 14</p>
                  <p className={styles.text}>Режим работы: Пн-Пт: 8.00 - 17.00</p>
                </div>
              </div>
            </div>
            <div className={styles.headerAddress}>
              <div className={styles.headerDescription_mail}>
                <Link
                  href="mailto:stroy-grad.152@mail.ru?subject=Запрос%20от%20клиента"
                  onClick={trackEmailConstructionClick}
                >
                  строительство под "ключ": <span>stroy-grad.152@mail.ru </span>
                </Link>
                <Link
                  href="mailto:stroy-grad.52@mail.ru?subject=Запрос%20от%20клиента"
                  onClick={trackEmailIndustrialClick}
                  className={styles.small}
                >
                  промышленные полы:
                  <span> stroy-grad.52@mail.ru</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {!loading && (headerSize <= 900 ? <Burger /> : <CustomMenu />)}
    </header>
  )
}
