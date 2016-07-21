import { VIDEO_SEARCH } from '../actions/types';

export default (state = {}, action) => {
  if (action.type === VIDEO_SEARCH) {
    return {...state, videos: action.payload };
  }
  return state;
}
