import { PATHS } from '@/constants/routes'
import { ItemType, MenuItemType } from 'antd/es/menu/interface'
import Link from 'next/link'

export const MENU_ITEMS: ItemType<MenuItemType>[] = [
  {
    key: PATHS.home,
    label: <Link href={PATHS.home}>Главная</Link>,
  },
  {
    key: PATHS.montaj,
    label: <Link href={PATHS.montaj}>Монтаж</Link>,
  },
  {
    key: PATHS.krovli,
    label: <Link href={PATHS.krovli}>Кровля</Link>,
  },
  {
    key: PATHS.prompol,
    label: <Link href={PATHS.prompol}>Полы</Link>,
  },
  {
    key: PATHS.portfolio,
    label: <Link href={PATHS.portfolio}>Портфолио</Link>,
  },
]
