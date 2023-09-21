import { useState } from "react";

import "./App.css";

import { getInitialGrid, getNewGridWithWallToggled } from "./utils/gridUtils";
import Grid from "./components/Grid";
import Navbar from "./components/Navbar";

const START_NODE = { ROW: 9, COL: 9 };
const FINISH_NODE = { ROW: 9, COL: 40 };

const App = () => {
  const [grid, setGrid] = useState(getInitialGrid(START_NODE, FINISH_NODE));
  const [mouseIsPressed, setMouseIsPressed] = useState(false);
  const [isVisualizing, setIsVisualizing] = useState(false);

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
