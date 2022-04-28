import { SIGN_IN, SIGN_OUT } from "../Actions/types";

const initialValues = {
  user: {
    username: "",
    companyId: "",
    isLogged: false,
    isAdmin: false,
  },
};
const accountReducer = (state = initialValues, action) => {
  switch (action.type) {
    case SIGN_IN: {
      return {
        ...state,
        user: {
          username: action.payload.username,
          companyId: action.payload.companyId,
          isLogged: action.payload.isLogged,
          isAdmin: action.payload.isAdmin,
        },
      };
    }
    case SIGN_OUT: {
      return initialValues;
    }
    default: {
      return state;
    }
  }
};
export default accountReducer;
