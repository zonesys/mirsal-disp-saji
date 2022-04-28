import { SIGN_IN, SIGN_OUT } from "./types";
export const signInAction = (
  dispatch,
  username,
  companyId,
  isLogged,
  isAdmin
) => {
  return dispatch({
    type: SIGN_IN,
    payload: {
      username: username,
      companyId: companyId,
      isLogged:isLogged,
      isAdmin: isAdmin,
    },
  });
};
export const signOutAction = (dispatch) => {
  return dispatch({
    type: SIGN_OUT,
  });
};
