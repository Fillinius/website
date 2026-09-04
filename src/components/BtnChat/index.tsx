'use client'

import Image from 'next/image'
import btnChatIcon from '@/assets/svg/phone_consultation.svg'

import { FC, useState } from 'react'
import { Button, Modal } from 'antd'
import { PATHS } from '@/constants/routes'
import Link from 'next/link'
import callIcon from '@/assets/svg/call.svg'
import telegramIcon from '@/assets/svg/telegram.svg'
import mailIcon from '@/assets/svg/mail.svg'

import styles from './styles.module.scss'

export const BtnChat: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const showModal = () => {
    setIsModalOpen(true)
  }
  const handleClose = () => {
    setIsModalOpen(false)
  }
  return (
    <div className={styles.btnWrapper}>
      <Button onClick={showModal} className={styles.bntTG}>
        <Image className={styles.bntImage} src={btnChatIcon} alt="btnChat" />{' '}
      </Button>
      <Modal
        open={isModalOpen}
        onCancel={handleClose}
        footer={false} // убирает кнопки cancel and OK
        width={200} // ширина модального окна
        maskClosable={true} // закрытие по клику на оверлей (по умолчанию true)
        keyboard={true} // закрытие по ESC (по умолчанию true)
      >
        <div className={styles.modalWrapper}>
          <Link
            href="mailto:stroy-grad.152@mail.ru?subject=Запрос%20от%20клиента"
            className={styles.link}
            // onClick={trackEmailConstructionClick}
          >
            <Image className={styles.bntTG} src={mailIcon} alt="btnMail" />{' '}
          </Link>
          <Link href={PATHS.telegram} target="_blank" className={styles.link}>
            <Image className={styles.bntTG} src={telegramIcon} alt="btnTG" />{' '}
          </Link>{' '}
          <Link
            href="tel:+79108878118"
            // onClick={trackPhoneClick}
            className={styles.link}
          >
            <Image className={styles.bntTG} src={callIcon} alt="btnPhone" />{' '}
          </Link>
        </div>
      </Modal>
    </div>
  )
}
