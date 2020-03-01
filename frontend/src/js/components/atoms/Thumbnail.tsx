import * as React from "react";
import styled from "styled-components";

const ThumbOuter = styled.div`
    position: relative;
    padding-bottom: 110%;
`;

type ThumbInnerProps = { image: string };
const ThumbInner = styled.div<ThumbInnerProps>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    transition: 2s ease all;
    background-image: url(${props => props.image});

    a:hover & {
        transform: scale(1.1);
    }
`;

const Thumbnail: React.FC<{ image: string }> = props => {
    return (
        <ThumbOuter>
            <ThumbInner image={props.image}></ThumbInner>
        </ThumbOuter>
    );
};

export default Thumbnail;
