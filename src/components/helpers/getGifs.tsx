export const getGifs = async (value: string) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=6CPAcFMBRi4xObU5ttsQFto4mMP6Nwg0&limit=10&q=${value}`;

  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img: any) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  return gifs;
};
