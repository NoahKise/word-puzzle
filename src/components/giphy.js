export const getGif = async (word) => {
    const searchTerm = word
    const apiKey = process.env.REACT_APP_API_KEY;
    const offset = Math.floor(Math.random() * 2);
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}&limit=1&offset=${offset}&rating=r&lang=en&bundle=messaging_non_clips`;

    try {
        const response = await fetch(url);
        const resultText = await response.text();
        const result = JSON.parse(resultText);
        const gif = result.data[0].images.original.url;
        return gif;
    } catch (error) {
        return error;
    }
}