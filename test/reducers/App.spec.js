import app from "../../src/reducers/App.js";
import game from "../../src/reducers/Game.js";
import screen from "../../src/reducers/Screen.js";
import {setCurrentScreenAction, MENU_SCREEN, GAME_SCREEN} from "../../src/ScreenActions.js";
import gridChangedAction from "../../src/actions/GameActions.js";

describe("app reducer", () => {

  it("should exist", () => {
    app.should.exist;
  });

  it("should be a function", () => {
    app.should.be.function;
  });

  describe("should work as a combination of two reducers", () => {

    const initialState = {
      screen: "MENU_SCREEN",
      game: {
        gameGrid: [["","",""],
                   ["","",""],
                   ["","",""]],
        currentTurn: "x",
        victoryStatistics: {
          x: 0,
          o: 0
        },
        gameOver: false
      }
    };

    var state,
        previousState,
        setMenuScreenAction = setCurrentScreenAction(MENU_SCREEN),
        setGameScreenAction = setCurrentScreenAction(GAME_SCREEN),
        girdChangedAt00 = gridChangedAction(0,0),
        girdChangedAt11 = gridChangedAction(0,0);

    it("should return initial state if state is empty", () => {
      state = app();
      state.should.be.equal(initialState);
    });

    it("should return the same state if no action", () => {
      previousState = state;
      state = app(state, {type: "bla-bla-bla"});
      previousState.should.be.eql(state);
    });

    it("should handle screen actions with screen reducer", () => {
      previousState = state;
      state = app(state, setGameScreenAction);
      state.should.be.not.eql(previousState);
      state.screen.should.be.equal(screen(previousState, setGameScreenAction));

      previousState = state;
      state = app(state, setMenuScreenAction);
      state.should.be.not.eql(previousState);
      state.screen.should.be.equal(screen(previousState, setMenuScreenAction));
    });

    it("should handle screen actions with screen reducer", () => {
      previousState = state;
      state = app(state, setGameScreenAction);
      state.should.be.not.eql(previousState);
      state.screen.should.be.equal(screen(previousState, setGameScreenAction));

      previousState = state;
      state = app(state, setMenuScreenAction);
      state.should.be.not.eql(previousState);
      state.screen.should.be.equal(screen(previousState, setMenuScreenAction));
    });

    it("should handle game actions with game reducer", () => {
      previousState = state;
      state = app(state, girdChangedAt00);
      state.should.be.not.eql(previousState);
      state.game.should.be.equal(game(previousState, girdChangedAt00));

      previousState = state;
      state = app(state, girdChangedAt00);
      state.should.be.eql(previousState);
      state.game.should.be.equal(game(previousState, girdChangedAt00));

      previousState = state;
      state = app(state, girdChangedAt11);
      state.should.be.not.eql(previousState);
      state.game.should.be.equal(game(previousState, girdChangedAt11));
    });

  });

});
