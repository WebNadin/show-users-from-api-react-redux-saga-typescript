import {HIDE_LOADER, SHOW_LOADER, SHOW_USERS} from "./types";

export function showLoader() {
  return {
    type: SHOW_LOADER
  }
}
export function hideLoader() {
  return {
    type: HIDE_LOADER
  }
}

export function showUsers(): {} {
  return {
    type: SHOW_USERS
  }
}