import Section from '@/layouts/Section'
import './Questions.scss'
import items from './data.json'
import Accordion from '@/components/Accordion'

export default () => {
  return (
    <Section
      className="questions"
      title="Часто задаваемые вопросы"
      description="Получите ответ на любой интересующий вопрос"
      titleId="questions-title"
      isCenter
    >
      <ul className="questions__list">
        {items.map(({ title, description }, index) => (
          <li className="questions__item" key={index}>
            <Accordion
              name="faq"
              className="questions__accordion"
              title={title}
              description={description}
            />
          </li>
        ))}
      </ul>
    </Section>
  )
}
