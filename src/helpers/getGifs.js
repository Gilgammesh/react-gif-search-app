export const getGifs = async (categ) => {
  const apiKey = "F0jWBAsOwhJAQDVKhBUoFSlajLdXDDFn";
  const filter = categ;
  const limit = 10;

  const url = `https://api.giphy.com/v1/gifs/search?q=${filter}&limit=${limit}&api_key=${apiKey}`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = await data.map(
    ({
      id,
      title,
      images: {
        downsized_medium: { url },
      },
    }) => {
      return { id, title, url };
    }
  );
  return gifs;
};
