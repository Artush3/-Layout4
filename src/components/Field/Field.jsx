import clsx from 'clsx'
import './Field.scss'

export default ({
  className,
  id,
  label,
  mode,
  isInput,
  placeholder,
  type = 'text',
}) => {
  let Component = isInput ? 'textarea' : 'input'

  return (
    <div className={clsx('field', className)}>
      <label htmlFor={id} className="field__label visually-hidden">
        {label}
      </label>
      <Component
        placeholder={placeholder}
        type={type}
        id={id}
        className={clsx('field__input', `field__input--${mode}`)}
      />
    </div>
  )
}
