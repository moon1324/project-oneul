import { createAction, handleAction } from "redux-actions";

// actions의 타입 선언
const UPDATE_SIGNUP_DATA = "signup/UPDATE_SIGNUP_DATA";

// actions을 생성
export const updateSignUpData = createAction(UPDATE_SIGNUP_DATA);

// 초기 상태
const initialState = {
    email: "",
    password: "",
    name: "",
    mobile: "",
    nickname: "",
    profileImg: "",
    origin: "",
};

// reducer 제작
const signUpReducer = handleAction(
    {
        [UPDATE_SIGNUP_DATA]: (state, action) => ({
            ...state,
            ...action.payload,
        }),
    },
    initialState
);

export default signUpReducer;
