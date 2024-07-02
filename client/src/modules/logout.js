// type 선언
export const LOGOUT = 'LOGOUT';

//action 


export const logoutAction = () => ({
  type: LOGOUT,
});

// intialState 
const initialState = {
    currentUser : null,
}

// reducer
const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGOUT:
            return {
                ...state,
                currentUser: null,
            };
        // 다른 액션 핸들링
        default:
            return state;
    }
};

export default loginReducer;