import Section from '@/layouts/Section'
import './Advantages.scss'
import items from './data.json'
import ItemCard from '@/components/ItemCard'
import clsx from 'clsx'

export default () => {
  return (
    <Section
      className="advantages"
      title="Вот почему нашу кухню выбирают"
      titleId="advantages-title"
    >
      <ul className="advantages__list">
        {items.map(({ title, description, imgSrc }, index) => (
          <li className="advantages__item" key={index}>
            <ItemCard
              className={clsx(
                'advantages__card',
                index % 2 === 0
                  ? 'advantages__card--even'
                  : 'advantages__card--odd'
              )}
            >
              <div className="advantages__card-body">
                <img
                  className="advantages__card-image"
                  src={imgSrc}
                  alt=""
                  width={51}
                  height={51}
                  loading="lazy"
                />
                <h2 className="advantages__card-title">{title}</h2>
                <div className="advantages__card-description">
                  {description}
                </div>
              </div>
            </ItemCard>
          </li>
        ))}
      </ul>
    </Section>
  )
}
