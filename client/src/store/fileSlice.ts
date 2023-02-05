import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getFiles} from "./http/filesAPI";

type FileStoreType = {
    files: Array<{
        name: string;
        content: string;
    }>
}

const initialState: FileStoreType = {
    files: [],
}

const FileSlice = createSlice({
    name: 'files',
    initialState,
    reducers: {
        filesFetchingSuccess: (
            state,
            action:PayloadAction<Array<{
                name: string;
                content: string;
            }>>
        ) => {
            state.files = action.payload
        },
    }
})

export const { filesFetchingSuccess } = FileSlice.actions;

export default FileSlice.reducer;