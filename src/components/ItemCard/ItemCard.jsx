import clsx from 'clsx'
import './ItemCard.scss'
import Button from '../Button'

export default ({ className, children, titleButton, lightBg }) => {
  return (
    <article
      className={clsx(
        'item-card',
        className,
        titleButton && 'item-card--has-button',
        lightBg && 'item-card--light-bg'
      )}
    >
      <div className="item-card__body">{children}</div>
      {titleButton && (
        <Button className="item-card__button" href="/">
          {titleButton}
        </Button>
      )}
    </article>
  )
}
