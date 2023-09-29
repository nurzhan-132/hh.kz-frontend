'use client'

import { useDispatch, useSelector } from "react-redux"
import { logOut } from "@/app/store/slices/authSlice";
import Link from "next/link";

export default function Header() {
    const dispatch = useDispatch();
    const isAuth = useSelector(state => state.auth.isAuth)
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
                        {!isAuth && 
                        <Link href="/login" className="header-button">
                            Войти
                        </Link>}
                        {isAuth && 
                        <a className="header-button" onClick={() => dispatch(logOut())}>
                            Выйти
                        </a>
                        }
                    </div>
                </div>
            </div>
        </header>

    );
}