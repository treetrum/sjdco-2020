import { useLocation } from "react-router-dom";
import { useTypedSelector } from "../Store";
import { PageType } from "../redux-store-types/page";

const usePageData = (): [boolean, PageType] => {
    const { pathname } = useLocation();
    const page = useTypedSelector(state => state.page.pages[pathname]);
    const loading = useTypedSelector(state => state.ui.showLoader);
    return [page ? loading : false, page];
};

export default usePageData;
