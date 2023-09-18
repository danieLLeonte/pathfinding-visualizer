import Node from "./Node";

const Row = ({ row, handleMouseDown, handleMouseEnter, handleMouseUp }) => (
  <div className="flex">
    {row.map((node, nodeIdx) => {
      const { row, col, isStart, isFinish, isWall } = node;
      return (
        <Node
          key={nodeIdx}
          col={col}
          row={row}
          isStart={isStart}
          isFinish={isFinish}
          isWall={isWall}
          onMouseDown={handleMouseDown}
          onMouseEnter={handleMouseEnter}
          onMouseUp={handleMouseUp}
        />
      );
    })}
  </div>
);

const Grid = ({ grid, handleMouseDown, handleMouseEnter, handleMouseUp }) => (
  <div className="grid justify-center">
    {grid.map((row, rowIdx) => (
      <Row
        key={rowIdx}
        row={row}
        handleMouseDown={handleMouseDown}
        handleMouseEnter={handleMouseEnter}
        handleMouseUp={handleMouseUp}
      />
    ))}
  </div>
);

export default Grid;
