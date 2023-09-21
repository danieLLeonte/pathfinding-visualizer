import { useState } from "react";
import "./App.css";

import {
  getFinishNode,
  getInitialGrid,
  getNewGridWithWallToggled,
  getStartNode,
} from "./utils/gridUtils";
import Grid from "./components/Grid";
import Navbar from "./components/Navbar";

const START_NODE = getStartNode();
const FINISH_NODE = getFinishNode();

const App = () => {
  const [grid, setGrid] = useState(getInitialGrid(START_NODE, FINISH_NODE));
  const [mouseIsPressed, setMouseIsPressed] = useState(false);
  const [isVisualizing, setIsVisualizing] = useState(false);

  const resetAllStates = () => {
    if (isVisualizing) return;
    setGrid(getInitialGrid(START_NODE, FINISH_NODE));
    setMouseIsPressed(false);
    setIsVisualizing(false);
  };

  const handleMouseDown = (row, col) => {
    const newGrid = getNewGridWithWallToggled(grid, row, col);
    setGrid(newGrid);
    setMouseIsPressed(true);
  };

  const handleMouseEnter = (row, col) => {
    if (!mouseIsPressed) return;
    const newGrid = getNewGridWithWallToggled(grid, row, col);
    setGrid(newGrid);
  };

  const handleMouseUp = () => {
    setMouseIsPressed(false);
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
      <Grid
        grid={grid}
        handleMouseDown={handleMouseDown}
        handleMouseEnter={handleMouseEnter}
        handleMouseUp={handleMouseUp}
        isVisualizing={isVisualizing}
      />
    </>
  );
};

export default App;
