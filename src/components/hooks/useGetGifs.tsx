import { useEffect, useState } from "react";
import { getGifs as helperGetGifs } from "../helpers/getGifs";

export const useGetGifs = (value: string) => {
  const [gifs, setGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getGifs = async () => {
    setGifs(await helperGetGifs(value));
    setIsLoading(false);
  };

  //it renders only the first time
  useEffect(() => {
    getGifs();
  }, []);

  return {
    gifs,
    isLoading,
  };
};
