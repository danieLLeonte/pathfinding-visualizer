import { useState } from 'react';

import './App.css'

import Node from './components/Node';
import { getInitialGrid } from './utils/gridUtils';

function App() {
  const [grid, setGrid] = useState(getInitialGrid());

  return (
    <>
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
