// actions.js
import axios from "axios";

export const FETCH_POSTS = "FETCH_POSTS";
export const REMOVE_POST = "REMOVE_POST";
export const SET_VIEW = "SET_VIEW";
export const TOGGLE_VIEW = "TOGGLE_VIEW";
export const SUBMIT_FEEDBACK = "SUBMIT_FEEDBACK";

export const fetchPosts = () => async (dispatch) => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  dispatch({ type: FETCH_POSTS, payload: response.data });
};

export const removePost = (postId) => ({
  type: REMOVE_POST,
  payload: postId,
});

export const setView = (pageNumber) => ({
  type: SET_VIEW,
  payload: pageNumber,
});

export const toggleView = () => ({
  type: TOGGLE_VIEW,
});

export const submitFeedback = (feedbackData) => ({
  type: SUBMIT_FEEDBACK,
  payload: feedbackData,
});
