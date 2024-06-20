// This hook handles the data fetching logic for rendering plots and to manage the plots, loading state, and any errors that occur during the fetch.

import { useState, useEffect } from "react";
import axios from "axios";

const useFetchPlots = (farmId, limit = 50) => {
  const [plots, setPlots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlots = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/plots", {
          params: {
            // farmId,
            limit,
          },
        });
        setPlots(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPlots();
  }, [farmId, limit]);

  return { plots, loading, error };
};

export default useFetchPlots;
