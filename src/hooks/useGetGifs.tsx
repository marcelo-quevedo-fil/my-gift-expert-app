import { useEffect, useState } from "react";
import getGifs from "../helpers/getGifs";

function useGetGifs(value: string) {
  const [gifs, setGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getGifsAndSetIsLoading = async () => {
    setGifs(await getGifs(value));
    setIsLoading(false);
  };

  // in this case it renders only the first time []
  // but I can make it work to trigger side effects
  // when specific values changed
  useEffect(() => {
    getGifsAndSetIsLoading();
  }, []);

  return {
    gifs,
    isLoading,
  };
}

export default useGetGifs;
