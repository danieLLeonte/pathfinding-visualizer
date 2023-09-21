import { visualizeDijkstra } from "../algorithms/dijkstra/animation";

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
    <div className="flex justify-center gap-4 m-4">
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
};

export default Navbar;
