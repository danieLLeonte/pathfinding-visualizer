const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
const gridWidth = 32;
const gridHeight = 32;
const rows = Math.floor(windowHeight / gridHeight - 8);
const cols = Math.floor(windowWidth / gridWidth - 1);

export const getStartNode = () => {
  return {
    ROW: Math.floor(rows / 2),
    COL: Math.floor(cols / 4),
  };
};

export const getFinishNode = () => {
  return {
    ROW: Math.floor(rows / 2),
    COL: Math.floor((3 * cols) / 4),
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

const createNode = (col, row, START_NODE, FINISH_NODE, oldGrid) => {
  return {
    col,
    row,
    status:
      row === START_NODE.ROW && col === START_NODE.COL
        ? "start"
        : row === FINISH_NODE.ROW && col === FINISH_NODE.COL
        ? "finish"
        : oldGrid && oldGrid[row][col].status === "wall"
        ? "wall"
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

export const clearBoard = (setGrid, isVisualizing) => {
  if (isVisualizing) return;
  const newGrid = getInitialGrid(getStartNode(), getFinishNode());
  setGrid(newGrid);
};
