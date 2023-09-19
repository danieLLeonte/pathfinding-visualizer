import { dijkstra, getNodesInShortestPathOrder } from "./algorithm";

const animateDijkstra = (
  grid,
  setGrid,
  visitedNodesInOrder,
  nodesInShortestPathOrder
) => {
  for (let i = 0; i <= visitedNodesInOrder.length; i++) {
    setTimeout(() => {
      if (i === visitedNodesInOrder.length) {
        animateShortestPath(grid, setGrid, nodesInShortestPathOrder);
        return;
      }

      const node = visitedNodesInOrder[i];
      if (node.status === "start" || node.status === "finish") return;

      const newGrid = grid.slice();
      const newNode = {
        ...node,
        status: "visited",
      };
      newGrid[node.row][node.col] = newNode;

      setGrid(newGrid);
    }, 2 * i);
  }
};

const animateShortestPath = (grid, setGrid, nodesInShortestPathOrder) => {
  for (let i = 0; i < nodesInShortestPathOrder.length; i++) {
    setTimeout(() => {
      const node = nodesInShortestPathOrder[i];
      if (node.status === "start" || node.status === "finish") return;

      const newGrid = grid.slice();
      const newNode = {
        ...node,
        status: "shortest-path",
      };
      newGrid[node.row][node.col] = newNode;

      setGrid(newGrid);
    }, 10 * i);
  }
};

export const visualizeDijkstra = (grid, setGrid, START_NODE, FINISH_NODE) => {
  const startNode = grid[START_NODE.ROW][START_NODE.COL];
  const finishNode = grid[FINISH_NODE.ROW][FINISH_NODE.COL];
  const visitedNodesInOrder = dijkstra(grid, startNode, finishNode);
  const nodesInShortestPathOrder = getNodesInShortestPathOrder(finishNode);
  animateDijkstra(grid, setGrid, visitedNodesInOrder, nodesInShortestPathOrder);
};
