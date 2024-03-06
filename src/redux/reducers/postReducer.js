// postReducer.js
import {
  FETCH_POSTS,
  REMOVE_POST,
  SUBMIT_FEEDBACK,
} from "../actions/postActions";

const initialState = {
  posts: [],
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case REMOVE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload),
      };
    case SUBMIT_FEEDBACK:
      // Handle feedback submission logic if needed
      return state;
    default:
      return state;
  }
};

export default postReducer;
