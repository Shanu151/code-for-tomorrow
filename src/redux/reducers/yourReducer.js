// src/redux/reducers/yourReducer.js
const initialState = {
  // Your initial state here
  data: [],
  loading: false,
  error: null,
};

const yourReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DATA_START":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_DATA_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case "FETCH_DATA_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default yourReducer;
