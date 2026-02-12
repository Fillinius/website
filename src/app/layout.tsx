import '@ant-design/v5-patch-for-react-19'
import type { Metadata } from 'next'
import { AntdRegistry } from '@ant-design/nextjs-registry'
import { Roboto } from 'next/font/google'
import { Suspense } from 'react'
import { ConfigProvider, ConfigProviderProps, ThemeConfig } from 'antd'
import { COLORS } from '@/styles/colors'
import { Header, Footer } from '@/components'

import './globals.css'

type Locale = ConfigProviderProps['locale']

const config: ThemeConfig = {
  token: {
    fontFamily: "'Roboto', sans-serif",
    // colorPrimary: COLORS.primary_green_200,
    colorText: COLORS.black_100,
    // colorTextPlaceholder: COLORS.black_100,
    fontSizeHeading1: 40,
    fontSizeHeading2: 24,
    fontSizeHeading3: 18,
    fontSizeHeading4: 16,
    lineHeightHeading1: 1.1,
  },
  components: {
    // Menu: {
    //   colorBgContainer: COLORS.primary_green_200,
    //   horizontalItemHoverBg: COLORS.green_50,
    //   horizontalItemSelectedBg: COLORS.green_50,
    //   colorText: COLORS.white,
    //   horizontalItemHoverColor: COLORS.white,
    //   horizontalItemSelectedColor: COLORS.white,
    // },
    // Typography: {
    //   colorTextHeading: COLORS.black_100,
    // },
    Button: {
      textTextColor: COLORS.white,
      textTextActiveColor: COLORS.white,
      textTextHoverColor: COLORS.white,
    },
    Input: {
      // colorTextPlaceholder: COLORS.black_100
    },
    Select: {
      // colorText: COLORS.black_100,
      colorTextPlaceholder: COLORS.black_100,
    },
  },
}

const robotoSerif = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  variable: '--font-roboto-cyrillic',
  subsets: ['cyrillic'],
})

//TODO
export const metadata: Metadata = {
  title: {
    template: '%s | ГК СтройГрад',
    default: 'ГК СтройГрад -строительство ангаров под ключ',
  },
  description:
    'Профессиональное строительство ангаров любого типа. От проектирования, до сдачи готового здания. Гарантия  до 5 лет.',
  keywords: [
    'строительство ангаров',
    'ангар под ключ',
    'быстровозводимые ангары',
    'металлоконструкции ангаров, мягкие кровли, кровли ПВХ, мембранные кровли, промышленные полы, топинговые полы, полимерные полы, монтаж мк, монтаж металлоконструкций, монтаж профлиста, монтаж профнастила, монтаж сп, монтаж сэндвич панелей',
  ],
  openGraph: {
    title: 'ГК СтройГрад — строительство ангаров',
    description: 'Полный цикл строительства ангаров',
    // url: 'https://angarstroy.ru',
    siteName: 'ГК СтройГрад',
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
  icons: {
    icon: '/only_logo.svg',
    shortcut: '/only_logo.svg',
    apple: '/only_logo.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body className={`${robotoSerif.variable} `}>
        <AntdRegistry>
          <ConfigProvider theme={config}>
            <Header />
            <Suspense fallback={<div>Загрузка данных...</div>}>{children}</Suspense>
            <Footer />
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  )
}
