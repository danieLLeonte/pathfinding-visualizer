import { getInitialGrid } from "../../utils/gridUtils";
import { dijkstra, getNodesInShortestPathOrder } from "./algorithm";

let wasVisualized = false;

const animateDijkstra = (
  grid,
  setGrid,
  visitedNodesInOrder,
  nodesInShortestPathOrder,
  setIsVisualizing
) => {
  for (let i = 0; i <= visitedNodesInOrder.length; i++) {
    setTimeout(() => {
      if (i === visitedNodesInOrder.length) {
        animateShortestPath(
          grid,
          setGrid,
          nodesInShortestPathOrder,
          setIsVisualizing
        );
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

const animateShortestPath = (
  grid,
  setGrid,
  nodesInShortestPathOrder,
  setIsVisualizing
) => {
  for (let i = 0; i < nodesInShortestPathOrder.length; i++) {
    setTimeout(() => {
      if (i === nodesInShortestPathOrder.length - 1) {
        setIsVisualizing(false);
        wasVisualized = true;
      }

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

export const visualizeDijkstra = (
  grid,
  setGrid,
  START_NODE,
  FINISH_NODE,
  isVisualizing,
  setIsVisualizing
) => {
  if (isVisualizing) return;
  setIsVisualizing(true);
  if (wasVisualized) {
    const newGrid = getInitialGrid(START_NODE, FINISH_NODE, grid);
    grid = newGrid;
    setGrid(newGrid);
    wasVisualized = false;
  }
  const startNode = grid[START_NODE.ROW][START_NODE.COL];
  const finishNode = grid[FINISH_NODE.ROW][FINISH_NODE.COL];
  const visitedNodesInOrder = dijkstra(grid, startNode, finishNode);
  const nodesInShortestPathOrder = getNodesInShortestPathOrder(finishNode);
  animateDijkstra(
    grid,
    setGrid,
    visitedNodesInOrder,
    nodesInShortestPathOrder,
    setIsVisualizing
  );
};
