import { combineReducers } from 'redux';
import appReducer from 'containers/App/reducer';
import counterReducer from 'containers/Counter/reducer';

// Combine here all reducers in the application
const allReducers = combineReducers({
    global: appReducer,
    counter: counterReducer,
});

export default allReducers;
