export default function SelectDate({size, label}) {
    const onChangeDay = () => {}
    const onChageMonth = () => {}
    const onChangeYear = () => {}
    return(
        <fieldset className={"fieldset " + size}>
            <label>{label}</label>
            <div className="selectdate">
                <input type="text" placeholder="День" onChange={onChangeDay} className="input"/>
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
        </fieldset>
    );
}