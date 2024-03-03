#JAMMING

## Summary

**_Jamming_** is designed to enable users to interact with the Spotify library, create
personalized playlists, and seamlessly save them to their Spotify accounts. Leveraging React components and state
management, users can search through Spotify's extensive music collection, add tracks to a custom playlist, and
adjust the playlist contents as desired. The application utilizes requests with the
[Spotify API](https://developer.spotify.com/documentation/web-api) to fetch relevant
music data and provide real-time updates to the user interface which follows Material Design guidelines through
[Material UI](https://mui.com/material-ui/getting-started/) library.

## Development

The app was created using `create-react-app` so in order to start it simply clone the repo. Then download
dependencies with

`npm install`

... and start the app with `npm start`

## App Design

The app is based on 4 pillars:

- MUI Components
- OAuth2 flow
- Web Storage API
- Fetch requests

### Screenshot

[]

### High-level Component structure

The core of the application is `App` component which manages most of the state. It includes `SearchBar` that handles
search logic. Once data was retrieved from Spotify API it will be presented in `SearchResults` with multiple
`SearchTrack`. The user can then select a few songs and add them to playlist which will be displayed by `Playlist`
component with multiple `PlaylistTrack`. In `Playlist` a user can also provide a name for the playlist and then save it
to their's Spotify account.

[]

### OAuth2 Flow

In order for this App to work a user has to go through OAuth2 authorization using
[Authorization Code](https://oauth.net/2/grant-types/authorization-code/) grant type
extended with [PKCE](https://oauth.net/2/pkce/). Once the token is granted it is stored in local storage and used to
fetch data from the API. The OAuth flow for **Jamming** is depicted in the diagram below:

[]
