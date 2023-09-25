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
  <div className="flex justify-center gap-4">
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
    >
      Visualize Dijkstra&apos;s Algorithm
    </button>
    <button onClick={() => resetAllStates()} className="bg-red-500 font-bold">
      Clear Board
    </button>
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
    <nav className="flex justify-between items-center bg-gray-800 p-4">
      <h1 className="font-bold text-xl">Pathfinding Visualizer</h1>
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
  );
};

export default Navbar;
