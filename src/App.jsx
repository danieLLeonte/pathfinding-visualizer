import { useEffect, useState } from "react";

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
  const [isAddingWeights, setIsAddingWeights] = useState(false);

  const handleKeyDown = (event) => {
    if (event.key === "w") {
      setIsAddingWeights(true);
    }
  };

  const handleKeyUp = (event) => {
    if (event.key === "w") {
      setIsAddingWeights(false);
    }
  };

  useEffect(() => {
    setGrid(getInitialGrid(START_NODE, FINISH_NODE, grid));

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
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

    const newGrid = getNewGridWithWallToggled(grid, row, col, isAddingWeights);
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

    const newGrid = getNewGridWithWallToggled(grid, row, col, isAddingWeights);
    setGrid(newGrid);
  };

  const handleMouseUp = () => {
    setMouseIsPressed(false);
    setIsStartNodeMoving(false);
    setIsFinishNodeMoving(false);
  };

  return (
    <div className="flex flex-col gap-6">
      <Navbar
        grid={grid}
        setGrid={setGrid}
        START_NODE={START_NODE}
        FINISH_NODE={FINISH_NODE}
        isVisualizing={isVisualizing}
        setIsVisualizing={setIsVisualizing}
        resetAllStates={resetAllStates}
      />
      <main className="mt-2">
        <Grid
          grid={grid}
          handleMouseDown={handleMouseDown}
          handleMouseEnter={handleMouseEnter}
          handleMouseUp={handleMouseUp}
          isVisualizing={isVisualizing}
        />
      </main>
    </div>
  );
};

export default App;
