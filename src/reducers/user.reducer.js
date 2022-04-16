import { userConstants } from "../actions/constants";

const initState = {
  message: "",
  errorMessage: "",
  load: false,
  loading: false,
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case userConstants.USER_REGISTER_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case userConstants.USER_REGISTER_SUCCESS:
      state = {
        ...state,
        message: action.payload.message,
        load: true,
        loading: false,
      };
      break;
    case userConstants.USER_REGISTER_FAILURE:
      state = {
        ...state,
        errorMessage: action.payload.errorMessage,
      };
      break;
    default:
  }
  return state;
};

export default userReducer;
