import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SeachBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../../util/Spotify';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      searchResults: [],
      playlistName: "Jamba",
      playlistTracks: []
    }
    this.addTrack=this.addTrack.bind(this);
    this.removeTrack=this.removeTrack.bind(this);
    this.savePlaylist=this.savePlaylist.bind(this);
    this.search=this.search.bind(this);
    this.updatePlaylistName=this.updatePlaylistName.bind(this);
  }

  addTrack(track) {
    let tracks=this.state.playlistTracks;
    if(tracks.find(savedTracks => savedTracks.id===track.id)) {
      return;
    }
    tracks.push(track);
    this.setState({playlistTracks: tracks});
  }

  removeTrack(track) {
    let tracks=this.state.playlistTracks;
    tracks = tracks.filter(savedTracks => savedTracks.id !== track.id);
    this.setState({playlistTracks: tracks});
  }

  savePlaylist() {
    const trackURIs=this.state.playlistTracks.map(track => track.uri);
    Spotify.savePlayList(this.state.playlistName, trackURIs).then(() => {
      this.setState({
        playlistName: "New Playlist",
        playlistTracks: []
      })
    })
  }

  search(term) {
    Spotify.search(term).then(searchResults => {
      this.setState({searchResults: searchResults})
    })
  }

  updatePlaylistName(name) {
    this.setState({playlistName: name});
  }

  render() {
    return (
      <div>
        <h1>Spotify<span className="highlight">WEB</span></h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
            <Playlist 
            playlistName={this.state.playlistName} 
            playlistTracks={this.state.playlistTracks} 
            onRemove={this.removeTrack} 
            onNameChange={this.updatePlaylistName}
            onSave={this.savePlaylist}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
