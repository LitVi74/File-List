import {$host} from "./index";

export const getFiles = async () => {
    const {data} = await $host.get('api/files/');
    return data;
}

export const getOneFile = async (fileName: string) => {
    const {data} = await $host.get('/api/files/' + fileName);
    return data as unknown as {fileContent: string};
}