import ActionTypes from "../constants/ActionTypes";
import API from "../api";

const fetchProjectsRequest = () => ({
    type: ActionTypes.FETCH_PROJECTS_REQUEST,
});

const fetchProjectsSuccess = projects => ({
    type: ActionTypes.FETCH_PROJECTS_SUCCESS,
    projects,
});

const fetchProjectsFail = error => ({
    type: ActionTypes.FETCH_PROJECTS_FAIL,
    error,
});

export const fetchProjects = () => dispatch => {
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
