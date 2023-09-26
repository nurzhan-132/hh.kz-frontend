'use client'

import axios from 'axios'
import { useEffect, useState } from 'react'
import Header from '../../components/header/index'
import Input from '@/components/input'
import AutoCompleteSelect from '@/components/AutoCompleteSelect'
import { END_POINT } from '@/config/end-point'

export default function CreateResume() {
    const [cities, setCities] = useState([])
    useEffect(() => {
        axios.get(`${END_POINT}/api/region/cities`).then(res => {
            setCities(res.data)
        })
    }, [])

    const onSelect = (data) => {
        console.log(data)
    }

    return (
        <main>
            <Header />
            <div className='container ptb7'>
                <h1>Ваше резюме</h1>

                <h3>Контактные данные</h3>
                <Input type="text" label="Имя" size="fieldset-md" />
                <Input type="text" label="Фамилия" size="fieldset-md" />
                <Input type="text" label="Мобильный телефон" size="fieldset-md" />
                <AutoCompleteSelect type="text" label="Город проживания" size="fieldset-md" items={cities} onSelect={onSelect}/>
            </div>
        </main>
    )
}
