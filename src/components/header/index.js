'use client'

export default function Header() {
    return(
        <header className="header">
            <div className="container">
                <div className="header-inner">
                    <div>
                        <img src="images/hh-logo.svg" alt="HH.KZ" />
                        <a href="">Работодателям</a>
                        <a href="">Помощь</a>
                    </div>
                    <div>
                        <button className="header-search">
                            <img src="images/icon-search.svg" alt="" />
                            Поиск
                        </button>
                        <button className="header-button  header-button--green">
                            Создать резюме
                        </button>
                        <button className="header-button">
                            Войти
                        </button>
                    </div>
                </div>
            </div>
        </header>

    );
}