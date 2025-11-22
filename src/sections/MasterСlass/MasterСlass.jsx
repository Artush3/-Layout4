import { Image } from 'minista'
import './MasterСlass.scss'
import MasterСlassImage from '@/assets/images/master-class/master-class.png'
import items from './data.json'
import Field from '@/components/Field'
import Button from '@/components/Button'

export default () => {
  return (
    <section className="master-class" aria-labelledby="master-class-title">
      <div className="master-class__inner container">
        <Image className="master-class__image" src={MasterСlassImage} />
        <div className="master-class__body">
          <h2 className="master-class__title h1">
            Запишитесь на мастер-класс с шеф-поваром
          </h2>
          <div className="master-class__description">
            <p>
              Каждые выходные вы можете посетить встречу с шеф-поваром и
              научиться готовить блюда из нашего меню
            </p>
          </div>
          <form className="master-class__form">
            {items.map(({ id, label, placeholder, type }, index) => (
              <Field
                className="master-class__field"
                key={index}
                id={id}
                label={label}
                placeholder={placeholder}
                type={type}
                mode={index % 2 === 0 ? 'even' : 'odd'}
              />
            ))}
            <Button className="master-class__button" mode="accent">
              Записаться
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
