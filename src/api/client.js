import { getToken } from "./spotify/authorization";

const SPOTIFY_URL = "https://api.spotify.com/v1";

const SEARCH_ENDPOINT = `${SPOTIFY_URL}/search`;

export const searchApi = async (query) => {
  const url = `${SEARCH_ENDPOINT}?q=${query}&type=artist,track`;
  const accessToken = getToken();

  try {
    const response = await fetch(url, {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (response.ok) {
      const jsonResponse = await response.json();

      const info = jsonResponse.tracks;

      return info;
    } else {
      alert("Unauthorized to call Api Spotify ");
      return { items: [] };
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};
