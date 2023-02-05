import React, {useCallback} from 'react';
import {uploadFile} from "../../http/filesAPI";

const AddFileInput = () => {

    const handeChangeInput = useCallback((event: React.FormEvent<HTMLInputElement>) => {
        if (!event.currentTarget.files) return;

        const files = [...Array.from(event.currentTarget.files)];

        files.forEach(file => {
            const formData = new FormData();
            formData.append('file', file)

            uploadFile(formData);
            console.log(formData)
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