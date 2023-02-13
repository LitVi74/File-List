import FilesListPage from "./pages/FilesListPage";
import FilePage from "./pages/FilePage";

export const routes = [
    {
        path: '/',
        Component: FilesListPage,
    },
    {
        path: '/:file_name',
        Component: FilePage,
    },
]