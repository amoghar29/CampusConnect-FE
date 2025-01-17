import { useState, useCallback } from "react";
import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const useSubmitForm = () => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const submitForm = useCallback(async (type = "post", url, data = {}) => {
    setLoading(true);
    setError(null);

    try {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        if (value instanceof File || value instanceof Blob) {
          formData.append(key, value);
        } else if (typeof value === "object") {
          formData.append(key, JSON.stringify(value));
        } else {
          formData.append(key, value);
        }
      });

      const response = await axios[type](`${BACKEND_URL}/${url}`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });

      setResponse(response.data);
      return response.data;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return { loading, response, error, submitForm };
};

export default useSubmitForm;
