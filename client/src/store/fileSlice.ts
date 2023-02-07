import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getFiles} from "./http/filesAPI";
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
            action:PayloadAction<Array<IFile>>
        ) => {
            state.files = action.payload
        },
        filesUpdating: (
            state,
            action:PayloadAction<File>
        ) => {
            if(state.files.find(file => file.name = action.payload.name))
                return

            let fileReader = new FileReader();
            fileReader.readAsText(action.payload);

            state.files.push({
                name: action.payload.name,
                content: fileReader.result as string,
            });
        },
        fileRemoving: (
            state,
            action:PayloadAction<string>
        ) =>{
            const files = state.files
                .filter(file => file.name != action.payload);
            state.files = files;
        },
        fileContentChanging: (
            state,
            action:PayloadAction<IFile>
        ) => {
            state.files = state.files
                .map(file => {
                    if(file.name !== action.payload.name) return file;

                    return {
                        name: file.name,
                        content:  action.payload.content
                    };
                })
        }
    }
})

export const selectFileByName = (filename: string) => (state: RootState) =>
    state.files.files.find(file => file.name == filename)

export const {
    filesFetchingSuccess,
    filesUpdating,
    fileRemoving,
    fileContentChanging,
} = FileSlice.actions;

export default FileSlice.reducer;