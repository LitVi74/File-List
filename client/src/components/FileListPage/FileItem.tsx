import React from 'react';
import {Link} from "react-router-dom";
import SaveFileButton from "./SaveFileButton";
import RemoveFileButton from "./RemoveFileButton";

interface IFileItem {
    filename: string
}

const FileItem = ({filename}: IFileItem) => {
    return (
        <>
            <li className="file_item">
                <Link className="file_link" to={filename}>{filename}</Link>
                <SaveFileButton filename={filename} />
                <RemoveFileButton filename={filename} />
            </li>
        </>
    );
};

export default FileItem;