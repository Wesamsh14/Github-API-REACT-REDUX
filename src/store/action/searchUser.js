import axios from 'axios';

const getUser = (props) => {
    return(dispatch) => {
        dispatch({
            type: "LOADING_USER",
            isFetching: true
        })
        return axios
                .get(`https://api.github.com/users/${props}`)
                .then(response => {
                    let userData = response.data
                    dispatch({
                        type:"USER_SUCCESS",
                        user: userData,
                        isFetching: false
                    })
                })
                .catch(error => {
                    dispatch({
                        type:"LOADING_USER_FAILED",
                        error: error.response.data.message,
                        isFetching: false
                    })
                })
    }
}

export default getUser;