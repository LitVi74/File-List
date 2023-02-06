import {useParams} from "react-router-dom";
import {useAppSelector} from "../hooks/redux";
import {selectFileByName} from "../store/fileSlice";

const FilePage = () => {
    const {file_name} = useParams();

    const file = useAppSelector(selectFileByName(file_name ?? ''));

    return (
        <div>
            <input type="text" placeholder="Поиск по тексту"/>
            <h1>{file?.name ?? 'Name'}</h1>
            <p>{file?.content ?? ''}</p>
        </div>
    );
};

export default FilePage;