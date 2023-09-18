import { visualizeDijkstra } from "../algorithms/dijkstra/dijkstraAnimation";

const Navbar = ({ grid, START_NODE, FINISH_NODE }) => {
  return (
    <button
      onClick={() => visualizeDijkstra(grid, START_NODE, FINISH_NODE)}
      className="m-2"
    >
      Visualize Dijkstra&apos;s Algorithm
    </button>
  );
};

export default Navbar;
