import { visualizeDijkstra } from "../algorithms/dijkstra/dijkstraAnimation";

const Navbar = ({ grid }) => {
  return (
    <button onClick={() => visualizeDijkstra(grid)} className="m-2">
      Visualize Dijkstra&apos;s Algorithm
    </button>
  );
};

export default Navbar;
