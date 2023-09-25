import { FaWeightHanging } from "react-icons/fa";
import { BsFillRocketFill } from "react-icons/bs";
import { GiPlanetConquest } from "react-icons/gi";

const Node = ({
  col,
  row,
  status,
  onMouseDown,
  onMouseEnter,
  onMouseUp,
  isVisualizing,
}) => {
  const getStatusClass = (status) => {
    switch (status) {
      case "start":
        return "bg-green-500";
      case "finish":
        return "bg-red-500";
      case "visited":
        return "bg-yellow-500";
      case "shortest-path":
        return "bg-blue-500";
      case "wall":
        return "bg-gray-500";
      case "weight":
        return "bg-purple-500";
      case "weight-visited":
        return "bg-yellow-700";
      case "weight-shortest-path":
        return "bg-blue-700";
      default:
        return "";
    }
  };

  const extraClassName = getStatusClass(status);

  return (
    <div
      id={`node-${row}-${col}`}
      className={`${extraClassName} border border-gray-400 w-8 h-8 flex justify-center items-center`}
      onMouseDown={isVisualizing ? null : () => onMouseDown(row, col)}
      onMouseEnter={isVisualizing ? null : () => onMouseEnter(row, col)}
      onMouseUp={isVisualizing ? null : onMouseUp}
    >
      {status.includes("weight") ? (
        <FaWeightHanging className="text-white" />
      ) : status === "start" ? (
        <BsFillRocketFill className="text-white text-xl" />
      ) : status === "finish" ? (
        <GiPlanetConquest className="text-white text-2xl" />
      ) : null}
    </div>
  );
};

export default Node;
