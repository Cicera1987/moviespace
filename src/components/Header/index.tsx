import React from "react"
import styles from "./header.module.css"
import Logo from "../../assets/logo.svg"

export function Header() {

    return (
        <header className={styles.header}>
            <div className={`${styles.nav} content content-flex content-flex-center content-flex-between`}>
                <img src={Logo} alt="Logo" />
                <nav className="content-flex content-flex-center gap-4">
                    <a href="#" className={styles.nav__link}>Filmes</a>
                    <a href="#" className={styles.nav__link}>Favoritos</a>
                    <a href="#" className="button-primary">Login</a>
                </nav>
            </div>
        </header>
    )
}

