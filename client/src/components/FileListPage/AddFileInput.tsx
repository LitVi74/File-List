import React, {useCallback} from 'react';
import {uploadFile} from "../../store/http/filesAPI";
import {useAppDispatch} from "../../hooks/redux";

const AddFileInput = () => {
    const dispatch = useAppDispatch();

    const handeChangeInput = useCallback((event: React.FormEvent<HTMLInputElement>) => {
        if (!event.currentTarget.files) return;

        const files = [...Array.from(event.currentTarget.files)];

        files.forEach(file => {
            dispatch(uploadFile(file));
        })
    }, [])

    return (
        <label>
            Добавить файл
            <input multiple={true} type="file" name="file" onChange={handeChangeInput}/>
        </label>
    );
};

export default AddFileInput;