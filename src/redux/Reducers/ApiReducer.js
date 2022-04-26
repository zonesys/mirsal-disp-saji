import { GET_GROUPS, SIGN_IN, SIGN_OUT } from "../Actions/types";

const initialValues = {
  groups: [],
};
const apiReducer = (state = initialValues, action) => {
  switch (action.type) {
    case GET_GROUPS: {
      return {
        ...state,
        groups: action.payload.groups,
      };
    }

    default: {
      return state;
    }
  }
};
export default apiReducer;
