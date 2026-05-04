import '@ant-design/v5-patch-for-react-19'
import type { Metadata } from 'next'
import Script from 'next/script'
import { Suspense } from 'react'
import { ConfigProvider, ConfigProviderProps, ThemeConfig } from 'antd'
import { AntdRegistry } from '@ant-design/nextjs-registry'
import { COLORS } from '@/styles/colors'
import { Header, Footer, BtnChat } from '@/components'
import YandexMetrica from '@/components/YandexMetrika/index'

import './globals.css'

type Locale = ConfigProviderProps['locale']

const config: ThemeConfig = {
  token: {
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
    colorText: COLORS.black_100,
    fontSizeHeading1: 40,
    fontSizeHeading2: 24,
    fontSizeHeading3: 18,
    fontSizeHeading4: 16,
    lineHeightHeading1: 1.1,
  },
  components: {
    Button: {
      textTextColor: COLORS.white,
      textTextActiveColor: COLORS.white,
      textTextHoverColor: COLORS.white,
    },
    Input: {},
    Select: {
      colorTextPlaceholder: COLORS.black_100,
    },
  },
}

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
    'быстровозводимый склад',
    'металлоконструкции ангаров',
    'мягкие кровли',
    'кровли ПВХ',
    'мембранные кровли',
    'промышленные полы',
    'топинговые полы',
    'полимерные полы',
    'монтаж мк, монтаж металлоконструкций',
    'монтаж профлиста',
    'монтаж профнастила',
    'монтаж сп',
    'монтаж сэндвич панелей',
  ],
  openGraph: {
    title: 'ГК СтройГрад — строительство ангаров',
    description: 'Полный цикл строительства ангаров',
    url: 'https://gc-stroy-grad.ru',
    siteName: 'ГК СтройГрад',
    images: ['https://gc-stroy-grad.ru/logo.jpg'],
    locale: 'ru_RU',
    type: 'website',
  },
  alternates: {
    canonical: 'https://gc-stroy-grad.ru',
  },
  verification: {
    yandex: 'e36d23bc2d94d25c',
    google: '0BXBBfZWJwicpcEDi5LeWKqtyOZAprdphsYcRIIQwRM',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
  icons: {
    icon: '/only_logo.svg',
    shortcut: '/only_logo.svg',
    apple: '/only_logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body>
        <Script id="metrika-counter" strategy="afterInteractive">
          {`(function(m,e,t,r,i,k,a){
        m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
    })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=108970047', 'ym');

    ym(108970047, 'init', {
    ssr:true, 
    webvisor:true, 
    clickmap:true, 
        referrer: document.referrer, 
    url: location.href, 
    accurateTrackBounce:true, 
    trackLinks:true});`}
        </Script>
        <Suspense fallback={<></>}>
          <YandexMetrica />
        </Suspense>
        <AntdRegistry>
          <ConfigProvider theme={config}>
            <Header />
            <Suspense fallback={<div>Загрузка данных...</div>}>{children}</Suspense>
            <BtnChat />
            <Footer />
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  )
}
