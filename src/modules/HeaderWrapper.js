import MatchMedia from '@/constants/MatchMedia'

class HeaderWrapper {
  selectors = {
    root: '[data-js-header]',
    wrapper: '[data-js-header-wrapper]',
    burgerButton: '[data-js-header-burger-button]',
  }

  styleClasses = {
    isLock: 'is-lock',
    isActive: 'is-active',
  }

  attributes = {
    title: 'title',
    ariaLabel: 'aria-label',
  }

  constructor() {
    this.rootElement = document.querySelector(this.selectors.root)
    this.wrapperElement = this.rootElement.querySelector(this.selectors.wrapper)
    this.burgerButtonElement = this.rootElement.querySelector(
      this.selectors.burgerButton
    )
    this.mediaQuery = MatchMedia.tablet
    this.entryPoint()
  }

  entryPoint = () => {
    this.burgerButtonElement.addEventListener('click', this.burgerButtonClick)
    this.mediaQuery.addEventListener('change', () =>
      this.handleTabletChange(this.mediaQuery)
    )
  }

  getStatusActive = () => {
    return this.wrapperElement.classList.contains(this.styleClasses.isActive)
  }

  burgerButtonClick = () => {
    let isActive = this.getStatusActive()

    this.wrapperElement.classList.toggle(this.styleClasses.isActive, !isActive)
    this.burgerButtonElement.classList.toggle(
      this.styleClasses.isActive,
      !isActive
    )
    document.body.classList.toggle(this.styleClasses.isLock, !isActive)

    this.setAttributeBurgerButton(isActive)
  }

  setAttributeBurgerButton = (boolean) => {
    let attribute = !boolean ? 'Закрыть меню' : 'Открыть меню'

    this.burgerButtonElement.setAttribute(this.attributes.title, attribute)
    this.burgerButtonElement.setAttribute(this.attributes.ariaLabel, attribute)
  }

  handleTabletChange = (e) => {
    if (e.matches) {
      document.body.classList.remove(this.styleClasses.isLock)
    } else {
      if (this.getStatusActive()) {
        document.body.classList.add(this.styleClasses.isLock)
      }
    }
  }
}

export default HeaderWrapper
