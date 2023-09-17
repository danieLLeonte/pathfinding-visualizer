import { useState } from 'react';

import './App.css'

import Node from './components/Node';
import { getInitialGrid } from './utils/gridUtils';
import { dijkstra, getNodesInShortestPathOrder } from './algorithms/dijkstra';

const START_NODE_ROW = 3;
const START_NODE_COL = 9;
const FINISH_NODE_ROW = 9;
const FINISH_NODE_COL = 49;

const App = () => {
  const [grid, setGrid] = useState(getInitialGrid());

  const animateDijkstra = (visitedNodesInOrder, nodesInShortestPathOrder) => {
    for (let i = 0; i <= visitedNodesInOrder.length; i++) {
      if (i === visitedNodesInOrder.length) {
        setTimeout(() => {
          animateShortestPath(nodesInShortestPathOrder);
        }, 10 * i);
        return;
      }
      setTimeout(() => {
        const node = visitedNodesInOrder[i];
        if (node.isStart || node.isFinish) return;
        document.getElementById(`node-${node.row}-${node.col}`).className =
          'bg-yellow-500 border border-gray-400 w-8 h-8';
      }, 10 * i);
    }
  }

  const animateShortestPath = (nodesInShortestPathOrder) => {
    for (let i = 0; i < nodesInShortestPathOrder.length; i++) {
      setTimeout(() => {
        const node = nodesInShortestPathOrder[i];
        document.getElementById(`node-${node.row}-${node.col}`).className =
          'bg-green-500 border border-gray-400 w-8 h-8';
      }, 50 * i);
    }
  }

  const visualizeDijkstra = () => {
    const startNode = grid[START_NODE_ROW][START_NODE_COL];
    const finishNode = grid[FINISH_NODE_ROW][FINISH_NODE_COL];
    const visitedNodesInOrder = dijkstra(grid, startNode, finishNode);
    const nodesInShortestPathOrder = getNodesInShortestPathOrder(finishNode);
    animateDijkstra(visitedNodesInOrder, nodesInShortestPathOrder);
  }

  return (
    <>
      <button onClick={visualizeDijkstra} className="m-2">
        Visualize Dijkstra's Algorithm
      </button>
      <div className="grid justify-center">
        {grid.map((row, rowIdx) => {
          return (
            <div key={rowIdx} className="flex">
              {row.map((node, nodeIdx) => {
                const { row, col, isStart, isFinish } = node;
                return (
                  <Node
                    key={nodeIdx}
                    col={col}
                    row={row}
                    isStart={isStart}
                    isFinish={isFinish}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  )
}

export default App
