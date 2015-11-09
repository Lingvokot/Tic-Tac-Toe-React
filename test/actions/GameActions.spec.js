import { playerMoveAction, PLAYER_MOVE } from "src/actions/GameActions.js";
import { computerMoveAction, COMPUTER_MOVE } from "src/actions/GameActions.js";
import { resetGameAction, RESET_GAME } from "src/actions/GameActions.js";

describe("Game Actions", () => {

  it("should exist", () => {
    playerMoveAction.should.exist;
    computerMoveAction.should.exist;
    resetGameAction.should.exist;
  });

  it("should be a function", () => {
    playerMoveAction.should.be.function;
    computerMoveAction.should.be.function;
    resetGameAction.should.be.function;
  });

  describe("playerMoveAction", () => {

    it("should create action of type PLAYER_MOVE", () => {
      const action = playerMoveAction(0,0);
      action.type.should.be.equal(PLAYER_MOVE);
    });

    it("should have props x, y equal to function arguments", () => {
      var action = playerMoveAction(0,0);

      const playerMoveAt00 = {
        x: 0,
        y: 0,
        type: PLAYER_MOVE
      };

      action.should.be.eql(playerMoveAt00);
    });

    it("should have props x, y equal to function arguments", () => {
      var action = playerMoveAction(2,1);

      const playerMoveAt21 = {
        x: 2,
        y: 1,
        type: PLAYER_MOVE
      };

      action.should.be.eql(playerMoveAt21);
    });

  });

  describe("computerMoveAction", () => {

    it("should create action of type COMPUTER_MOVE", () => {
      const action = computerMoveAction();
      action.type.should.be.equal(COMPUTER_MOVE);
    });

    it("should have nothing else but action type", () => {
      var action = computerMoveAction( );

      const computerMove = {
        type: COMPUTER_MOVE
      };

      action.should.be.eql(computerMove);
    });

  });

  describe("resetGameAction", () => {

    it("should create action of type RESET_GAME", () => {
      const action = resetGameAction();
      action.type.should.be.equal(RESET_GAME);
    });

    it("should have props x, y equal to function arguments", () => {
      var action = resetGameAction();

      const computerMove = {
        type: RESET_GAME
      };

      action.should.be.eql(computerMove);
    });

  });

});
