import './Logo.scss'
import clsx from 'clsx'

export default ({ className }) => {
  return (
    <a href="/" className={clsx(className, 'logo')}>
      <img
        alt=""
        width={198}
        height={27}
        className="logo__image"
        src="/images/logo.svg"
        loading="lazy"
      />
    </a>
  )
}
