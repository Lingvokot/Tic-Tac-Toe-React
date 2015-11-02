import changeGridAction, {GRID_CHANGED} from "../../src/actions/GameActions.js";

describe("Game Actions", () => {

  it("should exist", () => {
    changeGridAction.should.exist;
  });

  it("should be a function", () => {
    changeGridAction.should.be.function;
  });

  it("should create action of type GRID_CHANGED", () => {
    const action = changeGridAction();
    action.type.should.be.equal(GRID_CHANGED);
  });

  it("should have props x, y equal to function arguments", () => {
    var action = changeGridAction(0,0);

    const gridChangedAt00 = {
      x: 0,
      y: 0,
      type: GRID_CHANGED
    };

    action.should.be.eql(gridChangedAt00);

    action = changeGridAction(2,1);

    const gridChangedAt21 = {
      x: 2,
      y: 1,
      type: GRID_CHANGED
    };

    action.should.be.eql(gridChangedAt21);
  });


});
