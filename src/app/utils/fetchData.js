// Get Response for server components
async function fetchData(url, requestHeaders) {
  const getData = await fetch(url, requestHeaders);
  return getData.json();
}

export default fetchData;
