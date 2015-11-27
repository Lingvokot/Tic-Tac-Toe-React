import setCurrentScreenAction from "src/actions/ScreenActions.js";
import { SET_CURRENT_SCREEN, MENU_SCREEN,
         GAME_SCREEN} from "src/actions/ScreenActions.js";

describe("Screen Actions", () => {

  it("should exist", () => {
    setCurrentScreenAction.should.exist;
  });

  it("should be a function", () => {
    setCurrentScreenAction.should.be.function;
  });

  it("should create action of type SET_CURRENT_SCREEN", () => {
    const action = setCurrentScreenAction(MENU_SCREEN);
    action.type.should.be.equal(SET_CURRENT_SCREEN);
  });

  it("should have parameter screen equal to function argument", () => {
    const action = setCurrentScreenAction(MENU_SCREEN);

    const setMenuScreenAction = {
      screen: MENU_SCREEN,
      type: SET_CURRENT_SCREEN
    };

    action.should.be.eql(setMenuScreenAction);
  });
  
  it("should have parameter screen equal to function argument", () => {
    const action = setCurrentScreenAction(GAME_SCREEN);

    const setGameScreenAction = {
      screen: GAME_SCREEN,
      type: SET_CURRENT_SCREEN
    };

    action.should.be.eql(setGameScreenAction);
  });


});
