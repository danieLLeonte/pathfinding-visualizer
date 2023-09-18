import Node from "./Node";

const Row = ({ row }) => (
  <div className="flex">
    {row.map((node, nodeIdx) => {
      const { row, col, isStart, isFinish } = node;
      return (
        <Node
          key={nodeIdx}
          col={col}
          row={row}
          isStart={isStart}
          isFinish={isFinish}
        />
      );
    })}
  </div>
);

const Grid = ({ grid }) => (
  <div className="grid justify-center">
    {grid.map((row, rowIdx) => (
      <Row key={rowIdx} row={row} />
    ))}
  </div>
);

export default Grid;
