export async function getGif() {
    const apiKey = process.env.API_KEY;
    const offset = Math.floor(Math.random() * 6);
    const array = [0, 1, 8, 11, 3, 2];
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=chief+wiggum&limit=1&offset=${array[offset]}&rating=r&lang=en&bundle=messaging_non_clips`;

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