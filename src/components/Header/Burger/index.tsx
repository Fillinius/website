'use client'

import { usePathname } from 'next/navigation'
import { FC, useEffect, useState } from 'react'
import { HEADER_LINK, HOME_LINK_INDEX } from './constants'
import { classNames } from '@/utils/classNames'
import { Drawer } from 'antd'
import Link from 'next/link'
import Title from 'antd/es/typography/Title'

import styles from './styles.module.scss'

export const Burger: FC = () => {
  const path = usePathname()

  const [open, setOpen] = useState<boolean | undefined>(undefined)

  const handleOpen = () => {
    setOpen(true)
    document.documentElement.style.overflow = 'hidden'
  }
  const handleClose = () => {
    setOpen(false)
    document.documentElement.style.overflow = 'auto'
  }

  const handleShowModal = () => {
    if (open) {
      handleClose()
    } else {
      handleOpen()
    }
  }

  const [isActiveLinks, setIsActiveLinks] = useState<boolean[]>(Array(HEADER_LINK.length).fill(false))

  const handleClickLink = (id: number) => {
    const currentActiveLinks = isActiveLinks.map((_, index) => {
      if (index === id) {
        return true
      } else {
        return false
      }
    })
    setIsActiveLinks([...currentActiveLinks])
    handleClose()
  }

  useEffect(() => {
    const linkId = HEADER_LINK.find((link) => path.includes(link.path))?.id
    handleClickLink(linkId ? linkId - 1 : HOME_LINK_INDEX)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={styles.container}>
      <div
        className={classNames(styles.burgerWrapper, open ? styles.activeBurgerWrapper : '')}
        onClick={handleShowModal}
      >
        <div
          className={classNames(
            styles.burger,
            open ? styles.activeBurger : '',
            !open && open !== undefined ? styles.closeBurger : ''
          )}
        ></div>
      </div>
      <Drawer open={open} className={styles.burgerModalWrapper} closeIcon={false}>
        <div className={styles.container}>
          <ul className={styles.linkWrapper}>
            {HEADER_LINK.map(({ id, path, title }) => {
              return (
                <li
                  key={id}
                  className={classNames(styles.link, isActiveLinks[id - 1] ? styles.activeLink : '')}
                  onClick={() => handleClickLink(id - 1)}
                >
                  <Link href={path}>
                    <Title level={2} className={styles.linkText}>
                      {title}
                    </Title>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </Drawer>
    </div>
  )
}
