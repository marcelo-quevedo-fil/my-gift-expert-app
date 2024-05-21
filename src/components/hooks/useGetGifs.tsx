import { useEffect, useState } from "react";
import getGifs from "../helpers/getGifs";

function useGetGifs(value: string) {
  const [gifs, setGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getGifsAndSetIsLoading = async () => {
    setGifs(await getGifs(value));
    setIsLoading(false);
  };

  //it renders only the first time
  useEffect(() => {
    getGifsAndSetIsLoading();
  }, []);

  return {
    gifs,
    isLoading,
  };
}

export default useGetGifs;
