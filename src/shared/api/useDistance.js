import React from "react";
import { fetchRequest } from "../../../3_Shared/config/apiConfig";

const useDistance = (start, goal) => {
  const [loading, setLoading] = React.useState(true);
  const [distance, setDistance] = React.useState(0);

  const body = {
    start: start,
    goal: goal,
  };

  React.useEffect(() => {
    const fetchDistance = async () => {
      setLoading(true);
      const result = await fetchRequest("GET", "url", body, "token");
      setDistance(result);
      setLoading(false);
    };

    fetchDistance();
  }, [start, goal]);
  return [distance, loading];
};
export default useDistance;
