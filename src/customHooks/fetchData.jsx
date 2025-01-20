import { useState, useEffect } from "react";
import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const useFetchData = (url,refreshTrigger) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/${url}`, {
          withCredentials: true,
        });
        setData(response.data); 
        setLoading(false);
      } catch (err) {
        setError(err); 
        setLoading(false);
      }
    };
    fetchData();
  }, [refreshTrigger]);

  return { loading, data, error };
};

export default useFetchData;
