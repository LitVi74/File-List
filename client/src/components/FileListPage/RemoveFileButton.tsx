import React, {useCallback} from 'react';
import {useAppDispatch} from "../../hooks/redux";
import {fileRemoving} from "../../store/fileSlice";

interface ISaveFileButtonProps {
    filename: string;
}

const RemoveFileButton = ({filename}: ISaveFileButtonProps) => {
    const dispatch = useAppDispatch();

    const handleButtonClick = useCallback(() =>{
        dispatch(fileRemoving(filename));
    }, [filename, dispatch])

    return (
        <button className="button button__remove" onClick={handleButtonClick} />
    );
};

export default RemoveFileButton;