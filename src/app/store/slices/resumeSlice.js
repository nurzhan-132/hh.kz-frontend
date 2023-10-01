import { END_POINT } from '@/config/end-point'
import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const resumeSlice = createSlice({
    name: "resume",
    initialState: {
        resumes: []
    },
    reducers: {
        setResumes: (state, action) => {
            state.resumes = action.payload.resumes
        },
        appendResume: (state, action) => {
            state.resumes = [...state.resumes, action.payload.newResume]
        }
    },
})

export const { setResumes } = resumeSlice.actions

export const getMyResumes = () => async (dispatch) => {
    try {
        const res = await axios.get(`${END_POINT}/api/resume`)
        dispatch(setResumes({resumes: res.data}))
    } catch (e) {
        alert(e.message)
    }
}

export const createResume = (resume, router) => async (dispatch) => {
    try {
        const res = await axios.post(`${END_POINT}/api/resume`, resume)
        router.push('/resumes')
        dispatch(appendResume({ newResume: res.data }))        
    } catch (e) {
        alert(e.message)        
    }
}

export default resumeSlice.reducer