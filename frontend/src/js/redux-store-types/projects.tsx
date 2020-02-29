export interface Project {
    title: { rendered: string };
    link: string;
    id: number;
    slug: string;
    acf: any;
    [key: string]: any;
}

export interface ProjectState {
    loading: boolean;
    error: any;
    projects: Project[];
}

interface fetchProjectsRequest {
    type: "FETCH_PROJECTS_REQUEST";
}

interface fetchProjectsSuccess {
    type: "FETCH_PROJECTS_SUCCESS";
    projects: Project[];
}

interface fetchProjectsFail {
    type: "FETCH_PROJECTS_FAIL";
    error: any;
}

export type ProjectActions =
    | fetchProjectsRequest
    | fetchProjectsSuccess
    | fetchProjectsFail;
