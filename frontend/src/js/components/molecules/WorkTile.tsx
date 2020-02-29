import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { rgba } from "polished";

import { Project } from "../../redux-store-types/projects";
import getFeaturedImagePath from "../../utils/getFeaturedImagePath";
import { useTypedSelector } from "../../Store";
import * as Colors from "../../constants/Colors";

const Container = styled(Link)`
    overflow: hidden;
    box-shadow: 0 5px 10px ${rgba("black", 0.2)};
    color: hsl(0, 0, 25%);
    display: flex;
    flex-direction: column;
    height: 100%;
    transition: 500ms ease all;
    position: relative;

    &:hover {
        box-shadow: 0 10px 20px ${rgba("black", 0.2)};
    }
`;

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

const Content = styled.div`
    background-color: ${rgba(Colors.background, 0.75)};
    color: white;
    padding: 20px 25px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    transform: translateY(100%);
    transition: 500ms ease all;

    a:hover & {
        transform: none;
    }
`;

const Title = styled.h4`
    margin: 0 0 5px;
    font-size: 18px;
    transition: 500ms ease all;
    color: ${Colors.green};
    transform: translateY(100%);
    opacity: 0;
    transition: 750ms ease all;

    a:hover & {
        opacity: 1;
        transform: none;
    }
`;

const Subtitle = styled.p`
    font-size: 14px;
    margin: 0 0 5px;
    opacity: 0.5;
    line-height: 1.2;
    transform: translateY(100%);
    opacity: 0;
    transition: 750ms 250ms ease all;

    a:hover & {
        opacity: 1;
        transform: none;
    }
`;

interface WorkTileProps {
    project: Project;
}

const WorkTile: React.FC<WorkTileProps> = ({ project }) => {
    const baseUrl = useTypedSelector((state: any) => state.global.data.home);
    const featuredImage = getFeaturedImagePath(project);
    return (
        <Container to={project.link} key={project.id}>
            <ThumbOuter>
                <ThumbInner image={baseUrl + featuredImage} />
            </ThumbOuter>
            <Content>
                <Title>{project.title.rendered}</Title>
                <Subtitle>{project.acf.subtitle}</Subtitle>
            </Content>
        </Container>
    );
};

export default WorkTile;
