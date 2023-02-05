import {useEffect, useState} from "react";


const FilesListPage = () => {
    const [files, setFiles] = useState<string[]>([
        'text1.txt',
        'text2.txt',
        'text3.txt'
    ]);



    return (
        <div>
            <label>
                Добавить файл
                <input type="file"/>
            </label>
            <ul>
                {files.map(filename =>
                    <li key={filename}>
                        {filename}
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