import { useSelector } from "react-redux";
import _ from "lodash";

const usePageData = pathname => {
    const page = useSelector(state => state.page[pathname]) || {};
    const loading = useSelector(state => state.ui.showLoader);
    return [_.isEmpty(page) ? loading : false, page];
};

export default usePageData;
