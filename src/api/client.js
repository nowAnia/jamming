import { getToken } from "./spotify/authorization"

const SPOTIFY_URL = "https://api.spotify.com/v1"

const SEARCH_ENDPOINT = `${SPOTIFY_URL}/search`

export const searchApi = async (query) => {
  const url = `${SEARCH_ENDPOINT}?q=${query}&type=artist,track`
  const accessToken = getToken()

  try {
    const response = await fetch(url, {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    })

    if (response.ok) {
      const jsonResponse = await response.json()

      const info = jsonResponse.tracks

      return info
    } else {
      alert("Unauthorized to call Api Spotify ")
      return { items: [] }
    }
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const getCurrentUser = async () => {
  const url = `${SPOTIFY_URL}/me`
  const accessToken = getToken()

  try {
    const response = await fetch(url, {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    })

    if (response.ok) {
      const jsonResponse = await response.json()

      return jsonResponse
    }
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const createPlaylist = async (userId, title) => {
  const url = `${SPOTIFY_URL}/users/${userId}/playlists`
  const accessToken = getToken()

  const data = {
    name: `JAMMING-${title}`,
    public: false,
  }

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(data),
    })

    if (response.ok) {
      const jsonResponse = await response.json()

      console.log(jsonResponse)

      return jsonResponse
    }
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const addSongsToPlaylist = async (playlistId, tracksIds) => {
  const url = `${SPOTIFY_URL}/playlists/${playlistId}/tracks`
  const accessToken = getToken()

  const data = {
    uris: tracksIds.map((id) => `spotify:track:${id}`),
  }

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(data),
    })

    if (response.ok) {
      const jsonResponse = await response.json()

      console.log(jsonResponse)

      return jsonResponse
    }
  } catch (error) {
    console.error(error)
    throw error
  }
}
