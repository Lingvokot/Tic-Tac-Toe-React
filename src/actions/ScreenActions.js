// Screeen action types
export const SET_CURRENT_SCREEN = "SET_CURRENT_SCREEN";

// Screens
export const MENU_SCREEN = "MENU_SCREEN";
export const GAME_SCREEN = "GAME_SCREEN";

// SET_CURRENT_SCREEN action creator
const setCurrentScreenAction = function (screen) {
  return {screen: screen, type: SET_CURRENT_SCREEN};
}

export default setCurrentScreenAction;
