import { FC } from 'react'
import Title from 'antd/es/typography/Title'
import { Metadata } from 'next'
import bgImageKrovli from '@/assets/images/bgKrovli.jpeg'

import styles from './styles.module.scss'
import { Krovli } from '@/components/Krovli'

export const metadata: Metadata = {
  title: {
    template: '%s | ГК СтройГрад',
    default: 'СтройГрад - устройство мембранной кровли',
  },
  description:
    'Надёжное кровельное покрытие на долгие годы. Гарантируем долговечность, герметичность и соблюдение сроков',
  keywords: [
    'кровли',
    'мембранные кровли',
    'кровли ПВХ',
    'монтаж ПВХ мембраны',
    'мембранные кровли',
    'устройстро плоских кровель',
    'гидроизоляция кровли',
    'кровельный пирог',
  ],
  openGraph: {
    title: ' СтройГрад — мембранные кровли, плоские кровли',
    description: 'Устройство плоских мембранных кровель под ключ',
    // url: 'https://angarstroy.ru',
    siteName: ' СтройГрад',
    // images: ['/og-image.jpg'],
    locale: 'ru_RU',
    type: 'website',
  },
  // verification: {
  //   yandex: 'your-yandex-verification',
  // },
  // alternates: {
  //   canonical: 'https://angarstroy.ru',
  // },
  robots: {
    index: true,
    follow: true,
  },
}

const KrovliPage: FC = () => {
  return (
    <main className={styles.container}>
      <div className={styles.headWrapper} style={{ backgroundImage: `url(${bgImageKrovli.src})` }}>
        <div className={styles.title}>
          <Title level={1}>ГК Строй-Град - устройство плоских, мембранных кровель</Title>
        </div>
      </div>
      <Krovli />
    </main>
  )
}

export default KrovliPage
