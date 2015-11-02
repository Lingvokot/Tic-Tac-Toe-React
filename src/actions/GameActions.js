// Game action types
export const GRID_CHANGED = "GRID_CHANGED";

// GRID_CHANGED action creator
const changeGridAction = function (x, y) {
  return {
    x: x,
    y: y,
    type: GRID_CHANGED
  };
}

export default changeGridAction;
