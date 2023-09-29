'use strict'

import { useState, useEffect } from "react";

export default function SelectEmploymentTypes({employmentTypes, label, size}) {
    const [eTypes, setETypes] = useState([])

    const onSelect = (e) => {
        const value = e.target.value * 1; 

        if(e.target.checked) {
            setETypes((prevETypes) => [...prevETypes, value])
        } else {
            setETypes((prevETypes) => prevETypes.filter((type) => type !== value))
        }
    }
    console.log(eTypes);

    return(
        <fieldset className={"fieldset " + size}>
            <label>{ label }</label>
            <div>
                {employmentTypes.map((type, index) => (
                    <div className="checkbox" key={index}>
                        <input onChange={onSelect} type="checkbox" name="employmentTypes" value={type.id} id={type.id + "-type"}/>
                        <label htmlFor={type.id + "-type"}>{type.name}</label>
                    </div>
                ))}
            </div>
        </fieldset>
    )
}