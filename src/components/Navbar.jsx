import { visualizeDijkstra } from "../algorithms/dijkstra/animation";

const Navbar = ({ grid, setGrid, START_NODE, FINISH_NODE }) => {
  return (
    <button
      onClick={() => visualizeDijkstra(grid, setGrid, START_NODE, FINISH_NODE)}
      className="m-2"
    >
      Visualize Dijkstra&apos;s Algorithm
    </button>
  );
};

export default Navbar;
