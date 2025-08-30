// useFetch.js

import { useState, useEffect, useCallback } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);        // Data from API
  const [loading, setLoading] = useState(true);  // Is it still loading?
  const [error, setError] = useState(null);      // Any error occurred?

  const fetchData = useCallback(async () => {
    setLoading(true);     // Start loading
    setError(null);       // Reset previous errors

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const json = await response.json();  // Parse JSON
      setData(json);                       // Save data
    } catch (err) {
      setError(err.message);               // Save error
    } finally {
      setLoading(false);                   // Stop loading
    }
  }, [url]); // Re-run only if URL changes

  useEffect(() => {
    fetchData();
  }, [fetchData]); // Trigger fetch when hook runs or URL changes

  return { data, loading, error };
}

export default useFetch;
