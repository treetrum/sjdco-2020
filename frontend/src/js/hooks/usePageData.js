import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import _ from "lodash";

const usePageData = () => {
    const { pathname } = useLocation();
    const page = useSelector(state => state.page[pathname]) || {};
    const loading = useSelector(state => state.ui.showLoader);
    return [_.isEmpty(page) ? loading : false, page];
};

export default usePageData;
