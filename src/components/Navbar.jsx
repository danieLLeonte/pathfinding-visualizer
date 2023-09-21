import { visualizeDijkstra } from "../algorithms/dijkstra/animation";

const Navbar = ({
  grid,
  setGrid,
  START_NODE,
  FINISH_NODE,
  isVisualizing,
  setIsVisualizing,
}) => {
  return (
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
      className="m-4"
    >
      Visualize Dijkstra&apos;s Algorithm
    </button>
  );
};

export default Navbar;
