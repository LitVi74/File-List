import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {fileContentChanging, selectFileByName} from "../store/fileSlice";
import Editable from "../components/FIlePage/Editable";
import React, {useCallback, useState} from "react";
import HightlightByText from "../components/FIlePage/HightlightByText";
import Title from "../components/Title";

import "../styles/FilePage/FilePage.scss";

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
    }, [file_name, dispatch])

    const handleInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setFilter(event.currentTarget.value);
    }, [])

    return (
        <section className="main_section">
            <Title titleText={file?.name ?? 'Name'} titleClass="title" />
            <input
                className="search_input"
                type="text"
                placeholder="Text search"
                value={filter}
                onChange={handleInputChange}
            />
            <Editable
                value={file?.content}
                callback={handleFileContentChange}
                textClassName="file_content"
                textAreaClassName="file_content__editing"
            >
                <HightlightByText className="searched_text" filter={filter} text={file?.content}/>
            </Editable>
        </section>
    );
};

export default FilePage;