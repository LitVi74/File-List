import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IFile} from "../types/filesTypes";
import {RootState} from "./index";

type FileStoreType = {
    files: Array<IFile>
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
            action: PayloadAction<Array<IFile>>
        ) => {
            state.files = action.payload
        },
        filesUpdating: (
            state,
            action: PayloadAction<IFile>
        ) => {
            const newFiles = [...state.files]

            if (newFiles.indexOf(action.payload) === -1){
                newFiles.push(
                    {
                        name: action.payload.name,
                        content: action.payload.content
                    }
                );
            }

            state.files = newFiles;
        },
        fileRemoving: (
            state,
            action: PayloadAction<string>
        ) => {
            const files = state.files
                .filter(file => file.name !== action.payload);
            state.files = files;
        },
        fileContentChanging: (
            state,
            action: PayloadAction<IFile>
        ) => {
            state.files = state.files
                .map(file => {
                    if (file.name !== action.payload.name) return file;

                    return {
                        name: file.name,
                        content: action.payload.content
                    };
                })
        }
    }
})

export const selectFileByName = (filename: string) => (state: RootState) =>
    state.files.files.find(file => file.name === filename)

export const {
    filesFetchingSuccess,
    filesUpdating,
    fileRemoving,
    fileContentChanging,
} = FileSlice.actions;

export default FileSlice.reducer;