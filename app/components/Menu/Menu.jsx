import Styles from './Menu.module.css'
import Link from 'next/link'
import { Logo } from '../Logo/Logo'

// МЕНЮ БУДЕТ НА ТЕЛЕФОНЕ wIDTH 100% , ЛОГО ЧЕРЕЗ КОМПОНЕНТ

export const Menu = () => {
  return (
    <menu className={Styles['menu']}>
      <div className={Styles["menu-content"]}>
        <Logo/>
        <div className={Styles["list"]}>
          <ul className={Styles["menu__list"]}>
            <li className={Styles["menu__list-li"]}> <Link href="/" className={Styles["menu__list-url"]}> PROJECTS </Link> </li>
            <li className={Styles["menu__list-li"]}> <Link href="/" className={Styles["menu__list-url"]}> ARTISTS </Link></li>
            <li className={Styles["menu__list-li"]} > <Link href="/" className={Styles["menu__list-url"]}> MUSIC </Link></li>
            <li className={Styles["menu__list-li"]} ><Link href="/" className={Styles["menu__list-url"]}> CLIPS </Link> </li>
          </ul>
          <ul className={Styles["menu__urls"]}>
            <a href="https://vk.com/kosminvlad">
              <li className={Styles["menu__urls-url"]}></li>
            </a>
            <a href="https://t.me/kosmin0">
              <li className={Styles["menu__urls-url"]} id="telegram"></li>
            </a>
            <li className={Styles["menu__urls-url"]} id="discord"></li>
            <a href="https://github.com/kosminVlad">
              <li className={Styles["menu__urls-url"]}></li>
            </a>
          </ul>
        </div>
      </div>
    </menu>
  )
}