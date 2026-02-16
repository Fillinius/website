import { FC } from 'react'

import { Metadata } from 'next'
import Title from 'antd/es/typography/Title'
import bgMontag from '@/assets/images/bgMontag.webp'

import styles from './styles.module.scss'

export const metadata: Metadata = {
  title: {
    template: '%s | ГК СтройГрад',
    default: 'СтройГрад - монтаж',
  },
  description: 'Монтаж металлоконструкций, профлиста, сэндвич панелей',
  keywords: [
    'монтаж',
    'металлоконструкции',
    'монтаж МК',
    'монтаж металлоконструкций',
    'монтаж профнастила',
    'монтаж профлиста',
    'монтаж сэндвич панелей',
    'монтаж ограждающих конструкций',
    'монтаж складов',
    'монтаж ангаров',
    'монтаж промышленных зданий',
  ],
  openGraph: {
    title: ' СтройГрад — монтаж металлоконструкций любой сложности, монтаж ограждающих конструкций',
    description: 'Монтаж ангаров, складов, под ключ людой сложности',
    // url: 'https://angarstroy.ru',
    siteName: ' СтройГрад',
    // images: ['/og-image.jpg'],
    locale: 'ru_RU',
    type: 'website',
  },
  // verification: {
  //   yandex: 'your-yandex-verification',
  // },

  robots: {
    index: true,
    follow: true,
  },
}

const MontagPage: FC = () => {
  return (
    <main className={styles.container}>
      <div className={styles.headWrapper} style={{ backgroundImage: `url(${bgMontag.src})` }}>
        <div className={styles.title}>
          <Title level={1}>ГК Строй-Град - монтаж любой сложности</Title>
        </div>
      </div>
      {/* <Krovli /> */}
      <div>
        <strong>Раздел находится в стадии разработки</strong>
      </div>
    </main>
  )
}
export default MontagPage
