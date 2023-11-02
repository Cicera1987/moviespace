import "./home.module.css"
import React from "react"
import { ImDb } from "../../components/Icons/imdb"
import { Estrela } from "../../components/Icons/estrela"
import styles from "./home.module.css"


export function Home() {

    return (
        <main className={` ${styles.main} content`}>
            <h1 className={styles.title}>Filmes (100) </h1>

            <section className="">

                <div className={`${styles.movie} content-flex gap-6 `}>
                    <img
                        className={styles.movie_image}
                        src="https://th.bing.com/th/id/OIP.7KnGoDthiGYnlM_nPSPTlAHaLH?pid=ImgDet&rs=1"
                        alt="Imagem do Filme"
                    />

                    <div className={`${styles.move_info} content-flex gap-3 content-flex-center-column `}>
                        <h2>RRR</h2>
                        <div className="content-flex gap-1 align-center">
                            <div className={styles.movie_imdbImage}><ImDb/></div>
                            <p>9.9</p>
                            <Estrela />
                        </div>
                        <p className={styles.movie_description}>
                            It centers around two real-life Indian revolutionaries,
                            Alluri Sitarama Raju (Charan) and Komaram Bheem (Rama Rao),
                            their fictional friendship and their fight against the British Raj.
                            It centers around two real-life Indian revolutionaries,
                            Alluri Sitarama Raju (Charan) and Komaram Bheem (Rama Rao),
                            their fictional friendship and their fight against the British Raj.
                        </p>
                        <div className="content-flex gap-3">
                            <button className="button-secondary">ver trailer</button>
                            <button className="button-outline">Adicionar aos favoritos</button>
                        </div>
                    </div>
                </div>
                <div className={`${styles.movie} content-flex gap-6 `}>
                    <img
                        className={styles.movie_image}
                        src="https://th.bing.com/th/id/OIP.7KnGoDthiGYnlM_nPSPTlAHaLH?pid=ImgDet&rs=1"
                        alt="Imagem do Filme"
                    />

                    <div className={`${styles.move_info} content-flex gap-3 content-flex-center-column `}>
                        <h2>RRR</h2>
                        <div className="content-flex gap-1 align-center">
                            <div className={styles.movie_imdbImage}><ImDb /></div>
                            <p>9.9</p>
                            <Estrela />
                        </div>
                        <p className={styles.movie_description}>
                            It centers around two real-life Indian revolutionaries,
                            Alluri Sitarama Raju (Charan) and Komaram Bheem (Rama Rao),
                            their fictional friendship and their fight against the British Raj.
                            It centers around two real-life Indian revolutionaries,
                            Alluri Sitarama Raju (Charan) and Komaram Bheem (Rama Rao),
                            their fictional friendship and their fight against the British Raj.
                        </p>
                        <div className="content-flex gap-3">
                            <button className="button-secondary">ver trailer</button>
                            <button className="button-outline">Adicionar aos favoritos</button>
                        </div>
                    </div>
                </div>


            </section>
        </main>
    )
}