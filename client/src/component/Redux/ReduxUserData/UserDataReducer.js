import * as types from "./UserDataActionType.js";

const init = {
  data: [],
  loading: false,
  error: null
};

export const UserDataReducer = (state = init, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true
      };
    case types.FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
        error: null
      };
    case types.FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        data: [],
        error: payload
      };

    default:
      return state;
  }
};