import Image from 'next/image'
import btnChatIcon from '@/assets/svg/phone_consultation.svg'

import styles from './styles.module.scss'
import Link from 'next/link'
import { PATHS } from '@/constants/routes'

export const BtnChat = () => {
  return (
    <div className={styles.btnWrapper}>
      <Link href={PATHS.telegram} target="_blank" className={styles.link}>
        <Image className={styles.bntTG} src={btnChatIcon} alt="btnChat" />
      </Link>
    </div>
  )
}
