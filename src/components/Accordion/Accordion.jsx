import clsx from 'clsx'
import './Accordion.scss'
import { Icon } from 'minista'

export default ({ className, title, description, name }) => {
  return (
    <details className={clsx('accordion', className)} name={name}>
      <summary className="accordion__header">
        <h3 className="accordion__title">{title}</h3>
        <Icon className="accordion__icon" iconId="arrow" />
      </summary>
      <div className="accordion__body">
        <p>{description}</p>
      </div>
    </details>
  )
}
