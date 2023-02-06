import {$host} from "./index";
import {AppDispatch} from "../index";
import {filesFetchingSuccess, filesUpdating} from "../fileSlice";

type FilesDataType = Array<{
    name: string;
    content: string;
}>

export const getFiles = () => async (dispatch: AppDispatch) => {
    const {data} = await $host.get<FilesDataType>('api/files/');
    dispatch(filesFetchingSuccess(data))
}

export const getOneFile = async (fileName: string) => {
    const {data} = await $host.get('/api/files/' + fileName);
    return data as unknown as {fileContent: string};
}

export  const uploadFile = (file: File) => async (dispatch: AppDispatch)  => {
    dispatch(filesUpdating(file));

    const formData = new FormData();
    formData.append('file', file)

    $host.post(
        '/api/files/upload/',
        formData
    );
}

export const downloadFile = async (fileName: string) => {
    const  response = await fetch("api/files/download?filename=" + fileName);

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