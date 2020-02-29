import API from "../api";

import { ProjectActions, Project } from "../redux-store-types/projects";
import { ThunkResult } from "../redux-store-types";

const fetchProjectsRequest = (): ProjectActions => ({
    type: "FETCH_PROJECTS_REQUEST",
});

const fetchProjectsSuccess = (projects: Project[]): ProjectActions => ({
    type: "FETCH_PROJECTS_SUCCESS",
    projects,
});

const fetchProjectsFail = (error: any): ProjectActions => ({
    type: "FETCH_PROJECTS_FAIL",
    error,
});

export const fetchProjects = (): ThunkResult<Promise<any>> => dispatch => {
    dispatch(fetchProjectsRequest());
    return API.getProjects()
        .then(projects => {
            dispatch(fetchProjectsSuccess(projects));
            return projects;
        })
        .catch(error => {
            dispatch(fetchProjectsFail(error));
            throw error;
        });
};
