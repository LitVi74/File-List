import {useEffect} from "react";
import {Link} from "react-router-dom";
import AddFileInput from "../components/FileListPage/AddFileInput";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {getFiles} from "../store/http/filesAPI";


const FilesListPage = () => {
    const dispatch = useAppDispatch();
    const files = useAppSelector(state => state.files.files);

    useEffect(() => {
        dispatch(getFiles())
    }, [])

    return (
        <div>
            <AddFileInput />
            <ul>
                {files.map((file) =>
                    <li key={file.name}>
                        <Link to={file.name}>{file.name}</Link>
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