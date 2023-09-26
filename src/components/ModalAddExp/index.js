'use strict'

export default function ModalAddExp({close}) {    
    const onChageMonth = () => {}
    const onChangeYear = () => {}

    const onChageMonthEnd = () => {}
    const onChangeYearEnd = () => {}

    return(
        <div className="modal">
            <div className="modal-backdrop" onClick={close}></div>
            <div className="modal-inner">
                <h2>Опыт работы</h2>
                
                <h4>Начало работы</h4>
                <div className="selectdate selectdate-noday">
                    <select onChange={onChageMonth} placeholder="Месяц" className="input">
                        <option value="">Январь</option>
                        <option value="">Февраль</option>
                        <option value="">Март</option>
                        <option value="">Апрель</option>
                        <option value="">Май</option>
                        <option value="">Июнь</option>
                        <option value="">Июль</option>
                        <option value="">Август</option>
                        <option value="">Сентябрь</option>
                        <option value="">Октябрь</option>
                        <option value="">Ноябрь</option>
                        <option value="">Декабрь</option>
                    </select>
                    <input type="text" placeholder="Год" onChange={onChangeYear} className="input"/>
                </div>  
                <h4>Конец работы</h4>     
                <div className="selectdate selectdate-noday">
                    <select onChange={onChageMonth} placeholder="Месяц" className="input">
                        <option value="">Январь</option>
                        <option value="">Февраль</option>
                        <option value="">Март</option>
                        <option value="">Апрель</option>
                        <option value="">Май</option>
                        <option value="">Июнь</option>
                        <option value="">Июль</option>
                        <option value="">Август</option>
                        <option value="">Сентябрь</option>
                        <option value="">Октябрь</option>
                        <option value="">Ноябрь</option>
                        <option value="">Декабрь</option>
                    </select>
                    <input type="text" placeholder="Год" onChange={onChangeYear} className="input"/>
                </div>    

                <h4>Организация</h4>       
                <input type="text" placeholder="Название компании" className="input"/>  

                <h4>Должность</h4>       
                <input type="text" placeholder="Должность" className="input"/>  

                <h4>Обязанности на рабочем месте</h4>
                <textarea className="textarea" placeholder="Опишите что вы делали на работе"></textarea>
                <div className="modal-actions">
                    <button className="button button-primary-bordered" onClick={close}>Отменить</button>
                    <button className="button button-primary">Сохранить</button>                
                </div>
            </div>

        </div>
    )
}