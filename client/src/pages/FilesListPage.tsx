import {useEffect, useState} from "react";
import {getFiles} from "../http/filesAPI";
import {Link} from "react-router-dom";


const FilesListPage = () => {
    const [files, setFiles] = useState<string[]>([]);

    useEffect(() => {
        getFiles().then(data => setFiles(data.filesNames))
    }, [])

    return (
        <div>
            <label>
                Добавить файл
                <input type="file"/>
            </label>
            <ul>
                {files.map(filename =>
                    <li key={filename}>
                        <Link to={filename}>{filename}</Link>
                        <button>
                            Сохранить
                        </button>
                        <button>
                            Удалить
                        </button>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default FilesListPage;