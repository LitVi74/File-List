import React, {useCallback} from 'react';
import {useAppSelector} from "../../hooks/redux";
import {selectFileByName} from "../../store/fileSlice";
import {downloadFile} from "../../store/http/filesAPI";

interface ISaveFileButtonProps {
    filename: string;
}

const SaveFileButton = ({filename}: ISaveFileButtonProps) => {

    const handleButtonClick = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        downloadFile(filename);
    }, [filename])

    return (
        <button onClick={handleButtonClick}>
            Сохранить
        </button>
    );
};

export default SaveFileButton;