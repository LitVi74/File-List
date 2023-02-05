import {$host} from "./index";

export const getFiles = async () => {
    const {data} = await $host.get('api/files/');
    return data as unknown as {filesNames: string[]};
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