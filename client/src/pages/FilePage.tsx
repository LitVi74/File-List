import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {fileContentChanging, selectFileByName} from "../store/fileSlice";
import Editable from "../components/FIlePage/Editable";
import React, {useCallback, useState} from "react";

const FilePage = () => {
    const {file_name} = useParams();

    const dispatch = useAppDispatch();
    const file = useAppSelector(selectFileByName(file_name ?? ''));
    const [filter, setFilter] = useState<string>();

    const handleFileContentChange = useCallback((newContent: string) => {
        dispatch(fileContentChanging({
            name: file_name ?? '',
            content: newContent
        }))
    }, [file_name])

    const handleInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setFilter(event.currentTarget.value);
    }, [])

    return (
        <div>
            <input
                type="text"
                placeholder="Поиск по тексту"
                value={filter}
                onChange={handleInputChange}
            />
            <h1>{file?.name ?? 'Name'}</h1>
            <Editable value={file?.content} callback={handleFileContentChange} filter={filter} />
        </div>
    );
};

export default FilePage;