import app from "src/reducers/App.js";
import game from "src/reducers/Game.js";
import screen from "src/reducers/Screen.js";
import setCurrentScreenAction from "src/actions/ScreenActions.js";
import { MENU_SCREEN, GAME_SCREEN } from "src/actions/ScreenActions.js";
import { initialGameState } from "src/reducers/Game.js";
import { applyMoveAction } from "src/actions/GameActions.js";
import { startNextMatchAction } from "src/actions/GameActions.js";
import { resetGameAction } from "src/actions/GameActions.js";
import { setGameModeAction } from "src/actions/GameActions.js";
import { VS_HUMAN, EASY, MEDIUM, HARD } from "src/reducers/Game.js";

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
        playerMovedAt00 = applyMoveAction({x:0,y:0}),
        playerMovedAt11 = applyMoveAction({x:1,y:1}),
        setEasyGameMode = setGameModeAction(EASY),
        setMediumGameMode = setGameModeAction(MEDIUM),
        setHardGameMode = setGameModeAction(HARD),
        setVsHumanGameMode = setGameModeAction(VS_HUMAN),
        resetGame = resetGameAction(),
        startNextMatch = startNextMatchAction();

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

      state = app(state, playerMovedAt00);
      previousState.game = game(previousState.game, playerMovedAt00);
      state.game.should.be.eql(previousState.game);

      state = app(state, playerMovedAt00);
      previousState.game = game(previousState.game, playerMovedAt00);
      state.game.should.be.eql(previousState.game);

      state = app(state, playerMovedAt11);
      previousState.game = game(previousState.game, playerMovedAt11);
      state.game.should.be.eql(previousState.game);
    });

    it("should handle game actions with game reducer", () => {
      state = app(state, startNextMatch);
      previousState.game = game(previousState.game, startNextMatch);
      state.game.should.be.eql(previousState.game);
    });

    it("should handle game actions with game reducer", () => {
      state = app(state, setEasyGameMode);
      previousState.game = game(previousState.game, setEasyGameMode);
      state.game.should.be.eql(previousState.game);

      state = app(state, setMediumGameMode);
      previousState.game = game(previousState.game, setMediumGameMode);
      state.game.should.be.eql(previousState.game);

      state = app(state, setHardGameMode);
      previousState.game = game(previousState.game, setHardGameMode);
      state.game.should.be.eql(previousState.game);

      state = app(state, setVsHumanGameMode);
      previousState.game = game(previousState.game, setVsHumanGameMode);
      state.game.should.be.eql(previousState.game);
    });

    it("should handle game actions with game reducer", () => {
      state = app(state, resetGame);
      previousState.game = game(previousState.game, resetGame);
      state.game.should.be.eql(previousState.game);
    });

  });

});
