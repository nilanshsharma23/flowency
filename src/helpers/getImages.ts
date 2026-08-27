import { BackgroundImage } from "../types/backgroundImage";

export const getImages = async (searchQuery: string) => {
  const searchQueryConcatted = searchQuery.split(" ").join("+");
  const pixabayApiKey = import.meta.env.VITE_PIXABAY_API_KEY;

  const query = await fetch(
    `https://pixabay.com/api/?q=${searchQueryConcatted}&key=${pixabayApiKey}`,
  );

  const json = await query.json();
  let output: BackgroundImage[] = [];

  for (let index = 0; index < json.hits.length; index++) {
    const element = json.hits[index];

    if (!element.isAiGenerated) {
      output.push({
        largeImageUrl: element.largeImageURL,
        webformatUrl: element.webformatURL,
      });
    }
  }

  return output;
};
