import {$host} from "./index";
import {AppDispatch} from "../index";
import {filesFetchingSuccess, filesUpdating} from "../fileSlice";
import {IFile} from "../../types/filesTypes";

type FilesDataType = Array<{
    name: string;
    content: string;
}>

export const getFiles = () => async (dispatch: AppDispatch) => {
    const {data} = await $host.get<FilesDataType>('api/files/');
    dispatch(filesFetchingSuccess(data))
}

export  const uploadFile = (file: File) => {
    return async (dispatch: AppDispatch) => {
        const formData = new FormData();
        formData.append('file', file)

        $host.post<IFile>(
            '/api/files/upload/',
            formData
        ).then(({data}) => {
            dispatch(filesUpdating(data))
        });
    };
}

export const downloadFile = async (fileName: string) => {
    const  response = await fetch("http://localhost:8080/api/files/download?filename=" + fileName);

    if (response.status === 200) {
        const blob = await response.blob();

        const downloadUrl = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        link.remove();
    }
}