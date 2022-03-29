import {SHOW_USERS, FETCH_USERS} from "./types";

export interface IAction {
  type: string,
  payload?: {}
}

const initialState = {
  users: []
}

export const usersReducer = (state= initialState, action: IAction) => {
  switch (action.type) {
    case SHOW_USERS:
      return state;
    case FETCH_USERS:
      return {...state, users:  action.payload}
    default:
      return state;
  }
}