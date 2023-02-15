import Image from "next/image"

import { useKeenSlider } from "keen-slider/react"

import 'keen-slider/keen-slider.min.css'

import { HomeContainer, Product } from "@/styles/pages/home"

import tshirt1 from "@/assets/t-shirt1.png"
import tshirt2 from "@/assets/t-shirt2.png"
import tshirt3 from "@/assets/t-shirt3.png"
import tshirt4 from "@/assets/t-shirt4.png"

export default function Home() {


  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48
    }
  })

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
        <Product className="keen-slider__slide">
          <Image src={tshirt1} alt="" width={520} height={480} />
          <footer>
            <strong>T-shirt One</strong>
            <span>R$ 79,90</span>
          </footer>
        </Product>
        <Product className="keen-slider__slide">
          <Image src={tshirt2} alt="" width={520} height={480} />
          <footer>
            <strong>T-shirt Two</strong>
            <span>R$ 59,90</span>
          </footer>
        </Product>
        <Product className="keen-slider__slide">
          <Image src={tshirt3} alt="" width={520} height={480} />
          <footer>
            <strong>T-shirt Three</strong>
            <span>R$ 89,90</span>
          </footer>
        </Product>
        <Product className="keen-slider__slide">
          <Image src={tshirt4} alt="" width={520} height={480} />
          <footer>
            <strong>T-shirt Four</strong>
            <span>R$ 99,90</span>
          </footer>
        </Product>
    </HomeContainer>
  )
}
