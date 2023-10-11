import { END_POINT } from '@/config/end-point'
import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const vacancySlice = createSlice({
    name: "vacancy",
    initialState: {
        vacancies: [],
        vacancy: {},
    },
    reducers: {
        setMyVacancies: (state, action) => {
            state.vacancies = action.payload.vacancies
        },
        appendVacancy: (state, action) => {
            state.vacancies = [...state.vacancies, action.payload.newVacancy]
        },
        setVacancy: (state, action) => {
            state.vacancy = action.payload.vacancy
        },
        handleVacancyDeletion: (state, action) => {
            state.vacancies = state.vacancies.filter(res => res.id !== action.payload);
        }          
    },
})

export const { setMyVacancies, appendVacancy, setVacancy, handleVacancyDeletion } = vacancySlice.actions

export const getMyVacancies = () => async (dispatch) => {
    try {
        const res = await axios.get(`${END_POINT}/api/vacancy`)
        dispatch(setMyVacancies({vacancies: res.data}))
    } catch (e) {
        alert(e.message)
    }
}

// export const getResumeById = (id) => async (dispatch) => {
//     try {
//         const res = await axios.get(`${END_POINT}/api/resume/${id}`)
//         dispatch(setResume({ resume: res.data }))        
//     } catch (e) {
//         alert(e.message)        
//     }
// }

// export const createResume = (resume, router) => async (dispatch) => {
//     try {
//         const res = await axios.post(`${END_POINT}/api/resume`, resume)
//         router.push('/resumes')
//         dispatch(appendResume({ newResume: res.data }))        
//     } catch (e) {
//         alert(e.message)        
//     }
// }

// export const editResume = (resume, router) => async (dispatch) => {
//     try {
//         const res = await axios.put(`${END_POINT}/api/resume`, resume)
//         router.push('/resumes')   
//     } catch (e) {
//         alert(e.message)        
//     }
// }

// export const deleteResume = (id) => async (dispatch) => {
//     try {
//         const res = await axios.delete(`${END_POINT}/api/resume/${id}`)
//         dispatch(handleResumeDeletion(id))
//     } catch (e) {
//         alert(e.message)        
//     }
// }

export default vacancySlice.reducer