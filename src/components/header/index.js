'use client'

import Link from "next/link";

export default function Header() {
    return(
        <header className="header">
            <div className="container">
                <div className="header-inner">
                    <div>
                        <Link href="/">
                            <img src="images/hh-logo.svg" alt="HH.KZ" />    
                        </Link>
                        <Link href="/resumes">Мои резюме</Link>
                        <a href="">Помощь</a>
                    </div>
                    <div>
                        <button className="header-search">
                            <img src="images/icon-search.svg" alt="" />
                            Поиск
                        </button>
                        <Link href="/create-resume" className="header-button  header-button--green">
                            Создать резюме
                        </Link>
                        <Link href="/login" className="header-button">
                            Войти
                        </Link>
                    </div>
                </div>
            </div>
        </header>

    );
}