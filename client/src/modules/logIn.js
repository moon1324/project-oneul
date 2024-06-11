import { createAction, handleActions } from "redux-actions";

// Action types
const LOGIN_SUCCESS = "login/LOGIN_SUCCESS";
const LOGIN_FAILURE = "login/LOGIN_FAILURE";
const LOGOUT = "login/LOGOUT";

// Action creators
export const loginSuccess = createAction(LOGIN_SUCCESS);
export const loginFailure = createAction(LOGIN_FAILURE);
export const logout = createAction(LOGOUT);

// Initial state
const initialState = {
    isAuthenticated: false,
    user: null,
    error: null,
};

// Reducer
const loginReducer = handleActions(
    {
        [LOGIN_SUCCESS]: (state, { payload }) => ({
            ...state,
            isAuthenticated: true,
            user: payload,
            error: null,
        }),
        [LOGIN_FAILURE]: (state, { payload }) => ({
            ...state,
            isAuthenticated: false,
            user: null,
            error: payload,
        }),
        [LOGOUT]: () => initialState,
    },
    initialState
);

export default loginReducer;
