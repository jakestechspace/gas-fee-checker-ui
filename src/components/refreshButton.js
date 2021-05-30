function RefreshButton({ refresh }) {
  return (
    <div className="refresh">
      <button onClick={refresh}>refresh</button>
    </div>
  );
}

export default RefreshButton;