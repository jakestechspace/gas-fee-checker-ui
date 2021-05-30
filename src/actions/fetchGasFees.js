export default async function fetchGasFees() {
  // Here is the fetch request that returns data from the back end
  const response = await fetch("https://q61b96rjgd.execute-api.us-east-1.amazonaws.com/dev/");
  return response.json()
}