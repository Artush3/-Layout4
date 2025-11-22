import Logo from "@/components/Logo"
import "./Footer.scss"
import items from "./data.json"
import clsx from "clsx"
import Button from "@/components/Button"
import qrCode from "@/assets/images/footer/qr-code.svg"
import { Image } from "minista"

export default () => {
    const infoForButton = [
        {
            title: "Google Play",
        },
        {
            title: "App Store",
        },
    ]

    const infoForSoc1al = [
        {
            title: "Телеграм",
        },
        {
            title: "ВКонтакте",
        },
        ,
        {
            title: "Инстаграм",
        },
    ]

    return (
        <footer className="footer">
            <div className="footer__inner container">
                <div className="footer__body">
                    <div className="footer__basic">
                        <Logo className="footer__logo"/>
                        <address className="footer__address">103274 г.Москва проспект Мира 12с9</address>
                    </div>
                    <nav className="footer__navigation">
                        {items.map(({links}, index) => (
                            <ul className="footer__list" key={index}>
                                {links.map(({text, url}, index) => (
                                    <li className="footer__item" key={index}>
                                        <a className={clsx("footer__link", index === 0 && "footer__link-title")} href={url}>{text}</a>
                                    </li>
                                ))}
                            </ul>
                        ))}
                    </nav>
                    <div className="footer__installation">
                        <div className="footer__installation-body">
                            <h3 className="footer__installation-title">Устанавливайте наше приложение</h3>
                            <div className="footer__installation-description">
                                <p>Делайте заказ в несколько кликов и управляйте доставкой через телефон</p>
                            </div>
                            <div className="footer__installation-block-button">
                                {infoForButton.map(({title}, index) => (
                                    <Button href="/" className="footer__installation-button" mode="accent" key={index}>{title}</Button>
                                ))}
                            </div>
                        </div>
                        <Image className="footer__installation-image" src={qrCode}/>
                    </div>
                </div>
                <div className="footer__basement">
                    <div className="footer__info">
                        <a className="footer__info-number" href="tel:+79008535335">+7-900-853-53-35</a>
                        <a href="mailto:garmonyavkusa123@mail.ru">garmonyavkusa123@mail.ru</a>
                    </div>
                    <ul className="footer__soc1al-list">
                        {infoForSoc1al.map(({title}, index) => (
                            <li className="footer__soc1al-item" key={index}>
                                <a href="/" className="footer__soc1al-link">{title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    )
}