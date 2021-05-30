function StatsComponent({ blockNum, block_time: blockTime }) {
  return (
    <div className="stats">
      <p>Average time to mine a single block: <span>{blockTime.toFixed(2)}</span> seconds</p>
      <p>Last block number: <span>{blockNum}</span></p>
    </div>
  );
}

export default StatsComponent;