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

export const Header: FC = () => {
  const [headerSize, setHeaderSize] = useState<number>(1200)
  const [loading, setLoaing] = useState<boolean>(true)

  const headerRef = useRef<HTMLDivElement>(null)

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
          <div className={styles.headerDescription_phone}>
            <Image src={callIcon} alt="call" />
            <p className={styles.phoneText}>+7 910 887 81 18</p>
          </div>
          <div className={styles.headerDescription_mail}>
            <p>
              строительство под "ключ": <span>stroy-grad.152@mail.ru </span>
            </p>
            <p className={styles.small}>
              промышленные полы:
              <span> stroy-grad.52@mail.ru</span>
            </p>
          </div>
          <div className={styles.headerDescription_location}>
            <Image src={location} alt="location" />
            <div className={styles.locationWrap}>
              <p className={styles.text}>г. Нижний Новгород, ул. Бригадная, 14</p>
              <p className={styles.text}>Режим работы: Пн-Пт: 8.00 - 17.00</p>
            </div>
          </div>
        </div>
      </div>
      {!loading && (headerSize <= 900 ? <Burger /> : <CustomMenu />)}
    </header>
  )
}
