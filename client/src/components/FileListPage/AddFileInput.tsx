import React, {useCallback, useState} from 'react';
import {uploadFile} from "../../store/http/filesAPI";
import {useAppDispatch} from "../../hooks/redux";

const AddFileInput = () => {
    const dispatch = useAppDispatch();
    const [file, setFile] = useState<string>("Add file");

    const handleChangeInput = useCallback((event: React.FormEvent<HTMLInputElement>) => {
        if (!event.currentTarget.files) return;

        const file = event.currentTarget.files[0];

        dispatch(uploadFile(file));


        setFile(file.name ?? "Add file");
    }, [dispatch])

    return (
        <>
            <label className="add_file_label" htmlFor="add_file_input">
                {file}
            </label>
            <input
                multiple={false}
                type="file"
                id="add_file_input"
                onChange={handleChangeInput}
            />
        </>
    );
};

export default AddFileInput;