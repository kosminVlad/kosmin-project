import Styles from './Menu.module.css'
import Link from 'next/link'
import { Logo } from '../Logo/Logo'

// МЕНЮ БУДЕТ НА ТЕЛЕФОНЕ wIDTH 100% , ЛОГО ЧЕРЕЗ КОМПОНЕНТ

export const Menu = () => {
  return (
    <menu className={Styles['menu']}>
              <Logo/>
      <div className={Styles["menu-content"]}>
        <div className={Styles["list"]}>
          <ul className={Styles["menu__list"]}>
            <li className={Styles["menu__list-li"]}> <Link href="/" className={Styles["menu__list-url"]}> PROJECTS </Link> </li>
            <li className={Styles["menu__list-li"]}> <Link href="/" className={Styles["menu__list-url"]}> ARTISTS </Link></li>
            <li className={Styles["menu__list-li"]} > <Link href="/" className={Styles["menu__list-url"]}> MUSIC </Link></li>
            <li className={Styles["menu__list-li"]} ><Link href="/" className={Styles["menu__list-url"]}> CLIPS </Link> </li>
          </ul>
          <ul className={Styles["menu__urls"]}>
            <Link href="https://vk.com/kosminvlad">
              <li className={Styles["menu__urls-url"]}> <img src="./images/VK Logo White.png" alt="dsadsa" className={Styles["menu__urls-img"]}/> </li>
            </Link>
            <Link href="https://t.me/kosmin0">
              <li className={Styles["menu__urls-url"]} id="telegram"> <img src="./images/telegram-xxl.png" alt="dsadsa" className={Styles["menu__urls-img"]}/> </li>
            </Link>
            <li className={Styles["menu__urls-url"]} id="discord"> <img src="./images/discord-mark-white.png" alt="dsadsa" className={Styles["menu__urls-img"]}/> </li>
            <Link href="https://github.com/kosminVlad">
              <li className={Styles["menu__urls-url"]}> <img src="./images/github-mark-white.png " alt="dsadsa" className={Styles["menu__urls-img"]}/> </li>
            </Link>
          </ul>
        </div>
      </div>
    </menu>
  )
}