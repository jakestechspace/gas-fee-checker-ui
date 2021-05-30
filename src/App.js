import './App.scss';
import { useEffect, useState } from 'react';
import fetchGasFees from './actions/fetchGasFees';
import FeesContainer from './containers/feesContainer';
import RefreshButton from './components/refreshButton';

function App() {
  // Create initial state and function to update
  const [gasFees, setGasFees] = useState(null);

  // Fetch fee data when app loads
  useEffect(() => {
    async function getData() {
      setGasFees(await fetchGasFees());
    }
    getData();
  }, []);

  const refresh = async () => {
    setGasFees(await fetchGasFees());
  }

  return (
    <div className="App">
      <RefreshButton refresh={refresh} />
      <h1>ETH Suggested Gas Fees</h1>
      {gasFees && <FeesContainer {...gasFees} />}
    </div>
  );
}

export default App;
