export const getInitialGrid = (START_NODE, FINISH_NODE) => {
  const grid = [];
  for (let row = 0; row < 20; row++) {
    const currentRow = [];
    for (let col = 0; col < 50; col++) {
      currentRow.push(createNode(col, row, START_NODE, FINISH_NODE));
    }
    grid.push(currentRow);
  }
  return grid;
};

const createNode = (col, row, START_NODE, FINISH_NODE) => {
  return {
    col,
    row,
    status:
      row === START_NODE.ROW && col === START_NODE.COL
        ? "start"
        : row === FINISH_NODE.ROW && col === FINISH_NODE.COL
        ? "finish"
        : "unvisited",
    distance: Infinity,
    isVisited: false,
    previousNode: null,
  };
};

export const getNewGridWithWallToggled = (grid, row, col) => {
  const newGrid = grid.slice();
  const node = newGrid[row][col];
  if (node.status === "start" || node.status === "finish") return newGrid;
  const newNode = {
    ...node,
    status: node.status === "wall" ? "unvisited" : "wall",
  };
  newGrid[row][col] = newNode;
  return newGrid;
};
