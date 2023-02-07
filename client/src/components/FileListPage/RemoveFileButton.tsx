import React, {useCallback} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {fileRemoving, selectFileByName} from "../../store/fileSlice";

interface ISaveFileButtonProps {
    filename: string;
}

const RemoveFileButton = ({filename}: ISaveFileButtonProps) => {
    const dispatch = useAppDispatch();

    const handleButtonClick = useCallback(() =>{
        dispatch(fileRemoving(filename));
    }, [filename])

    return (
        <button onClick={handleButtonClick}>
            Удалить
        </button>
    );
};

export default RemoveFileButton;