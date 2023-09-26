'use client'

import axios from 'axios'
import { useEffect, useState } from 'react'
import Header from '../../components/header/index'
import Input from '@/components/input'
import AutoCompleteSelect from '@/components/AutoCompleteSelect'
import SelectDate from '@/components/SelectDate'
import ModalAddExp from '@/components/ModalAddExp'
import { END_POINT } from '@/config/end-point'

export default function CreateResume() {
    const [cities, setCities] = useState([])
    const [countries, setCountries] = useState([])
    const [modalExpIsOpen, setModalExpIsOpen] = useState(false)

    useEffect(() => {
        axios.get(`${END_POINT}/api/region/cities`).then(res => {
            setCities(res.data)
        })

        axios.get(`${END_POINT}/api/region/countries`).then(res => {
            setCountries(res.data)
        })
    }, [])

    const onSelect = (data) => {
        console.log(data)
    }

    const closeModalExp = () => {
        setModalExpIsOpen(false)
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

                <h3>Основная информация</h3>
                <SelectDate size="fieldset-sm" label="Дата рождения"/>                
                <fieldset className="fieldset fieldset-sm">
                    <label>Пол</label>
                    <div className='radio-group'>
                        <div className="radio" >
                            <input type="radio" name='gender' id="g1"/>
                            <label for="g1">Мужской</label>
                        </div>
                        <div className="radio" >
                            <input type="radio" name='gender' id="g2"/>
                            <label for="g2" >Женский</label>
                        </div>
                    </div>                    
                </fieldset>
                <AutoCompleteSelect type="text" label="Гражданство" size="fieldset-md" items={countries} onSelect={onSelect}/>

                <h3>Специальность</h3>
                <Input type="text" label="Желаемая должность" size="fieldset-lg" />
                <fieldset className="fieldset fieldset-lg">
                    <label>Зарплата</label>
                    <div className='salary'>
                        <input type="text" className='input' />
                        <select name="" id="" className='input'>
                            <option value="">KZT</option>
                            <option value="">USD</option>
                            <option value="">RUB</option>
                        </select>
                        на руки
                    </div>                    
                </fieldset>

                <h3>Опыт работы</h3>
                {modalExpIsOpen && <ModalAddExp close={closeModalExp}/>}
                <fieldset className="fieldset fieldset-lg">
                    <label>Место работы</label>
                    <div className='exp'>
                        <div></div>
                        <button className='button button-primary-bordered' onClick={() => setModalExpIsOpen(true)}>Добавить место работы</button>
                    </div>                    
                </fieldset>
                

            </div>
        </main>
    )
}
