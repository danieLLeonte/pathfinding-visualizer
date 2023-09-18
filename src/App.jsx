import { useState } from "react";

import "./App.css";

import { getInitialGrid } from "./utils/gridUtils";
import Grid from "./components/Grid";
import Navbar from "./components/Navbar";

const START_NODE = { ROW: 19, COL: 9 };
const FINISH_NODE = { ROW: 10, COL: 39 };

const App = () => {
  const [grid, setGrid] = useState(getInitialGrid(START_NODE, FINISH_NODE));

  return (
    <>
      <Navbar grid={grid} START_NODE={START_NODE} FINISH_NODE={FINISH_NODE} />
      <Grid grid={grid} />
    </>
  );
};

export default App;
