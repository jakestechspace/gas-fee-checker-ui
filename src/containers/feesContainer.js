import FeeComponent from '../components/feeComponent';
import StatsComponent from '../components/statsComponent';

function FeesContainer({ feeData, ...stats }) {
  return (
    <>
      <StatsComponent {...stats} />
      <div className="feeData">
        {feeData.map((fee, i) => {
          return <FeeComponent key={i} {...fee} />
        })}
      </div>
    </>
  );
}

export default FeesContainer;