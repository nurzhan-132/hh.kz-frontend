import MyVacancy from "./myvacancy";
import { useSelector } from "react-redux/es/hooks/useSelector";

export default function MyVacancies() {
    
    const vacancies = useSelector(state => state.vacancy.vacancies)
    const showVacancies = vacancies.map((item, index) => <MyVacancy key={index} item={item}/>);    

    return(
        <div>   
            {showVacancies}            
        </div>
    );
}