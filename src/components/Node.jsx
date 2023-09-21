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
        return "bg-green-600";
      case "wall":
        return "bg-gray-500";
      default:
        return "";
    }
  };

  const extraClassName = getStatusClass(status);

  return (
    <div
      id={`node-${row}-${col}`}
      className={`${extraClassName} border border-gray-400 w-8 h-8`}
      onMouseDown={isVisualizing ? null : () => onMouseDown(row, col)}
      onMouseEnter={isVisualizing ? null : () => onMouseEnter(row, col)}
      onMouseUp={isVisualizing ? null : onMouseUp}
    />
  );
};

export default Node;
