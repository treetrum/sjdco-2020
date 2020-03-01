import styled from "styled-components";
import * as Layout from "../../constants/Layout";
import * as MQ from "../../constants/MediaQueries";

const Container = styled.div`
    width: 100%;
    max-width: ${Layout.grid_max_width};
    margin: 0 auto;
    padding: 0 ${Layout.page_padding};

    ${MQ.md} {
        padding: 0 ${Layout.page_padding_md};
    }

    ${MQ.lg} {
        padding: 0 ${Layout.page_padding_lg};
    }
`;

export default Container;
