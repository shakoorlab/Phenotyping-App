// hook used to fetch the different projects available in backend to render as a card view

import { useState, useEffect } from "react";
import axios from "axios";

const useFetchProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/projects");
        setProjects(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return { projects, loading, error };
};

export default useFetchProjects;
