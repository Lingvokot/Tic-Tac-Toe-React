import game from "../../src/reducers/Game.js";
import changeGridAction from "../../src/actions/GameActions.js";

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
    previousState;

    it("should change grid cell if specified", () => {
      previousState = state;
      state = game(state, changeGridAction(0,0));
      state.should.be.not.equal(previousState);
      state.currentTurn.should.be.equal("o");
      state.gameGrid.should.be.eql([["x","",""],
                                      ["","",""],
                                      ["","",""]])
    });

    it("should change nothing if cell is already used", () => {
      previousState = state;
      state = game(state, changeGridAction(0,0));
      state.should.be.equal(previousState);
      state.currentTurn.should.be.equal("o");
    });

    it("should be able to handle victory if 3 'x' or 'o' in one row", () => {
      state.gameGrid = [["x","x",""],
                        ["o","o",""],
                        ["","",""]];
      state.currentTurn = "x";
      previousState = state;

      state = game(state, changeGridAction(0,2));
      state.should.be.not.equal(previousState);

      previousState.victoryStatistics.x
        .should.be.equal(state.victoryStatistics.x-1);
    });

    it("should be able to handle victory if 3 'x' or 'o' in one row", () => {
      state.gameGrid = [["x","x",""],
                        ["o","o",""],
                        ["x","",""]];
      state.currentTurn = "o";
      previousState = state;

      state = game(state, changeGridAction(1,2));
      state.should.be.not.equal(previousState);

      previousState.victoryStatistics.o
        .should.be.equal(state.victoryStatistics.o-1);
      });

    it("should be able to handle victory if 3 'x' or 'o' in one row", () => {
      state.gameGrid = [["x","o",""],
                        ["o","o",""],
                        ["x","x",""]];
      state.currentTurn = "x";
      previousState = state;

      state = game(state, changeGridAction(2,2));
      state.should.be.not.equal(previousState);

      previousState.victoryStatistics.x
        .should.be.equal(state.victoryStatistics.x-1);
    });

    it("should be able to handle victory if 3 'x' or 'o' in one column", () => {
      state.gameGrid = [["x","o",""],
                        ["","o","x"],
                        ["x","",""]];
      state.currentTurn = "o";
      previousState = state;

      state = game(state, changeGridAction(2,1));
      state.should.be.not.equal(previousState);

      previousState.victoryStatistics.o
        .should.be.equal(state.victoryStatistics.o-1);
    });

    it("should be able to handle victory if 3 'x' or 'o' in one column", () => {
      state.gameGrid = [["x","o","o"],
                        ["","o","x"],
                        ["x","",""]];
      state.currentTurn = "x";
      previousState = state;

      state = game(state, changeGridAction(1,0));
      state.should.be.not.equal(previousState);

      previousState.victoryStatistics.x
        .should.be.equal(state.victoryStatistics.x-1);
    });

    it("should be able to handle victory if 3 'x' or 'o' in one column", () => {
      state.gameGrid = [["x","","o"],
                        ["","x",""],
                        ["x","","o"]];
      state.currentTurn = "o";
      previousState = state;

      state = game(state, changeGridAction(1,2));
      state.should.be.not.equal(previousState);

      previousState.victoryStatistics.o
        .should.be.equal(state.victoryStatistics.o-1);
    });

    it("should be able to handle victory if 3 'x' or 'o' in diagonal", () => {
      state.gameGrid = [["x","o","o"],
                        ["o","",""],
                        ["x","","x"]];
      state.currentTurn = "x";
      previousState = state;

      state = game(state, changeGridAction(1,1));
      state.should.be.not.equal(previousState);

      previousState.victoryStatistics.x
        .should.be.equal(state.victoryStatistics.x-1);
    });

    it("should be able to handle victory if 3 'x' or 'o' in diagonal", () => {
      state.gameGrid = [["x","","o"],
                        ["x","",""],
                        ["o","","x"]];
      state.currentTurn = "o";
      previousState = state;

      state = game(state, changeGridAction(1,1));
      state.should.be.not.equal(previousState);
      previousState.victoryStatistics.o
        .should.be.equal(state.victoryStatistics.o-1);
    });

    it("should be able to handle tie", () => {
      state.gameGrid = [["x","o","x"],
                        ["o","x",""],
                        ["o","x","o"]];
      state.currentTurn = "x";
      previousState = state;

      state = game(state, changeGridAction(1,2));
      state.should.be.not.equal(previousState);

      previousState.victoryStatistics.o
        .should.be.equal(state.victoryStatistics.o);
      previousState.victoryStatistics.x
        .should.be.equal(state.victoryStatistics.x);
    });

    it("should be able to handle tie", () => {
      state.gameGrid = [["x","o","x"],
                        ["o","x","x"],
                        ["o","","o"]];
      state.currentTurn = "x";
      previousState = state;

      state = game(state, changeGridAction(2,1));
      state.should.be.not.equal(previousState);

      previousState.victoryStatistics.o
        .should.be.equal(state.victoryStatistics.o);
      previousState.victoryStatistics.x
        .should.be.equal(state.victoryStatistics.x);
    });

  });

});
