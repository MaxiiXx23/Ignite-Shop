import type { AppProps } from 'next/app'
import Image from 'next/image'

import { globalStyles } from '@/styles/globalStyle'

import LogoSVG from '@/assets/Logo.svg'
import { Container, Header } from '@/styles/pages/app'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={LogoSVG} alt="" />
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}
