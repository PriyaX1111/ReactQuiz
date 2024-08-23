import { createSlice } from "@reduxjs/toolkit"
export const questionReducer = createSlice({
    name: 'questions',
    initialState: {
        queue: [],
        answers: [],
        trace: 0
    },
    reducers: {
        startExamAction: (state, active) => {
            return {
                ...state,
                queue: action.playload
            }
        }
    }
})

export const {startExamAction} = questionReducer.actions
export default questionReducer.reducer;