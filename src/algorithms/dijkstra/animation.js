import { dijkstra, getNodesInShortestPathOrder } from "./algorithm";

const animateDijkstra = (visitedNodesInOrder, nodesInShortestPathOrder) => {
  for (let i = 0; i <= visitedNodesInOrder.length; i++) {
    if (i === visitedNodesInOrder.length) {
      setTimeout(() => {
        animateShortestPath(nodesInShortestPathOrder);
      }, 2 * i);
      return;
    }
    setTimeout(() => {
      const node = visitedNodesInOrder[i];
      if (node.isStart || node.isFinish) return;
      document.getElementById(`node-${node.row}-${node.col}`).className =
        "bg-yellow-500 border border-gray-400 w-8 h-8";
    }, 2 * i);
  }
};

const animateShortestPath = (nodesInShortestPathOrder) => {
  for (let i = 0; i < nodesInShortestPathOrder.length; i++) {
    setTimeout(() => {
      const node = nodesInShortestPathOrder[i];
      if (node.isStart || node.isFinish) return;
      document.getElementById(`node-${node.row}-${node.col}`).className =
        "bg-green-600 border border-gray-400 w-8 h-8";
    }, 10 * i);
  }
};

export const visualizeDijkstra = (grid, START_NODE, FINISH_NODE) => {
  const startNode = grid[START_NODE.ROW][START_NODE.COL];
  const finishNode = grid[FINISH_NODE.ROW][FINISH_NODE.COL];
  const visitedNodesInOrder = dijkstra(grid, startNode, finishNode);
  const nodesInShortestPathOrder = getNodesInShortestPathOrder(finishNode);
  animateDijkstra(visitedNodesInOrder, nodesInShortestPathOrder);
};
