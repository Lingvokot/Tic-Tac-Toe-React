import { MENU_SCREEN, SET_CURRENT_SCREEN } from "../actions/ScreenActions.js";

export default function screen(state = MENU_SCREEN, action) {
  switch (action.type) {
    case SET_CURRENT_SCREEN:
      return action.screen;
    default:
      return state;
  }
}
