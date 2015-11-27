import game, { initialGameState } from "src/reducers/Game.js";
import { applyMoveAction } from "src/actions/GameActions.js";
import { computerMoveAction } from "src/actions/GameActions.js";
import { startNextMatchAction } from "src/actions/GameActions.js";
import { resetGameAction } from "src/actions/GameActions.js";
import { setGameModeAction } from "src/actions/GameActions.js";
import { VS_HUMAN, EASY, MEDIUM, HARD } from "src/reducers/Game.js";

import Immutable from "immutable";

describe("game reducer", () => {

  it("should exist", () => {
    game.should.exist;
  });

  it("should be a function", () => {
    game.should.be.function;
  });

  it("should be able to hadle RESET_GAME action", () => {
    var state = initialGameState().toJS();
    state.gameGrid = [["","o",""],
                      ["o","o","x"],
                      ["x","x","x"]];
    state.gameOver = true;
    state = game(Immutable.fromJS(state), resetGameAction());
    state.should.be.eql(initialGameState());
  });

  it("should be able set game mode", () => {
    var state = initialGameState().toJS();
    state = game(Immutable.fromJS(state), setGameModeAction(VS_HUMAN)).toJS();
    state.gameMode.should.be.equal(VS_HUMAN);
  });

  it("should be able set game mode", () => {
    var state = initialGameState().toJS();
    state = game(Immutable.fromJS(state), setGameModeAction(EASY)).toJS();
    state.gameMode.should.be.equal(EASY);
  });

  it("should be able set game mode", () => {
    var state = initialGameState().toJS();
    state = game(Immutable.fromJS(state), setGameModeAction(MEDIUM)).toJS();
    state.gameMode.should.be.equal(MEDIUM);
  });

  it("should be able set game mode", () => {
    var state = initialGameState().toJS();
    state = game(Immutable.fromJS(state), setGameModeAction(HARD)).toJS();
    state.gameMode.should.be.equal(HARD);
  });

  describe("gameplay handling", () => {

    var state,
        previousState;

    it("should change grid cell if specified", () => {
      state = initialGameState().toJS();
			previousState = state;
      state = game(Immutable.fromJS(state), applyMoveAction({x:0,y:0})).toJS();
      state.should.be.not.equal(previousState);
      state.currentTurn.should.be.equal("o");
      state.gameGrid.should.be.eql([["x","",""],
                                    ["","",""],
                                    ["","",""]]);
    });

    it("should be able to handle victory if 3 'x' or 'o' in one row", () => {
      state = initialGameState().toJS();
      state.gameGrid = [["x","x",""],
                        ["o","o",""],
                        ["","",""]];
      state.currentTurn = "x";
			previousState = state;

      state = game(Immutable.fromJS(state), applyMoveAction({x:0,y:2})).toJS();
      state.should.be.not.equal(previousState);

      previousState.victoryStatistics.x
        .should.be.equal(state.victoryStatistics.x-1);
    });

    it("should be able to handle victory if 3 'x' or 'o' in one row", () => {
      state = initialGameState().toJS();
      state.gameGrid = [["x","x",""],
                        ["o","o",""],
                        ["x","",""]];
      state.currentTurn = "o";
			previousState = state;

      state = game(Immutable.fromJS(state), applyMoveAction({x:1,y:2})).toJS();
      state.should.be.not.equal(previousState);
			state.gameOver.should.be.equal(true);

      previousState.victoryStatistics.o
        .should.be.equal(state.victoryStatistics.o-1);
      });

    it("should be able to handle victory if 3 'x' or 'o' in one row", () => {
      state = initialGameState().toJS();
      state.gameGrid = [["x","o",""],
                        ["o","o",""],
                        ["x","x",""]];
      state.currentTurn = "x";
			previousState = state;

      state = game(Immutable.fromJS(state), applyMoveAction({x:2,y:2})).toJS();
      state.should.be.not.equal(previousState);
			state.gameOver.should.be.equal(true);

      previousState.victoryStatistics.x
        .should.be.equal(state.victoryStatistics.x-1);
    });

    it("should be able to handle victory if 3 'x' or 'o' in one column", () => {
      state = initialGameState().toJS();
      state.gameGrid = [["x","o",""],
                        ["","o","x"],
                        ["x","",""]];
      state.currentTurn = "o";
			previousState = state;

      state = game(Immutable.fromJS(state), applyMoveAction({x:2,y:1})).toJS();
      state.should.be.not.equal(previousState);
			state.gameOver.should.be.equal(true);

      previousState.victoryStatistics.o
        .should.be.equal(state.victoryStatistics.o-1);
    });

    it("should be able to handle victory if 3 'x' or 'o' in one column", () => {
      state = initialGameState().toJS();
      state.gameGrid = [["x","o","o"],
                        ["","o","x"],
                        ["x","",""]];
      state.currentTurn = "x";
			previousState = state;

      state = game(Immutable.fromJS(state), applyMoveAction({x:1,y:0})).toJS();
      state.should.be.not.equal(previousState);
      state.gameOver.should.be.equal(true);

      previousState.victoryStatistics.x
        .should.be.equal(state.victoryStatistics.x-1);
    });

    it("should be able to handle victory if 3 'x' or 'o' in one column", () => {
      state = initialGameState().toJS();
      state.gameGrid = [["x","","o"],
                        ["","x",""],
                        ["x","","o"]];
      state.currentTurn = "o";
			previousState = state;

      state = game(Immutable.fromJS(state), applyMoveAction({x:1,y:2})).toJS();
      state.should.be.not.equal(previousState);
      state.gameOver.should.be.equal(true);

      previousState.victoryStatistics.o
        .should.be.equal(state.victoryStatistics.o-1);
    });

    it("should be able to handle victory if 3 'x' or 'o' in diagonal", () => {
      state = initialGameState().toJS();
      state.gameGrid = [["x","o","o"],
                        ["o","",""],
                        ["x","","x"]];
      state.currentTurn = "x";
			previousState = state;

      state = game(Immutable.fromJS(state), applyMoveAction({x:1,y:1})).toJS();
      state.should.be.not.equal(previousState);
			state.gameOver.should.be.equal(true);

      previousState.victoryStatistics.x
        .should.be.equal(state.victoryStatistics.x-1);
    });

    it("should be able to handle victory if 3 'x' or 'o' in diagonal", () => {
      state = initialGameState().toJS();
      state.gameGrid = [["x","","o"],
                        ["x","",""],
                        ["o","","x"]];
      state.currentTurn = "o";
			previousState = state;

      state = game(Immutable.fromJS(state), applyMoveAction({x:1,y:1})).toJS();
      state.should.be.not.equal(previousState);
			state.gameOver.should.be.equal(true);
      previousState.victoryStatistics.o
        .should.be.equal(state.victoryStatistics.o-1);
    });

    it("should be able to handle tie", () => {
      state = initialGameState().toJS();
      state.gameGrid = [["x","o","x"],
                        ["o","x",""],
                        ["o","x","o"]];
      state.currentTurn = "x";
			previousState = state;

      state = game(Immutable.fromJS(state), applyMoveAction({x:1,y:2})).toJS();
      state.should.be.not.equal(previousState);
			state.gameOver.should.be.equal(true);

      previousState.victoryStatistics.o
        .should.be.equal(state.victoryStatistics.o);
      previousState.victoryStatistics.x
        .should.be.equal(state.victoryStatistics.x);
    });

    it("should be able to handle tie", () => {
      state = initialGameState().toJS();
      state.gameGrid = [["x","o","x"],
                        ["o","x","x"],
                        ["o","","o"]];
      state.currentTurn = "x";
			previousState = state;

      state = game(Immutable.fromJS(state), applyMoveAction({x:2,y:1})).toJS();
      state.should.be.not.equal(previousState);
			state.gameOver.should.be.equal(true);


      previousState.victoryStatistics.o
        .should.be.equal(state.victoryStatistics.o);
      previousState.victoryStatistics.x
        .should.be.equal(state.victoryStatistics.x);
    });

    it("should be able to start next match", () => {
      let initialState = initialGameState().toJS();
      initialState.victoryStatistics = state.victoryStatistics;
      initialState.gameMode = state.gameMode;
      initialState.AI.playingX = !state.AI.playingX;

      state = game(Immutable.fromJS(state), startNextMatchAction()).toJS();

      state.should.be.eql(initialState);
    });

  });



  describe("AI - best moves", () => {

    var state,
        originalMathRandom = Math.random;

    beforeEach(function() {
      state = initialGameState().toJS();
      Math.random = () => 0.99;
    });

    afterEach(function() {
      Math.random = originalMathRandom;
    });

    it("should be able to make turn", () => {

      state.gameMode = EASY;

      state = game(Immutable.fromJS(state), applyMoveAction({x:0,y:0})).toJS();
      state = game(Immutable.fromJS(state), computerMoveAction(state)).toJS();

      state.currentTurn.should.be.equal("x");
      state.gameGrid.should.be.not.eql([["x","",""],
                                        ["","",""],
                                        ["","",""]]);
    });

    it("should be able to make turn", () => {
      state.gameMode = EASY;
      state.AI.playingX = true;
      state.gameGrid = [["x","",""],
                        ["","o","o"],
                        ["","","x"]];

      state = game(Immutable.fromJS(state), computerMoveAction(state)).toJS();

      state.currentTurn.should.be.equal("o");
      state.gameGrid.should.be.eql([["x","",""],
                                    ["x","o","o"],
                                    ["","","x"]]);
    });

    it("should choose best turn possible", () => {
      state.gameMode = EASY;
      state.gameGrid[0][0] = "x";
      state.currentTurn = "o";

      state = game(Immutable.fromJS(state), computerMoveAction(state)).toJS();

      state.gameGrid.should.be.eql([["x","",""],
                                    ["","o",""],
                                    ["","",""]]);
    });

    it("should choose best turn possible", () => {
      state.gameMode = EASY;
      state.AI.playingX = true;
      state.gameGrid = [["x","",""],
                        ["","o",""],
                        ["x","o",""]];

      state = game(Immutable.fromJS(state), computerMoveAction(state)).toJS();

      state.gameOver.should.be.equal(true);
      state.gameGrid.should.be.eql([["x","",""],
                                    ["x","o",""],
                                    ["x","o",""]]);
    });

    it("should choose best turn possible", () => {
      state.gameMode = EASY;
      state.gameGrid = [["x","",""],
                        ["","o",""],
                        ["x","",""]];
      state.currentTurn = "o";

      state = game(Immutable.fromJS(state), computerMoveAction(state)).toJS();

      state.gameGrid.should.be.eql([["x","",""],
                                    ["o","o",""],
                                    ["x","",""]]);
    });

  });

  describe("AI - random moves", () => {

    var state,
        originalMathRandom = Math.random;

    beforeEach(function() {
      state = initialGameState().toJS();
      Math.random = () => 0;
    });

    afterEach(function() {
      Math.random = originalMathRandom;
    });

    it("should make random turns sometimes", () => {
      state.gameMode = EASY;
      state.gameGrid[0][0] = "x";
      state.currentTurn = "o";

      state = game(Immutable.fromJS(state), computerMoveAction(state)).toJS();

      state.gameGrid.should.be.eql([["x","o",""],
                                    ["","",""],
                                    ["","",""]]);
    });

    it("should make random turns sometimes", () => {
      state.gameMode = EASY;
      state.gameGrid = [["x","o","x"],
                        ["o","x",""],
                        ["","",""]];
      state.currentTurn = "o";

      state = game(Immutable.fromJS(state), computerMoveAction(state)).toJS();

      state.gameGrid.should.be.eql([["x","o","x"],
                                    ["o","x","o"],
                                    ["","",""]]);
    });

  });

});
