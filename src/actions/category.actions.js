import { categoryConstants } from "./constants";
import axios from "../utils/axios";

export const getCategories = () => {
  return async (dispatch) => {
    dispatch({ type: categoryConstants.GET_CATEGORIES_REQUEST });
    try {
      const res = await axios.get("category/list");
      const { categoryList } = res.data;
      dispatch({
        type: categoryConstants.GET_CATEGORIES_SUCCESS,
        payload: { categories: categoryList },
      });
    } catch (err) {
      dispatch({
        type: categoryConstants.GET_CATEGORIES_FAILURE,
        payload: { errorMessage: err.response.data.errorMessage },
      });
    }
  };
};

export const addCategory = (categoryObj) => {
  return async (dispatch) => {
    try {
      dispatch({ type: categoryConstants.ADD_CATEGORY_REQUEST });
      const res = await axios.post("/category/create", categoryObj);
      //console.log(res.data);
      dispatch({
        type: categoryConstants.ADD_CATEGORY_SUCCESS,
        payload: {
          category: res.data.category,
        },
      });
    } catch (err) {
      dispatch({
        type: categoryConstants.ADD_CATEGORY_FAILURE,
        payload: { errorMessage: err.response.data.errorMessage },
      });
    }
  };
};
