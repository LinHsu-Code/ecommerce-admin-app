import { authConstants } from "./constants";
import axios from "../utils/axios";

export const login = (user) => {
  return (dispatch) => {
    dispatch({ type: authConstants.LOGIN_REQUEST });
    axios
      .post("/admin/signin", { ...user })
      .then((res) => {
        const { token, user } = res.data;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        dispatch({
          type: authConstants.LOGIN_SUCCESS,
          payload: {
            token,
            user,
          },
        });
      })
      .catch((err) => {
        const { errorMessage } = err.response.data;
        dispatch({
          type: authConstants.LOGIN_FAILURE,
          payload: {
            errorMessage,
          },
        });
      });
  };
};

export const isUserLoggedIn = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = JSON.parse(localStorage.getItem("user"));
      dispatch({
        type: authConstants.LOGIN_SUCCESS,
        payload: {
          token,
          user,
        },
      });
    } else {
      dispatch({
        type: authConstants.LOGIN_FAILURE,
        payload: {
          // errorMessage: "Failed to login",
        },
      });
    }
  };
};

export const logout = () => {
  return async (dispatch) => {
    localStorage.clear();
    dispatch({
      type: authConstants.LOGOUT_REQUEST,
    });
  };
};
