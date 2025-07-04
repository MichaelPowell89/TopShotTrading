import Link from 'next/link'
import Image from 'next/image'

import css from './main-header.module.css'
import logoImg from '@/assets/logo.png'
import NavLink from './nav-link'
import Logo from '@/assets/logo'

export default function MainHeader() {

    return (
        <>
        <header className={css.header}>
        <Link href="/" className={css.logo}>
            <Logo 
                height="100px"
                width='100px'
            />
            Top Shot Trading
        </Link>

        <nav className={css.nav}>
            <ul>
                <li>
                    <NavLink href='/about'>About</NavLink>
                </li>
                <li>
                    <NavLink href='/catalogue'>Catalogue</NavLink>
                </li>
                <li>
                    <NavLink href='/licence'>Licensing Info</NavLink>
                </li>
                <li>
                    <NavLink href='/contact'>Contact</NavLink>
                </li>
            </ul>
        </nav>
        </header>
        </>
    )
}