const initState = {
    user:null,
    isFetching:false
}

const userReducer = (state = initState, action) => {
    switch(action.type) {
        case "LOADING_USER":
            return {
                ...state,
                isFetching: action.isFetching
            }
        case "USER_SUCCESS":
            return {
                user: action.user,
                isFetching: action.isFetching
            }
        case "LOADING_USER_FAILED":
            return {
                ...state,
                error: action.error,
                isFetching: action.isFetching
            }
        default:
            return state
    }
}

export default userReducer;