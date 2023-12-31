const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
const gridWidth = 32;
const gridHeight = 32;
const rows = Math.floor(windowHeight / gridHeight - 6);
const cols = Math.floor(windowWidth / gridWidth - 1);

export const getStartNode = () => {
  return {
    row: Math.floor(rows / 2),
    col: Math.floor(cols / 4),
  };
};

export const getFinishNode = () => {
  return {
    row: Math.floor(rows / 2),
    col: Math.floor((3 * cols) / 4),
  };
};

export const getInitialGrid = (START_NODE, FINISH_NODE, oldGrid = null) => {
  const grid = [];
  for (let row = 0; row < rows; row++) {
    const currentRow = [];
    for (let col = 0; col < cols; col++) {
      currentRow.push(createNode(col, row, START_NODE, FINISH_NODE, oldGrid));
    }
    grid.push(currentRow);
  }
  return grid;
};

const createNode = (col, row, START_NODE, FINISH_NODE, oldGrid = null) => {
  const node = oldGrid ? oldGrid[row][col] : null;
  return {
    col,
    row,
    status:
      row === START_NODE.row && col === START_NODE.col
        ? "start"
        : row === FINISH_NODE.row && col === FINISH_NODE.col
        ? "finish"
        : oldGrid && node.status === "wall"
        ? "wall"
        : oldGrid && node.status.includes("weight")
        ? "weight"
        : "unvisited",
    distance: Infinity,
    weight: oldGrid ? node.weight : 1,
    isVisited: false,
    previousNode: null,
  };
};

export const getNewGridWithWallToggled = (grid, row, col, isAddingWeights) => {
  const newGrid = grid.slice();
  const node = newGrid[row][col];
  if (node.status === "start" || node.status === "finish") return newGrid;
  const newNode = {
    ...node,
    status: isAddingWeights
      ? node.status === "weight"
        ? "unvisited"
        : "weight"
      : node.status === "wall"
      ? "unvisited"
      : "wall",
    weight: isAddingWeights ? 15 : 1,
  };

  newGrid[row][col] = newNode;
  return newGrid;
};
