import { userConstants } from "./constants";
import axios from "../utils/axios";

export const signup = (user) => {
  return (dispatch) => {
    dispatch({ type: userConstants.USER_REGISTER_REQUEST });
    axios
      .post("/admin/signup", { ...user })
      .then((res) => {
        const { message } = res.data;
        dispatch({
          type: userConstants.USER_REGISTER_SUCCESS,
          payload: {
            message,
          },
        });
      })
      .catch((err) => {
        let { errorMessage } = err.response.data;
        if (err.response.data.errors) {
          errorMessage = err.response.data.errors.reduce(
            (prev, curr) => `${prev}${curr.msg}
            `,
            ""
          );
        }

        console.log(err.response.data);
        dispatch({
          type: userConstants.USER_REGISTER_FAILURE,
          payload: {
            errorMessage,
          },
        });
      });
  };
};
