import { GET_GROUPS } from "./types";

export const getGroupsAction = (dispatch, data) => {
  return dispatch({
    type: GET_GROUPS,
    payload: {
      groups: data,
    },
  });
};
