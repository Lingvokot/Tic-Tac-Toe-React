import {setCurrentScreenAction, SET_CURRENT_SCREEN} from "../../src/actions/ScreenActions.js";

describe("Screen Actions", () => {

  it("should exist", () => {
    setCurrentScreenAction.should.exist;
  });

  it("should be a function", () => {
    setCurrentScreenAction.should.be.function;
  });

  it("should create action of type SET_CURRENT_SCREEN", () => {
    const action = setCurrentScreenAction("MENU_SCREEN");
    action.type.should.be.equal(SET_CURRENT_SCREEN);
  });

  it("should have parameter screen equal to function argument", () => {
    var action = setCurrentScreenAction("MENU_SCREEN");

    const setMenuScreenAction = {
      screen: "MENU_SCREEN",
      type: SET_CURRENT_SCREEN
    };

    action.should.be.equal(setMenuScreenAction);

    action = setCurrentScreenAction("GAME_SCREEN");

    const setGameScreenAction = {
      screen: "GAME_SCREEN",
      type: SET_CURRENT_SCREEN
    };

    action.should.be.equal(setGameScreenAction);
  });


});
