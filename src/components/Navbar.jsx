import { FaWeightHanging } from "react-icons/fa";
import { BsFillRocketFill } from "react-icons/bs";
import { GiPlanetConquest } from "react-icons/gi";

import { visualizeDijkstra } from "../algorithms/dijkstra/animation";

const ActionBar = ({
  grid,
  setGrid,
  START_NODE,
  FINISH_NODE,
  isVisualizing,
  setIsVisualizing,
  resetAllStates,
}) => (
  <div className="flex justify-center gap-6">
    <button
      onClick={() =>
        visualizeDijkstra(
          grid,
          setGrid,
          START_NODE,
          FINISH_NODE,
          isVisualizing,
          setIsVisualizing
        )
      }
      className="bg-green-500 font-bold"
    >
      Visualize Dijkstra&apos;s Algorithm
    </button>
    <button onClick={() => resetAllStates()} className="bg-red-500 font-bold">
      Clear Board
    </button>
  </div>
);

const Legend = () => (
  <div className="justify-center gap-6 px-6 hidden lg:flex">
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-green-500 flex justify-center items-center">
        <BsFillRocketFill className="text-white text-xl" />
      </div>
      <p>Start Node</p>
    </div>
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-red-500 flex justify-center items-center">
        <GiPlanetConquest className="text-white text-2xl" />
      </div>
      <p>Finish Node</p>
    </div>
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-purple-500 flex justify-center items-center">
        <FaWeightHanging className="text-white" />
      </div>
      <p>
        Weight Node
        <span className="text-xs text-gray-500"> (Hold W and Click)</span>
      </p>
    </div>
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-gray-500"></div>
      <p>
        Wall Node
        <span className="text-xs text-gray-500"> (Click)</span>
      </p>
    </div>
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-yellow-500"></div>
      <p>Visited Node</p>
    </div>
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-blue-500"></div>
      <p>Shortest Path Node</p>
    </div>
  </div>
);

const Navbar = ({
  grid,
  setGrid,
  START_NODE,
  FINISH_NODE,
  isVisualizing,
  setIsVisualizing,
  resetAllStates,
}) => {
  return (
    <>
      <nav className="flex justify-between items-center bg-gray-800 py-4 px-6">
        <a href="/" className="text-white font-bold">
          <h1 className="text-2xl hidden sm:block">Pathfinding Visualizer</h1>
        </a>
        <ActionBar
          grid={grid}
          setGrid={setGrid}
          START_NODE={START_NODE}
          FINISH_NODE={FINISH_NODE}
          isVisualizing={isVisualizing}
          setIsVisualizing={setIsVisualizing}
          resetAllStates={resetAllStates}
        />
      </nav>
      <Legend />
    </>
  );
};

export default Navbar;
