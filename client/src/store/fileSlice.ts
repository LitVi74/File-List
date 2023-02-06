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
            let fileReader = new FileReader();
            fileReader.readAsText(action.payload);
            let setFiles = new Set<IFile>(state.files);
            setFiles.add({
                name: action.payload.name,
                content: fileReader.result as string,
            })

            state.files = Array.from(setFiles);
        }
    }
})

export const selectFileByName = (filename: string) => (state: RootState) =>
    state.files.files.find(file => file.name == filename)

export const { filesFetchingSuccess, filesUpdating } = FileSlice.actions;

export default FileSlice.reducer;