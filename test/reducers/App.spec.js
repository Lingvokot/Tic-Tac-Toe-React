import app from "src/reducers/App.js";
import game from "src/reducers/Game.js";
import screen from "src/reducers/Screen.js";
import setCurrentScreenAction from "src/actions/ScreenActions.js";
import { MENU_SCREEN, GAME_SCREEN } from "src/actions/ScreenActions.js";
import changeGridAction from "src/actions/GameActions.js";
import { initialGameState } from "src/reducers/Game.js";

describe("app reducer", () => {

  it("should exist", () => {
    app.should.exist;
  });

  it("should be a function", () => {
    app.should.be.function;
  });

  describe("should work as a combination of two reducers", () => {

    var state,
        previousState,
        setMenuScreenAction = setCurrentScreenAction(MENU_SCREEN),
        setGameScreenAction = setCurrentScreenAction(GAME_SCREEN),
        girdChangedAt00 = changeGridAction(0,0),
        girdChangedAt11 = changeGridAction(0,0);

    it("should return initial state if state is empty", () => {
      state = app(undefined, {type: "this is test"});
      state.should.be.eql({
        screen: MENU_SCREEN,
        game: initialGameState()
      });
    });

    it("should return the same state if no action", () => {
      previousState = state;
      state = app(state, {type: "bla-bla-bla"});
      previousState.should.be.equal(state);
    });

    it("should handle screen actions with screen reducer", () => {
      previousState = app(undefined, {type: "this is test"});
      state = app(undefined, {type: "this is test"});
      state = app(state, setGameScreenAction);
      state.should.be.not.equal(previousState);
      state.screen.should.be.equal(screen(previousState, setGameScreenAction));

      previousState = app(undefined, {type: "this is test"});
      state = app(undefined, {type: "this is test"});
      state = app(state, setMenuScreenAction);
      state.should.be.not.equal(previousState);
      state.screen.should.be.equal(screen(previousState, setMenuScreenAction));
    });

    it("should handle screen actions with screen reducer", () => {
      previousState = state;
      state = app(state, setGameScreenAction);
      state.should.be.not.eql(previousState);
      state.screen.should.be.equal(screen(previousState.screen,
        setGameScreenAction));

      previousState = state;
      state = app(state, setMenuScreenAction);
      state.should.be.not.eql(previousState);
      state.screen.should.be.equal(screen(previousState.screen,
        setMenuScreenAction));
    });

    it("should handle game actions with game reducer", () => {
      previousState = state;
      state.game = initialGameState();
      previousState = initialGameState();

      state = app(state, girdChangedAt00);
      previousState.game = game(previousState.game, girdChangedAt00);
      state.game.should.be.eql(previousState.game);

      state = app(state, girdChangedAt00);
      previousState.game = game(previousState.game, girdChangedAt00);
      state.game.should.be.eql(previousState.game);

      state = app(state, girdChangedAt11);
      previousState.game = game(previousState.game, girdChangedAt00);
      state.game.should.be.eql(previousState.game);
    });

  });

});
