import clsx from 'clsx'
import './Section.scss'

export default ({
  className,
  title,
  description,
  children,
  titleId,
  isCenter,
  mode,
}) => {
  return (
    <section
      className={clsx('section', className, mode && `section--${mode}`)}
      aria-labelledby={titleId}
    >
      <header
        className={clsx(
          'section__header container',
          isCenter && 'section__header--center'
        )}
      >
        <h2 className="section__title h1" id={titleId}>
          {title}
        </h2>
        {description && (
          <div className="section__description">{description}</div>
        )}
      </header>
      <div className={clsx('section__body container')}>{children}</div>
    </section>
  )
}
