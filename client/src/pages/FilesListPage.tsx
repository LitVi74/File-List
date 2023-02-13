import React, {useEffect} from "react";
import AddFileInput from "../components/FileListPage/AddFileInput";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {getFiles} from "../store/http/filesAPI";

import "../styles/FileListPage/FileListPage.scss";
import Title from "../components/Title";
import FileItem from "../components/FileListPage/FileItem";

const FilesListPage = () => {
    const dispatch = useAppDispatch();
    const files = useAppSelector(state => state.files.files);

    useEffect(() => {
        dispatch(getFiles())
    }, [dispatch])

    return (
        <section className="main_section">
            <Title titleClass="title" titleText="File List" />
            <AddFileInput />
            <ul className="file_list">
                {files.map((file) =>
                    <FileItem key={file.name} filename={file.name}/>
                )}
            </ul>
        </section>
    );
};

export default FilesListPage;