import React from "react"
import { Logo } from "../../assets/logo"
import styles from "./header.module.css"


export function Header() {

    return (
        <header className={styles.header}>
            <div className={`${styles.nav} content content-flex content-flex-center content-flex-between`}>
               <Logo/>
                <nav className="content-flex content-flex-center gap-4">
                    <a href="#" className={styles.nav__link}>Filmes</a>
                    <a href="#" className={styles.nav__link}>Favoritos</a>
                    <a href="#" className="button-primary">Login</a>
                </nav>
            </div>
        </header>
    )
}

