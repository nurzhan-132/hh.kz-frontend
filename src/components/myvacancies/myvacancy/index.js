'use client'
import { useDispatch } from "react-redux";
import Link from "next/link";
import { deleteVacancy } from "@/app/store/slices/vacancySlice";

export default function MyVacancy({item}) {
    const dispatch = useDispatch()
    return(
        <div className="card mtb5">
            <div className="flex flex-jc-sb flex-ai-c">
                <Link href={`/vacancy/${item.id}`} className="h3 link">{item.name}</Link>   
                <img className="delete-button" src="/images/trash-icon.svg" alt="Удалить вакансию" onClick={() => dispatch(deleteVacancy(item.id))}/>
            </div>
            <p>{item.createdAt}</p>
        </div>
    );
}