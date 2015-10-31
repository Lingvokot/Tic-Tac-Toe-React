import game from "../../src/reducers/Game.js";
import {gridChangedAction, GRID_CHANGED} from "../../src/actions/GameActions.js";

describe("game reducer", () => {

  it("should exist", () => {
    game.should.exist;
  });

  it("should be a function", () => {
    game.should.be.function;
  });

  describe("gameplay handling", () => {

    var state = {
      gameGrid: [["","",""],
                 ["","",""],
                 ["","",""]],
      currentTurn: "x",
      victoryStatistics: {
        x: 0,
        o: 0
      },
      gameOver: false
    },
    previousState = state;

    it("should change grid cell if specified", () => {
      previousState = state;
      state = game(state, gridChangedAction(0,0));
      state.should.be.not.eql(previousState);
      state.currentTurn.should.be.equal("o");
      state.gameGrid.should.be.equal([["x","",""],
                                      ["","",""],
                                      ["","",""]])
    });

    it("should change nothing if cell is already used", () => {
      previousState = state;
      state = game(state, gridChangedAction(0,0));
      state.should.be.eql(previousState);
      state.currentTurn.should.be.equal("o");
    });

    it("should be able to handle victory if 3 'x' or 'o' in one row", () => {
      state.gameGrid = [["x","x",""],
                        ["o","o",""],
                        ["","",""]];
      state.currentTurn = "x";
      previousState = state;

      state = game(state, gridChangedAction(0,2));
      state.should.be.not.eql(previousState);

      previousState.victoryStatistics.x
        .should.be.equal(state.victoryStatistics.x-1);

      state.gameGrid.should.be.equal([["x","x","x"],
                                      ["o","o",""],
                                      ["","",""]]);
    });

    it("should be able to handle victory if 3 'x' or 'o' in one row", () => {
      state.gameGrid = [["x","x",""],
                        ["o","o",""],
                        ["x","",""]];
      state.currentTurn = "o";
      previousState = state;

      state = game(state, gridChangedAction(1,2));
      state.should.be.not.eql(previousState);

      previousState.victoryStatistics.o
        .should.be.equal(state.victoryStatistics.o-1);

      state.gameGrid.should.be.equal([["x","x",""],
                                      ["o","o","o"],
                                      ["x","",""]]);
      });

    it("should be able to handle victory if 3 'x' or 'o' in one row", () => {
      state.gameGrid = [["x","o",""],
                        ["o","o",""],
                        ["x","x",""]];
      state.currentTurn = "x";
      previousState = state;

      state = game(state, gridChangedAction(2,2));
      state.should.be.not.eql(previousState);

      previousState.victoryStatistics.x
        .should.be.equal(state.victoryStatistics.x-1);

      state.gameGrid.should.be.equal([["x","o",""],
                                      ["o","o",""],
                                      ["x","x","x"]]);
    });

    it("should be able to handle victory if 3 'x' or 'o' in one column", () => {
      state.gameGrid = [["x","o",""],
                        ["","o","x"],
                        ["x","",""]];
      state.currentTurn = "o";
      previousState = state;

      state = game(state, gridChangedAction(2,1));
      state.should.be.not.eql(previousState);

      previousState.victoryStatistics.o
        .should.be.equal(state.victoryStatistics.o-1);

      state.gameGrid.should.be.equal([["x","o",""],
                                      ["","o","x"],
                                      ["x","o",""]]);
    });

    it("should be able to handle victory if 3 'x' or 'o' in one column", () => {
      state.gameGrid = [["x","o","o"],
                        ["","o","x"],
                        ["x","",""]];
      state.currentTurn = "x";
      previousState = state;

      state = game(state, gridChangedAction(1,0));
      state.should.be.not.eql(previousState);

      previousState.victoryStatistics.x
        .should.be.equal(state.victoryStatistics.x-1);

      state.gameGrid.should.be.equal([["x","o","o"],
                                      ["x","o","x"],
                                      ["x","",""]]);
    });

    it("should be able to handle victory if 3 'x' or 'o' in one column", () => {
      state.gameGrid = [["x","","o"],
                        ["","x",""],
                        ["x","","o"]];
      state.currentTurn = "o";
      previousState = state;

      state = game(state, gridChangedAction(1,2));
      state.should.be.not.eql(previousState);

      previousState.victoryStatistics.o
        .should.be.equal(state.victoryStatistics.o-1);

      state.gameGrid.should.be.equal([["x","","o"],
                                      ["","x",""],
                                      ["x","","o"]]);
    });

    it("should be able to handle victory if 3 'x' or 'o' in diagonal", () => {
      state.gameGrid = [["x","o","o"],
                        ["o","",""],
                        ["x","","x"]];
      state.currentTurn = "o";
      previousState = state;

      state = game(state, gridChangedAction(1,1));
      state.should.be.not.eql(previousState);

      previousState.victoryStatistics.x
        .should.be.equal(state.victoryStatistics.x-1);

      state.gameGrid.should.be.equal([["x","o","o"],
                                      ["o","x",""],
                                      ["x","","o"]]);
    });

    it("should be able to handle victory if 3 'x' or 'o' in diagonal", () => {
      state.gameGrid = [["x","","o"],
                        ["x","",""],
                        ["o","","x"]];
      state.currentTurn = "o";
      previousState = state;

      state = game(state, gridChangedAction(1,1));
      state.should.be.not.eql(previousState);

      previousState.victoryStatistics.o
        .should.be.equal(state.victoryStatistics.o-1);

      state.gameGrid.should.be.equal([["x","","o"],
                                      ["x","o",""],
                                      ["o","","x"]]);
    });

    it("should be able to handle tie", () => {
      state.gameGrid = [["x","o","x"],
                        ["o","x",""],
                        ["o","x","o"]];
      state.currentTurn = "x";
      previousState = state;

      state = game(state, gridChangedAction(1,1));
      state.should.be.not.eql(previousState);

      previousState.victoryStatistics.o
        .should.be.equal(state.victoryStatistics.o);
      previousState.victoryStatistics.x
        .should.be.equal(state.victoryStatistics.x);

      state.gameGrid.should.be.equal([["x","o","x"],
                                      ["o","x","x"],
                                      ["o","x","o"]]);
    });

    it("should be able to handle tie", () => {
      state.gameGrid = [["x","o","x"],
                        ["o","x","x"],
                        ["o","","o"]];
      state.currentTurn = "x";
      previousState = state;

      state = game(state, gridChangedAction(2,1));
      state.should.be.not.eql(previousState);

      previousState.victoryStatistics.o
        .should.be.equal(state.victoryStatistics.o);
      previousState.victoryStatistics.x
        .should.be.equal(state.victoryStatistics.x);

      state.gameGrid.should.be.equal([["x","o","x"],
                                      ["o","x","x"],
                                      ["o","x","o"]]);
    });

  });

});
