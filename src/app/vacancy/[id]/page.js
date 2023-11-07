"use client"

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVacancyById } from '@/app/store/slices/vacancySlice';
import Header from '@/components/header';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { dateFormatterMonthYear, formatBirthdateAndAge, formatPhoneNumber, formatNumber, calculateYearMonthDifference, getFullYear } from '@/utils/formatter'
import PreLoader from '@/components/PreLoader';

export default function VacancyPage() {
    const dispatch = useDispatch()
    const { id } = useParams()
    const vacancy = useSelector((state) => state.vacancy.vacancy)
    const currentUser = useSelector((state) => state.auth.currentUser)

    const didMount = () => {
        dispatch(getVacancyById(id))
    }
    useEffect(didMount, [])

    const hasVacancyData = vacancy && Object.keys(vacancy).length > 0;
    return (
        <main>
            <Header />
            {hasVacancyData &&
                <div className='container resume-page'>
                     {currentUser && currentUser.id === vacancy.userId && <div className='flex flex-ai-c flex-jc-sb ptb-7'>                    
                        <h1>{vacancy.name}</h1>
                        <Link className='button button-secondary-bordered' href={`/edit-vacancy/${vacancy.id}`}>Редактировать</Link>
                    </div>}
                    <div>
                        <p>от {formatNumber(vacancy.salary_from)} до {formatNumber(vacancy.salary_to)} {vacancy.salary_type}</p>
                        {vacancy.experience && <p>Требуемый опыт работы: {vacancy.experience.duration}</p>}
                        {vacancy.employmentType && <p>Тип занятости: {vacancy.employmentType.name}</p>}
                        {currentUser && currentUser.id !== vacancy.userId && <button className='button button-primary'>Откликнуться</button>}
                    </div>

                    <h3>{vacancy.company.name}</h3>
                    <p className='secondary'>{vacancy.company.description}</p>

                    <div dangerouslySetInnerHTML={{ __html: vacancy.description }}></div>

                    <h3>Адрес</h3>
                    <p className='secondary'>{vacancy.address}</p>

                    <h3>Ключевые навыки</h3>
                    <div className='skills'>
                        {(vacancy.skills && vacancy.skills.length > 0) &&
                            vacancy.skills.split(',').map((item, index) => (
                                <p key={index} className="skills-tag">{item}</p>
                            ))
                        }
                    </div>

                </div>}

            {!hasVacancyData && <PreLoader />}
        </main>
    )
}
