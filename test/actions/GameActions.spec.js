import { applyMoveAction, APPLY_MOVE } from "src/actions/GameActions.js";
import { startNextMacthAction,
         START_NEXT_MATCH } from "src/actions/GameActions.js";
import { resetGameAction, RESET_GAME } from "src/actions/GameActions.js";
import { setGameModeAction, SET_GAME_MODE } from "src/actions/GameActions.js";

describe("Game Actions", () => {

  it("should exist", () => {
    applyMoveAction.should.exist;
    startNextMacthAction.should.exist;
    resetGameAction.should.exist;
    setGameModeAction.should.exist;
  });

  it("should be a function", () => {
    applyMoveAction.should.be.function;
    startNextMacthAction.should.be.function;
    resetGameAction.should.be.function;
    setGameModeAction.should.be.function;
  });

  describe("applyMoveAction", () => {

    it("should create action of type APPLY_MOVE", () => {
      const action = applyMoveAction(0,0);
      action.type.should.be.equal(APPLY_MOVE);
    });

    it("should have props x, y equal to function arguments", () => {
      var action = applyMoveAction(0,0);

      const playerMoveAt00 = {
        x: 0,
        y: 0,
        type: APPLY_MOVE
      };

      action.should.be.eql(playerMoveAt00);
    });

    it("should have props x, y equal to function arguments", () => {
      var action = applyMoveAction(2,1);

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
      const action = startNextMacthAction();
      action.type.should.be.equal(START_NEXT_MATCH);
    });

    it("should have nothing else but action type", () => {
      var action = startNextMacthAction();

      const startNextMatch = {
        type: START_NEXT_MATCH
      };

      action.should.be.eql(startNextMatch);
    });

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

});
