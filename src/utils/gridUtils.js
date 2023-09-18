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
    isStart: row === START_NODE.ROW && col === START_NODE.COL,
    isFinish: row === FINISH_NODE.ROW && col === FINISH_NODE.COL,
    distance: Infinity,
    isVisited: false,
    isWall: false,
    previousNode: null,
  };
};
