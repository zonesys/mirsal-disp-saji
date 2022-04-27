import { SIGN_IN, SIGN_OUT } from "./types";
export const signInAction = (dispatch, username, companyId, role) => {
  return dispatch({
    type: SIGN_IN,
    payload: {
      username: username,
      companyId: companyId,
      role: role,
    },
  });
};
export const signOutAction = (dispatch) => {
  return dispatch({
    type: SIGN_OUT,
  });
};
