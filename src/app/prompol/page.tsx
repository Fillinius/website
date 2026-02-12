import { FC } from 'react'

import Title from 'antd/es/typography/Title'
import { Metadata } from 'next'

import styles from './styles.module.scss'
import Link from 'next/link'
import { Floor } from '@/components/Prompol'

export const metadata: Metadata = {
  title: {
    template: '%s | ГК СтройГрад',
    default: 'СтройГрад - устройство промышленных полов',
  },
  description:
    'Надёжные промышленные полы под ключ — от проектирования до укладки. Гарантируем долговечность, прочность и соблюдение сроков',
  keywords: [
    'промышленные полы',
    'топинговые полы',
    'полимерные полы',
    'Бетонный пол с упрочненным верхним слоем (топпинг)',
    'Полиуретан-цементные полы',
    'Полиуретановые полы',
    'Эпоксидные наливные',
    'Полимерные антистатические покрытия',
  ],
  openGraph: {
    title: ' СтройГрад — устройство промышленных полов',
    description: 'Полный цикл устройства промышленных полов',
    // url: 'https://angarstroy.ru',
    siteName: ' СтройГрад',
    // images: ['/og-image.jpg'],
    locale: 'ru_RU',
    type: 'website',
  },
  // verification: {
  //   yandex: 'your-yandex-verification',
  // },
  alternates: {
    canonical: 'https://stroy-gradnn.ru/',
  }, // SEO-эффект: Переносит ссылочный вес с дублей на главную страницу, улучшая ранжирование.
  robots: {
    index: true,
    follow: true,
  },
}

const PrompolPage: FC = () => {
  return (
    <main className={styles.container}>
      {/* Контейнер для видео и текста */}
      <div className={styles.videoContainer}>
        {/* iframe с видео */}
        <iframe
          className={styles.videoBackground}
          title="Фоновое видео устройства промышленных полов"
          allowFullScreen
          loading="lazy"
          allow="autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write;"
          src="https://kinescope.io/embed/c4SW84w9PSjTBg156Ms1fX/?autoplay=true&muted=true&controls=false&loop=true&autopause=false"
        />

        {/* Текст поверх видео */}
        <div className={styles.titleWrapper}>
          <Title level={1} className={styles.title}>
            Устройство промышленных полов
          </Title>
          <p className={styles.titleText}>
            Надёжные промышленные полы под ключ — от проектирования до укладки. Гарантируем долговечность, прочность и
            соблюдение сроков.
          </p>
          <div className={styles.linkWrapper}>
            <Link href="https://stroy-gradnn.ru/" className={styles.link}>
              <p className={styles.linkText}>Более подробная информация на нашем специализированном сайте</p>
              <span>Перейти на профильный сайт</span>
            </Link>
          </div>
        </div>
      </div>
      <Floor />
    </main>
  )
}

export default PrompolPage
