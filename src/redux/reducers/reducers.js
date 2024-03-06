// reducers.js
import {
  FETCH_POSTS,
  REMOVE_POST,
  SET_VIEW,
  TOGGLE_VIEW,
  SUBMIT_FEEDBACK,
} from "../actions/actions";

const initialState = {
  posts: [],
  view: 1,
  loading: true,
  cardView: "default",
  feedback: {
    name: "",
    email: "",
    message: "",
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, posts: action.payload, loading: false };

    case REMOVE_POST:
      const updatedPosts = state.posts.filter(
        (post) => post.id !== action.payload
      );
      return { ...state, posts: updatedPosts };

    case SET_VIEW:
      return { ...state, view: action.payload };

    case TOGGLE_VIEW:
      const newCardView = state.cardView === "default" ? "compact" : "default";
      return { ...state, cardView: newCardView };

    case SUBMIT_FEEDBACK:
      // You can handle the feedback submission logic here
      console.log("Feedback Submitted:", action.payload);
      return { ...state, feedback: initialState.feedback };

    default:
      return state;
  }
};

export default reducer;
