import Logo from '@/components/Logo'
import './Header.scss'
import items from './data.json'
import Button from '@/components/Button'
import clsx from 'clsx'
import BurgerButton from '@/components/BurgerButton'

export default ({ url }) => {
  return (
    <header className="header" data-js-header="">
      <div className="header__inner container">
        <Logo className="header__logo" />
        <nav className="header__navigation" data-js-header-wrapper="">
          <ul className="header__list">
            {items.map(({ title, href }, index) => (
              <li className="header__item" key={index}>
                <a
                  className={clsx('header__link', url === href && 'is-active')}
                  href={href}
                >
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <Button
          href="/"
          className="header__button hidden-screen-lg"
          mode="accent"
        >
          Войти
        </Button>
        <BurgerButton
          extraAttribute={{ 'data-js-header-burger-button': '' }}
          className="header__burger-button visible-screen-lg"
          title="Открыть меню"
        />
      </div>
    </header>
  )
}
