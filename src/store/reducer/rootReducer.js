import { combineReducers } from 'redux';
import userReducer from './components/userReducer';

const rootReducers = combineReducers({
    user : userReducer,
})

export default rootReducers;