import { useEffect, useState } from "react";
import "./App.css";

import {
  getFinishNode,
  getInitialGrid,
  getNewGridWithWallToggled,
  getStartNode,
} from "./utils/gridUtils";
import Grid from "./components/Grid";
import Navbar from "./components/Navbar";

const App = () => {
  const [START_NODE, setStartNode] = useState(getStartNode());
  const [FINISH_NODE, setFinishNode] = useState(getFinishNode());
  const [grid, setGrid] = useState(getInitialGrid(START_NODE, FINISH_NODE));
  const [mouseIsPressed, setMouseIsPressed] = useState(false);
  const [isVisualizing, setIsVisualizing] = useState(false);
  const [isStartNodeMoving, setIsStartNodeMoving] = useState(false);
  const [isFinishNodeMoving, setIsFinishNodeMoving] = useState(false);

  useEffect(() => {
    setGrid(getInitialGrid(START_NODE, FINISH_NODE, grid));
  }, [START_NODE, FINISH_NODE]);

  const resetAllStates = () => {
    if (isVisualizing) return;
    setStartNode(getStartNode());
    setFinishNode(getFinishNode());
    setGrid(getInitialGrid(START_NODE, FINISH_NODE));
    setMouseIsPressed(false);
    setIsVisualizing(false);
    setIsStartNodeMoving(false);
    setIsFinishNodeMoving(false);
  };

  const handleMouseDown = (row, col) => {
    setMouseIsPressed(true);

    // allow user to move start and finish nodes
    if (grid[row][col].status === "start" && !isStartNodeMoving) {
      setIsStartNodeMoving(true);
      return;
    } else if (grid[row][col].status === "finish" && !isFinishNodeMoving) {
      setIsFinishNodeMoving(true);
      return;
    }

    const newGrid = getNewGridWithWallToggled(grid, row, col);
    setGrid(newGrid);
  };

  const handleMouseEnter = (row, col) => {
    if (!mouseIsPressed) return;

    if (isStartNodeMoving) {
      setStartNode({ row, col });
      return;
    } else if (isFinishNodeMoving) {
      setFinishNode({ row, col });
      return;
    }

    const newGrid = getNewGridWithWallToggled(grid, row, col);
    setGrid(newGrid);
  };

  const handleMouseUp = () => {
    setMouseIsPressed(false);
    setIsStartNodeMoving(false);
    setIsFinishNodeMoving(false);
  };

  return (
    <>
      <Navbar
        grid={grid}
        setGrid={setGrid}
        START_NODE={START_NODE}
        FINISH_NODE={FINISH_NODE}
        isVisualizing={isVisualizing}
        setIsVisualizing={setIsVisualizing}
        resetAllStates={resetAllStates}
      />
      <div
        onMouseLeave={handleMouseUp}
      >
        <Grid
          grid={grid}
          handleMouseDown={handleMouseDown}
          handleMouseEnter={handleMouseEnter}
          handleMouseUp={handleMouseUp}
          isVisualizing={isVisualizing}
        />
      </div>
    </>
  );
};

export default App;
