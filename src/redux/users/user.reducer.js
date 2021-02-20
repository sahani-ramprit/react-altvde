import { userTypes } from "./user.types";

const initialState = {
  currentUser: undefined,
  loading: false,
  errorMessage: ""
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case userTypes.LOGIN_START:
      return Object.assign({}, state, {
        loading: true,
        errorMessage: ""
      });
    case userTypes.LOGIN_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        errorMessage: "",
        currentUser: payload
      });

    case userTypes.LOGIN_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        errorMessage: payload
      });

    default:
      return state;
  }
};
