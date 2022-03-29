import {IAction} from "./usersReducer";
import {HIDE_LOADER, SHOW_LOADER} from "./types";

export interface IAppState {
  loading: boolean
}

const initialState = {
  loading: false
}

export const appReducer = (state: IAppState = initialState, action: IAction): {} => {
  switch (action.type){
    case SHOW_LOADER:
      return {...state, loading: true}
    case HIDE_LOADER:
      return {...state, loading: false}
    default:
      return state
  }
}