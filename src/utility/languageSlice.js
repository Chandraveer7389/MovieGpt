import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
    name : "language",
    initialState : {
        lang : "en",
    },
    reducers : {
        configLanguage : (state,action) => {
            state.lang = action.payload;
        }
    }
})

export const {configLanguage} = languageSlice.actions;
export default languageSlice.reducer;