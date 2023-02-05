import {useEffect, useState} from "react";
import {getOneFile} from "../store/http/filesAPI";
import {useParams} from "react-router-dom";

const FilePage = () => {
    const {file_name} = useParams();
    const [fileContent, setFileContent] = useState<string>("jfdklajfklda")

    useEffect(() => {
        getOneFile(file_name ?? 'name').then(data => setFileContent(data.fileContent));
    },[])

    return (
        <div>
            <input type="text" placeholder="Поиск по тексту"/>
            <h1>{file_name}</h1>
            <p>{fileContent}</p>
        </div>
    );
};

export default FilePage;