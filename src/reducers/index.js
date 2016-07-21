import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import authReducer from './auth_reducer';
import videoReducer from './video_reducer';

const rootReducer = combineReducers({
  form,
  auth: authReducer,
  videos: videoReducer
});

export default rootReducer;
