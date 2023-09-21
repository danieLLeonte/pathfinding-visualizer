import { visualizeDijkstra } from "../algorithms/dijkstra/animation";
import { clearBoard } from "../utils/gridUtils";

const Navbar = ({
  grid,
  setGrid,
  START_NODE,
  FINISH_NODE,
  isVisualizing,
  setIsVisualizing,
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
      <button
        onClick={() => clearBoard(setGrid, isVisualizing)}
        className="bg-red-500 font-bold"
      >
        Clear Board
      </button>
    </div>
  );
};

export default Navbar;
