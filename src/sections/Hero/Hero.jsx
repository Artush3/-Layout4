import Button from '@/components/Button'
import './Hero.scss'
import { Image } from 'minista'
import heroImage from '@/assets/images/hero/hero.png'

export default () => {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__inner container">
        <div className="hero__body">
          <h1 className="hero__title" id="hero-title">
            Доставка здорового питания по всей России
          </h1>
          <div className="hero__description">
            <p>
              Сбалансированные блюда правильного питания на любой вкус с
              доставкой на дом от 800₽ за день!
            </p>
          </div>
          <Button href="/" className="hero__menu-button" mode="accent">
            Перейти к меню
          </Button>
        </div>
        <Image className="hero__image" src={heroImage} />
      </div>
    </section>
  )
}
