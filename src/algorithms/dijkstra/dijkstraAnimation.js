import { dijkstra, getNodesInShortestPathOrder } from "./dijkstra";

const START_NODE = { ROW: 19, COL: 9 };
const FINISH_NODE = { ROW: 10, COL: 39 };

const animateDijkstra = (visitedNodesInOrder, nodesInShortestPathOrder) => {
  for (let i = 0; i <= visitedNodesInOrder.length; i++) {
    if (i === visitedNodesInOrder.length) {
      setTimeout(() => {
        animateShortestPath(nodesInShortestPathOrder);
      }, 5 * i);
      return;
    }
    setTimeout(() => {
      const node = visitedNodesInOrder[i];
      if (node.isStart || node.isFinish) return;
      document.getElementById(`node-${node.row}-${node.col}`).className =
        "bg-yellow-500 border border-gray-400 w-8 h-8";
    }, 5 * i);
  }
};

const animateShortestPath = (nodesInShortestPathOrder) => {
  for (let i = 0; i < nodesInShortestPathOrder.length; i++) {
    setTimeout(() => {
      const node = nodesInShortestPathOrder[i];
      document.getElementById(`node-${node.row}-${node.col}`).className =
        "bg-green-500 border border-gray-400 w-8 h-8";
    }, 15 * i);
  }
};

export const visualizeDijkstra = (grid) => {
  const startNode = grid[START_NODE.ROW][START_NODE.COL];
  const finishNode = grid[FINISH_NODE.ROW][FINISH_NODE.COL];
  const visitedNodesInOrder = dijkstra(grid, startNode, finishNode);
  const nodesInShortestPathOrder = getNodesInShortestPathOrder(finishNode);
  animateDijkstra(visitedNodesInOrder, nodesInShortestPathOrder);
};
