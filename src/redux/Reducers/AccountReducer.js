import { SIGN_IN, SIGN_OUT } from "../Actions/types";

const initialValues = {
  user: {
    username: "",
    companyId: "",
    isLogged: false,
    role: "",
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
          isLogged: !initialValues.user.isLogged,
          role: !initialValues.user.role,
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
