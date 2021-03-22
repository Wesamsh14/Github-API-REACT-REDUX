import React, {useState} from 'react';
import { connect } from "react-redux";
import searchUserAction from '../store/action/searchUser';
import UserInfo from './userInfo';
import Loading from 'react-loading';
import SearchForm from './SearchForm';

function Search(props) {
    const [userName, setUserName] = useState('')
    const [error, setError] = useState()
    const handleChange = e => {
        setError('')
        setUserName(e.target.value)
    }
    const handleSubmit = e => {
        e.preventDefault();
        if( (userName !== '') ){
            setError('')
            props.dispatch( searchUserAction(userName) )
        }else {
            setError('enter username please')
        }
    }
    return (
        <div className='content'>
            <div>
                <h1>Search for a user on github</h1>
                <h2>Please enter a username</h2>
                <SearchForm handleChange={handleChange} handleSubmit={handleSubmit} />
                {
                    error && error ?
                        <h2 className='errorMsg'>{error}</h2>
                    : props.error && props.error ?
                        <h2 className='errorMsg'>{`${props.error}, please try another username`}</h2>
                    : null
                }
            </div>
            <div>
                {
                    props.isLoading ? 
                        <div className="loading">
                            <Loading color={'black'} />
                        </div>
                    : props.user !== null ?
                        <UserInfo props={props} />
                    : null
                }
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        user: state.user.user,
        isLoading: state.user.isFetching,
        error: state.user.error
    }
}

export default connect(mapStateToProps)(Search)