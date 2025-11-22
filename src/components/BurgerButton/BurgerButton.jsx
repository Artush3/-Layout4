import clsx from 'clsx'
import './BurgerButton.scss'

export default ({ className, title, extraAttribute }) => {
  return (
    <button
      {...extraAttribute}
      title={title}
      aria-label={title}
      type="button"
      className={clsx(className, 'burger-button')}
    >
      <span className="burger-button__line"></span>
      <span className="burger-button__line"></span>
      <span className="burger-button__line"></span>
    </button>
  )
}
