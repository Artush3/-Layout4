import Section from '@/layouts/Section'
import './Terms.scss'
import items from './data.json'
import ItemCard from '@/components/ItemCard'
import clsx from 'clsx'

export default () => {
  return (
    <Section
      className="terms"
      title="Комфортные условия - в первую очередь"
      description={
        <p>
          Заботимся о вашем здоровье,
          <br /> создавая идеальные условия для питания"
        </p>
      }
      titleId="terms-title"
      isCenter
    >
      <ul className="terms__list">
        {items.map(({ title, description, imgSrc, titleButton }, index) => (
          <li className="terms__item" key={index}>
            <ItemCard
              titleButton={titleButton}
              className={clsx(
                'terms__card',
                index % 2 === 0 ? 'terms__card--even' : 'terms__card--odd'
              )}
              key={index}
            >
              <div className="terms__card-wrapper">
                <div className="terms__card-body">
                  <h2 className="terms__card-title h1">{title}</h2>
                  <div className="terms__card-description">
                    <p>{description}</p>
                  </div>
                </div>
                <img
                  className="terms__card-image"
                  src={imgSrc}
                  alt=""
                  width={55}
                  height={55}
                  loading="lazy"
                />
              </div>
            </ItemCard>
          </li>
        ))}
      </ul>
    </Section>
  )
}
