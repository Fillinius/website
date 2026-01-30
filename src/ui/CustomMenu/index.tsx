'use client'

import { Menu } from 'antd'
import { usePathname } from 'next/navigation'
import { SelectInfo } from 'rc-menu/lib/interface'
import { FC, useState } from 'react'

import { MENU_ITEMS } from './constants'
import styles from './styles.module.scss'

export const CustomMenu: FC = () => {
  const path = usePathname()

  const [selectedItem, setSetelectedItem] = useState<string>(path ? path : '/home')

  const handleSelect = (info: SelectInfo) => {
    setSetelectedItem(info.selectedKeys[0])
  }
  return (
    <Menu
      mode="horizontal"
      selectedKeys={[path || '/home']}
      items={MENU_ITEMS}
      className={styles.menu}
      onSelect={handleSelect}
    />
  )
}
