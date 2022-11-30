import SpotifyPlayer from 'react-spotify-player';


  const size = {
    width: '100%',
    height: 300,
  };
    
    const view = 'list';
    const theme = 'black';

  function SpotifyPlayer() {
    return (
        <SpotifyPlayer
        uri="spotify:album:3SpBlxme9WbeQdI9kx7KAV"
        size={size}
        view={view}
        theme={theme}
      />
    );
  }
  
  export default SpotifyPlayer;


