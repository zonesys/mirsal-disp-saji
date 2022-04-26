import { SIGN_IN, SIGN_OUT } from "./types";
export const signInAction = (dispatch, username, companyId) => {
  return dispatch({
    type: SIGN_IN,
    payload: {
      username: username,
      companyId: companyId,
    },
  });
};
export const signOutAction = (dispatch) => {
  return dispatch({
    type: SIGN_OUT,
  });
};
