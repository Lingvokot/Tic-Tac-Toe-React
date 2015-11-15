import game, { initialGameState } from "src/reducers/Game.js";
import { applyMoveAction } from "src/actions/GameActions.js";
import { computerMoveAction } from "src/actions/GameActions.js";
import { startNextMatchAction } from "src/actions/GameActions.js";
import { resetGameAction } from "src/actions/GameActions.js";
import { setGameModeAction } from "src/actions/GameActions.js";
import { VS_HUMAN, EASY, MEDIUM, HARD } from "src/reducers/Game.js";

describe("game reducer", () => {

  it("should exist", () => {
    game.should.exist;
  });

  it("should be a function", () => {
    game.should.be.function;
  });

  it("should be able to hadle RESET_GAME action", () => {
    var state = initialGameState();
    state.gameGrid = [["","o",""],
                      ["o","o","x"],
                      ["x","x","x"]];
    state.gameOver = true;
    state = game(state, resetGameAction());
    state.should.be.eql(initialGameState());
  });

  it("should be able set game mode", () => {
    var state = initialGameState();
    state = game(state, setGameModeAction(VS_HUMAN));
    state.gameMode.should.be.equal(VS_HUMAN);
  });

  it("should be able set game mode", () => {
    var state = initialGameState();
    state = game(state, setGameModeAction(EASY));
    state.gameMode.should.be.equal(EASY);
  });

  it("should be able set game mode", () => {
    var state = initialGameState();
    state = game(state, setGameModeAction(MEDIUM));
    state.gameMode.should.be.equal(MEDIUM);
  });

  it("should be able set game mode", () => {
    var state = initialGameState();
    state = game(state, setGameModeAction(HARD));
    state.gameMode.should.be.equal(HARD);
  });

  describe("gameplay handling", () => {

    var state,
        previousState;

    it("should change grid cell if specified", () => {
      state = initialGameState();
			previousState = state;
      state = game(state, applyMoveAction({x:0,y:0}));
      state.should.be.not.equal(previousState);
      state.currentTurn.should.be.equal("o");
      state.gameGrid.should.be.eql([["x","",""],
                                    ["","",""],
                                    ["","",""]]);
    });

    it("should be able to handle victory if 3 'x' or 'o' in one row", () => {
      state = initialGameState();
      state.gameGrid = [["x","x",""],
                        ["o","o",""],
                        ["","",""]];
      state.currentTurn = "x";
			previousState = state;

      state = game(state, applyMoveAction({x:0,y:2}));
      state.should.be.not.equal(previousState);

      previousState.victoryStatistics.x
        .should.be.equal(state.victoryStatistics.x-1);
    });

    it("should be able to handle victory if 3 'x' or 'o' in one row", () => {
      state = initialGameState();
      state.gameGrid = [["x","x",""],
                        ["o","o",""],
                        ["x","",""]];
      state.currentTurn = "o";
			previousState = state;

      state = game(state, applyMoveAction({x:1,y:2}));
      state.should.be.not.equal(previousState);
			state.gameOver.should.be.equal(true);

      previousState.victoryStatistics.o
        .should.be.equal(state.victoryStatistics.o-1);
      });

    it("should be able to handle victory if 3 'x' or 'o' in one row", () => {
      state = initialGameState();
      state.gameGrid = [["x","o",""],
                        ["o","o",""],
                        ["x","x",""]];
      state.currentTurn = "x";
			previousState = state;

      state = game(state, applyMoveAction({x:2,y:2}));
      state.should.be.not.equal(previousState);
			state.gameOver.should.be.equal(true);

      previousState.victoryStatistics.x
        .should.be.equal(state.victoryStatistics.x-1);
    });

    it("should be able to handle victory if 3 'x' or 'o' in one column", () => {
      state = initialGameState();
      state.gameGrid = [["x","o",""],
                        ["","o","x"],
                        ["x","",""]];
      state.currentTurn = "o";
			previousState = state;

      state = game(state, applyMoveAction({x:2,y:1}));
      state.should.be.not.equal(previousState);
			state.gameOver.should.be.equal(true);

      previousState.victoryStatistics.o
        .should.be.equal(state.victoryStatistics.o-1);
    });

    it("should be able to handle victory if 3 'x' or 'o' in one column", () => {
      state = initialGameState();
      state.gameGrid = [["x","o","o"],
                        ["","o","x"],
                        ["x","",""]];
      state.currentTurn = "x";
			previousState = state;

      state = game(state, applyMoveAction({x:1,y:0}));
      state.should.be.not.equal(previousState);
      state.gameOver.should.be.equal(true);

      previousState.victoryStatistics.x
        .should.be.equal(state.victoryStatistics.x-1);
    });

    it("should be able to handle victory if 3 'x' or 'o' in one column", () => {
      state = initialGameState();
      state.gameGrid = [["x","","o"],
                        ["","x",""],
                        ["x","","o"]];
      state.currentTurn = "o";
			previousState = state;

      state = game(state, applyMoveAction({x:1,y:2}));
      state.should.be.not.equal(previousState);
      state.gameOver.should.be.equal(true);

      previousState.victoryStatistics.o
        .should.be.equal(state.victoryStatistics.o-1);
    });

    it("should be able to handle victory if 3 'x' or 'o' in diagonal", () => {
      state = initialGameState();
      state.gameGrid = [["x","o","o"],
                        ["o","",""],
                        ["x","","x"]];
      state.currentTurn = "x";
			previousState = state;

      state = game(state, applyMoveAction({x:1,y:1}));
      state.should.be.not.equal(previousState);
			state.gameOver.should.be.equal(true);

      previousState.victoryStatistics.x
        .should.be.equal(state.victoryStatistics.x-1);
    });

    it("should be able to handle victory if 3 'x' or 'o' in diagonal", () => {
      state = initialGameState();
      state.gameGrid = [["x","","o"],
                        ["x","",""],
                        ["o","","x"]];
      state.currentTurn = "o";
			previousState = state;

      state = game(state, applyMoveAction({x:1,y:1}));
      state.should.be.not.equal(previousState);
			state.gameOver.should.be.equal(true);
      previousState.victoryStatistics.o
        .should.be.equal(state.victoryStatistics.o-1);
    });

    it("should be able to handle tie", () => {
      state = initialGameState();
      state.gameGrid = [["x","o","x"],
                        ["o","x",""],
                        ["o","x","o"]];
      state.currentTurn = "x";
			previousState = state;

      state = game(state, applyMoveAction({x:1,y:2}));
      state.should.be.not.equal(previousState);
			state.gameOver.should.be.equal(true);

      previousState.victoryStatistics.o
        .should.be.equal(state.victoryStatistics.o);
      previousState.victoryStatistics.x
        .should.be.equal(state.victoryStatistics.x);
    });

    it("should be able to handle tie", () => {
      state = initialGameState();
      state.gameGrid = [["x","o","x"],
                        ["o","x","x"],
                        ["o","","o"]];
      state.currentTurn = "x";
			previousState = state;

      state = game(state, applyMoveAction({x:2,y:1}));
      state.should.be.not.equal(previousState);
			state.gameOver.should.be.equal(true);


      previousState.victoryStatistics.o
        .should.be.equal(state.victoryStatistics.o);
      previousState.victoryStatistics.x
        .should.be.equal(state.victoryStatistics.x);
    });

    it("should be able to start next match", () => {
      let initialState = initialGameState();
      initialState.victoryStatistics = state.victoryStatistics;
      initialState.gameMode = state.gameMode;
      initialState.AI.playingX = !state.AI.playingX;

      state = game(state, startNextMatchAction());

      state.should.be.eql(initialState);
    });

  });



  describe("AI", () => {

    var state;

    it("should be able to make turn", () => {
      Math.random = () => 0.99;
      state = initialGameState();
      state.gameMode = EASY;

      state = game(state, applyMoveAction({x:0,y:0}));
      state = game(state, computerMoveAction(state));

      state.currentTurn.should.be.equal("x");
      state.gameGrid.should.be.not.eql([["x","",""],
                                        ["","",""],
                                        ["","",""]]);
    });

    it("should be able to make turn", () => {
      state = initialGameState();
      state.gameMode = EASY;
      state.AI.playingX = true;
      state.gameGrid = [["x","",""],
                        ["","o","o"],
                        ["","","x"]];

      state = game(state, computerMoveAction(state));

      state.currentTurn.should.be.equal("o");
      state.gameGrid.should.be.eql([["x","",""],
                                    ["x","o","o"],
                                    ["","","x"]]);
    });

    it("should choose best turn possible", () => {
      state = initialGameState();
      state.gameMode = EASY;
      state.gameGrid[0][0] = "x";
      state.currentTurn = "o";

      state = game(state, computerMoveAction(state));

      state.gameGrid.should.be.eql([["x","",""],
                                    ["","o",""],
                                    ["","",""]]);
    });

    it("should choose best turn possible", () => {
      state = initialGameState();
      state.gameMode = EASY;
      state.AI.playingX = true;
      state.gameGrid = [["x","",""],
                        ["","o",""],
                        ["x","o",""]];

      state = game(state, computerMoveAction(state));

      state.gameOver.should.be.equal(true);
      state.gameGrid.should.be.eql([["x","",""],
                                    ["x","o",""],
                                    ["x","o",""]]);
    });

    it("should choose best turn possible", () => {
      state = initialGameState();
      state.gameMode = EASY;
      state.gameGrid = [["x","",""],
                        ["","o",""],
                        ["x","",""]];
      state.currentTurn = "o";

      state = game(state, computerMoveAction(state));

      state.gameGrid.should.be.eql([["x","",""],
                                    ["o","o",""],
                                    ["x","",""]]);
    });

    it("should make random turns sometimes", () => {
      Math.random = () => 0;
      state = initialGameState();
      state.gameMode = EASY;
      state.gameGrid[0][0] = "x";
      state.currentTurn = "o";

      state = game(state, computerMoveAction(state));

      state.gameGrid.should.be.eql([["x","o",""],
                                    ["","",""],
                                    ["","",""]]);
    });

    it("should make random turns sometimes", () => {
      state = initialGameState();
      state.gameMode = EASY;
      state.gameGrid = [["x","o","x"],
                        ["o","x",""],
                        ["","",""]];
      state.currentTurn = "o";

      state = game(state, computerMoveAction(state));

      state.gameGrid.should.be.eql([["x","o","x"],
                                    ["o","x","o"],
                                    ["","",""]]);
    });

  });

});
