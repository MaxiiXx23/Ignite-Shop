import type { AppProps } from 'next/app'

import { globalStyles } from '@/styles/globalStyle'

import { ShoppingCartProvider } from '@/contexts/shoppingCartContext'

import { DefaultLayout } from '@/layouts/DefaultLayout'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ShoppingCartProvider>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </ShoppingCartProvider>
  )
}
