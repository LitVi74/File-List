import React, {useCallback} from 'react';
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
        <button className="button button__download" onClick={handleButtonClick} />
    );
};

export default SaveFileButton;