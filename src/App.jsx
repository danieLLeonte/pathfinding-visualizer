import { useEffect, useState } from "react";

import "./App.css";

import { getInitialGrid } from "./utils/gridUtils";
import Grid from "./components/Grid";
import Navbar from "./components/Navbar";

const START_NODE = { ROW: 19, COL: 9 };
const FINISH_NODE = { ROW: 10, COL: 39 };

const App = () => {
  const [grid, setGrid] = useState([]);

  useEffect(() => {
    setGrid(
      getInitialGrid(
        START_NODE.ROW,
        START_NODE.COL,
        FINISH_NODE.ROW,
        FINISH_NODE.COL
      )
    );
  }, []);

  return (
    <>
      <Navbar grid={grid} />
      <Grid grid={grid} />
    </>
  );
};

export default App;
