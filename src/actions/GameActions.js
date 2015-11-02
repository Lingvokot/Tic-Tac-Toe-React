// Game action types
export const GRID_CHANGED = "GRID_CHANGED";

// GRID_CHANGED action creator
export function changeGridAction(x, y) {
  return {
    x: x,
    y: y,
    type: GRID_CHANGED
  };
}
