import { ProjectState, ProjectActions } from "../redux-store-types/projects";

const initialState = {
    loading: false,
    error: null,
    projects: [],
};

const projectsReducer = (
    state: ProjectState = initialState,
    action: ProjectActions
) => {
    switch (action.type) {
        case "FETCH_PROJECTS_REQUEST":
            return {
                ...state,
                loading: true,
            };
        case "FETCH_PROJECTS_SUCCESS":
            return {
                ...state,
                loading: false,
                projects: action.projects,
            };
        case "FETCH_PROJECTS_FAIL":
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        default:
            return state;
    }
};

export default projectsReducer;
