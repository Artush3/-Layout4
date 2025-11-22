import './Button.scss'
import clsx from 'clsx'

export default ({ className, href, children, mode, type = 'button' }) => {
  let isLink = href !== undefined
  let Component = isLink ? 'a' : 'button'
  let attributes = isLink ? { href } : { type }

  return (
    <Component
      {...attributes}
      className={clsx(className, 'button', mode && `button--${mode}`)}
    >
      {children}
    </Component>
  )
}
