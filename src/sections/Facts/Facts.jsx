import Section from '@/layouts/Section'
import './Facts.scss'
import items from './data.json'
import ItemCard from '@/components/ItemCard'
import { Image } from 'minista'
import clsx from 'clsx'

export default () => {
  return (
    <Section
      className="facts"
      title="Интересные кулинарные факты"
      titleId="facts-title"
      mode="lightBg"
    >
      <ul className="facts__list">
        {items.map(({ imgSrc, title, description }, index) => (
          <li className="facts__item" key={index}>
            <ItemCard
              className={clsx(
                'facts__card',
                index % 2 === 0 ? 'facts__card--even' : 'facts__card--odd'
              )}
              titleButton="Узнать больше"
              lightBg
            >
              <div className="facts__card-body">
                <Image src={imgSrc} className="facts__card-image" />
                <h2 className="facts__card-title">{title}</h2>
                <div className="facts__card-description">
                  <p>{description}</p>
                </div>
              </div>
            </ItemCard>
          </li>
        ))}
      </ul>
    </Section>
  )
}
