import React from "react";
import { fetchRequest } from "../config/apiConfig";

const useDistance = (lon, lat) => {
  const [loading, setLoading] = React.useState(true);
  const [distance, setDistance] = React.useState(0);

  const body = {
    start_lon: 127.2658606,
    start_lat: 37.3373356,
    goal_lon: lon,
    goal_lat: lat,
  };
  //goal=126.7364763,37.5322265&start=127.2658606,37.3373356
  React.useEffect(() => {
    const fetchDistance = async () => {
      setLoading(true);
      const result = await fetchRequest(
        "POST",
        `http://43.202.84.174:7700/bus/info/duration`,
        body,
        null
      );
      setDistance(result);
      setLoading(false);
      console.log(result);
    };

    fetchDistance();
  }, [lon, lat]);
  return [distance, loading];
};
export default useDistance;
