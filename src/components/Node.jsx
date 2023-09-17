const Node = ({ col, row, isStart, isFinish, isWall }) => {
  const extraClassName = isStart
    ? 'bg-green-500'
    : isFinish
    ? 'bg-red-500'
    : isWall
    ? 'bg-gray-500'
    : '';

  return (
    <div
      id={`node-${row}-${col}`}
      className={`${extraClassName} border border-gray-400 w-8 h-8`}
    />
  )
}

export default Node
