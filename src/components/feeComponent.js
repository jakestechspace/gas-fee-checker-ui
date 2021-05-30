function FeeComponent({ speed, fee, wait}) {
  return (
    <div className="fee">
      <h2>{speed}</h2>
      <p>{fee} gwei</p>
      <span>{wait} minutes</span>
    </div>
  );
}

export default FeeComponent;