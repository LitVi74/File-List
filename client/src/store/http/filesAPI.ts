import {$host} from "./index";
import {AppDispatch} from "../index";
import {filesFetchingSuccess} from "../fileSlice";

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

export  const uploadFile = (formData: FormData) => {
    $host.post(
        '/api/files/upload/',
        formData
    );
}