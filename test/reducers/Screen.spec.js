import screen from "../../src/reducers/Screen.js";
import {setCurrentScreenAction, MENU_SCREEN, GAME_SCREEN} from "../../src/actions/ScreenActions.js";

describe("screen reducer", () => {

  it("should exist", () => {
    screen.should.exist;
  });

  it("should be a function", () => {
    screen.should.be.function;
  });

  it("should return MENU_SCREEN as default state", () => {
    screen().should.be.equal(MENU_SCREEN);
  });

  it("should change screen to specified in action.screen", () => {
    screen(GAME_SCREEN, setCurrentScreenAction(MENU_SCREEN))
      .should.be.equal(MENU_SCREEN);

    screen(MENU_SCREEN, setCurrentScreenAction(GAME_SCREEN))
      .should.be.equal(GAME_SCREEN);

    screen(MENU_SCREEN, {})
      .should.be.equal(MENU_SCREEN);
  });

});
