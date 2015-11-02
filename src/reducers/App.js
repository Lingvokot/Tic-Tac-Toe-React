import { combineReducers } from "redux";
import game from "./Game.js";
import screen from "./Screen.js";

const app = combineReducers({
  screen,
  game
});

export default app;
