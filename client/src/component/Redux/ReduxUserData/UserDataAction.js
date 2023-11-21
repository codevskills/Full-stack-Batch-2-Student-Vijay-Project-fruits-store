import * as types from "./UserDataActionType.js";
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const fetchDataRequest = () => ({ type: types.FETCH_DATA_REQUEST });

const fetchDataSuccess = (data) => ({
  type: types.FETCH_DATA_SUCCESS,
  payload: data
});

const fetchDataFailure = (error) => ({
  type: types.FETCH_DATA_FAILURE,
  payload: error
});

export const fetchData = () => {
  return async (dispatch) => {
    dispatch(fetchDataRequest());

    try {
      const response = await fetch(`${BACKEND_URL}/auth/login/success`, {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      });

      if (response.status === 200) {
        const data = await response.json();
        // console.log(data.user);
        dispatch(fetchDataSuccess(data.user));
      } else {
        throw new Error("Authentication has failed!");
      }
    } catch (error) {
      dispatch(fetchDataFailure(error.message));
    }
  };
};

