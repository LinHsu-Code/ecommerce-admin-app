import { categoryConstants } from "../actions/constants";

const initState = {
  categories: [],
  loading: false,
  errorMessage: "",
};

// const addCategoryState = (categories, newCategory) => {
//   return [];
// };
const categoryReducer = (state = initState, action) => {
  switch (action.type) {
    case categoryConstants.GET_CATEGORIES_SUCCESS:
      state = {
        ...state,
        categories: action.payload.categories,
      };
      break;
    case categoryConstants.GET_CATEGORIES_FAILURE:
      state = {
        ...initState,
        errorMessage: action.payload.errorMessage,
      };
      break;
    case categoryConstants.ADD_CATEGORY_SUCCESS:
      state = {
        ...state,
      };
      break;
    case categoryConstants.ADD_CATEGORY_FAILURE:
      state = {
        ...initState,
        errorMessage: action.payload.errorMessage,
      };
      break;
    default:
  }
  return state;
};

export default categoryReducer;
