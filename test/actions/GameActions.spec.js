import { applyMoveAction, APPLY_MOVE } from "src/actions/GameActions.js";
import gameTick, { startNextMatchAction, applyComputerMoveAfterTimeout,
         START_NEXT_MATCH } from "src/actions/GameActions.js";
import { resetGameAction, RESET_GAME } from "src/actions/GameActions.js";
import { setGameModeAction, SET_GAME_MODE } from "src/actions/GameActions.js";
import { initialGameState } from "src/reducers/Game.js";
import { VS_HUMAN, EASY, MEDIUM, HARD } from "src/reducers/Game.js";
import { expect, assert } from "chai";

describe("Game Actions", () => {

  it("should exist", () => {
    applyMoveAction.should.exist;
    startNextMatchAction.should.exist;
    resetGameAction.should.exist;
    setGameModeAction.should.exist;
  });

  it("should be a function", () => {
    applyMoveAction.should.be.function;
    startNextMatchAction.should.be.function;
    resetGameAction.should.be.function;
    setGameModeAction.should.be.function;
  });

  describe("applyMoveAction", () => {

    it("should create action of type APPLY_MOVE", () => {
      const action = applyMoveAction({x:0,y:0});
      action.type.should.be.equal(APPLY_MOVE);
    });

    it("should have props x, y equal to function arguments", () => {
      var action = applyMoveAction({x:0,y:0});

      const playerMoveAt00 = {
        x: 0,
        y: 0,
        type: APPLY_MOVE
      };

      action.should.be.eql(playerMoveAt00);
    });

    it("should have props x, y equal to function arguments", () => {
      var action = applyMoveAction({x:2,y:1});

      const playerMoveAt21 = {
        x: 2,
        y: 1,
        type: APPLY_MOVE
      };

      action.should.be.eql(playerMoveAt21);
    });

  });

  describe("startNextMacthAction", () => {

    it("should create action of type START_NEXT_MATCH", () => {
      const action = startNextMatchAction();
      action.type.should.be.equal(START_NEXT_MATCH);
    });

    it("should have nothing else but action type", () => {
      var action = startNextMatchAction();

      const startNextMatch = {
        type: START_NEXT_MATCH
      };

      action.should.be.eql(startNextMatch);
    });

  });

  describe("applyComputerMoveAfterTimeout", () => {

    var state = initialGameState();
    state.gameGrid = [["x","x",""],
                      ["o","o",""],
                      ["x","",""]];
    state.currentTurn = "o";

    const oldSetTimeout = setTimeout;

    it("should use specified timeout and dispatch an action APPLY_MOVE", () => {
      let myTimeout = 200,
          newSetTimeout = (func, timeout) => {
             expect(timeout).to.equal(myTimeout);
             func();
          };
      setTimeout = newSetTimeout;
      applyComputerMoveAfterTimeout(state, myTimeout)(
        (action) => {
          action.type.should.be.equal(APPLY_MOVE);
        }
      );
    });

    it("should use specified timeout and dispatch an action APPLY_MOVE", () => {
      let myTimeout = 100,
          newSetTimeout = (func, timeout) => {
             expect(timeout).to.equal(myTimeout);
             func();
          };
      setTimeout = newSetTimeout;
      applyComputerMoveAfterTimeout(state, myTimeout)(
        (action) => {
          action.type.should.be.equal(APPLY_MOVE);
        }
      );
    });

    setTimeout = oldSetTimeout;
  });

  describe("resetGameAction", () => {

    it("should create action of type RESET_GAME", () => {
      const action = resetGameAction();
      action.type.should.be.equal(RESET_GAME);
    });

    it("should have nothing else but action type", () => {
      var action = resetGameAction();

      const computerMove = {
        type: RESET_GAME
      };

      action.should.be.eql(computerMove);
    });

  });

  describe("setGameModeAction", () => {

    it("should create action of type SET_GAME_MODE", () => {
      const action = setGameModeAction("TEST");
      action.type.should.be.equal(SET_GAME_MODE);
    });

    it("should use first argument as game mode", () => {
      const action = setGameModeAction("TEST");

      const testAction = {
        mode: "TEST",
        type: SET_GAME_MODE
      };

      action.should.be.eql(testAction);
    });

    it("should use first argument as game mode", () => {
      const action = setGameModeAction("TEST_NUMBER_TWO");

      const testAction = {
        mode: "TEST_NUMBER_TWO",
        type: SET_GAME_MODE
      };

      action.should.be.eql(testAction);
    });

  });

  describe("gameTick", () => {

    it("should dispatch player move if everithing is ok", () => {
      let state =  { game: initialGameState() },
          getState = () => state,
          move = {x:2,y:0},
          applyMove20 = applyMoveAction(move);

      gameTick(move)(
        (action) => action.should.be.eql(applyMove20),
        getState
      )
    });

    it("should dispatch player move if everithing is ok", () => {
      let state =  { game: initialGameState() },
          getState = () => state;
      state.game = state.game.set("gameMode", EASY);
      let move = {x:1,y:2},
          applyMove12 = applyMoveAction(move);
      gameTick(move)(
        (action) => action.should.be.eql(applyMove12),
        getState
      )
    });

    it("should dispatch nothing if there's invalid move", () => {
      let state =  { game: initialGameState() },
          getState = () => state;
      state.game = state.game.setIn(["gameGrid", 1, 2], "x");
      state.game = state.game.set("currentTurn", "o");
      let move = {x:1,y:2};
      gameTick(move)(
        () => assert(
          false,
          "dispatch should not be called if move is invalid"
        ),
        getState
      );
    });

    it("should dispatch nothing if now isn't user turn to move", () => {
      let state =  { game: initialGameState() },
          getState = () => state;
      state.game = state.game.merge({
        gameMode: EASY,
        currentTurn: "o",
        AI: {
          playingX: false
        }
      });
      let move = {x:0,y:0};
      gameTick(move)(
        () => assert(
          false,
          "dispatch should not be called if computers turn"
        ),
        getState
      );
    });

    it("should dispatch nothing if now isn't user turn to move", () => {
      let state =  { game: initialGameState() },
          getState = () => state;
      state.game = state.game.merge({
        currentTurn: "x",
        gameMode: MEDIUM,
        AI: {
          playingX: true
        }
      });
      let move = {x:0,y:0};
      gameTick(move)(
        () => assert(
          false,
          "dispatch should not be called if computers turn"
        ),
        getState
      );
    });

    it("should dispatch nothing if now isn't user turn to move", () => {
      let state =  { game: initialGameState() },
          getState = () => state;
      state.game = state.game.merge({
        currentTurn: "o",
        gameMode: HARD,
        AI: {
          playingX: false
        }
      });
      let move = {x:0,y:0};
      gameTick(move)(
        () => assert(
          false,
          "dispatch should not be called if computers turn"
        ),
        getState
      );
    });

    it("should dispatch START_NEXT_MATCH if game over and move defined", () => {
      let state =  { game: initialGameState() },
          getState = () => state;
      state.game = state.game.set("gameOver", true);
      let move = {x:1,y:2};
      gameTick(move)(
        (action) => expect(action.type).to.equal(START_NEXT_MATCH),
        getState
      );
    });

    it("should dispatch nothing if game over and move undefined", () => {
      let state =  { game: initialGameState() },
          getState = () => state;
      state.game = state.game.set("gameOver", true);

      gameTick()(
        () => assert(
          false,
          "dispatch shouldn't be called if move undefined"
        ),
        getState
      );
    });

    it("should dispatch computer move if everithing is ok", () => {
      let state =  { game: initialGameState() },
          getState = () => state;

      state.game = state.game.merge({
        gameOver: false,
        gameGrid: [["x","x",""],
                   ["o","o",""],
                   ["x","",""]],
        currentTurn: "o",
        gameMode: HARD
      });

      gameTick()(
        (action) => action.should.be.function,
        getState
      );
    });

    it("should dispatch computer move if everithing is ok", () => {
      let state =  { game: initialGameState() },
          getState = () => state;

      state.game = state.game.merge({
        gameOver: true,
        gameGrid: [["x","x","o"],
                   ["o","o",""],
                   ["x","",""]],
        currentTurn: "x",
        gameMode: EASY
      });

      gameTick()(
        (action) => action.should.be.function,
        getState
      );
    });

    it("should dispatch nothing if it's VS_HUMAN and no move", () => {
      let state =  { game: initialGameState() },
          getState = () => state;
      state.game = state.game.set("gameMode", VS_HUMAN);
      gameTick()(
        () => assert(
          false,
          "dispatch shouldn't be called if move undefined"
        ),
        getState
      );
    });

    it("should dispatch nothing if game over ", () => {
      let state =  { game: initialGameState() },
          getState = () => state;
      state.game = state.game.merge({
        gameMode: MEDIUM,
        gameOver: true
      });

      gameTick()(
        () => assert(
          false,
          "dispatch shouldn't be called if move undefined"
        ),
        getState
      );
    });

  });

});
