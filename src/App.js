import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { delay } from 'q';

const defaultStyleObject = {
  color: "#fff"
}
const fakeServerData = {
  user: {
    name: "Anna"
  },
  playlists: [
    {
      name: "My favourite songs",
      songs: [
        {name: "song nr 1", duration: 134}, 
        {name: "song nr 2", duration: 242}, 
        {name: "song nr 3", duration: 174}, 
        {name: "song nr 4", duration: 155}
      ]
    },
    {
      name: "Guilty pleasures",
      songs: [
        {name: "song nr 11", duration: 142}, 
        {name: "song nr 12", duration: 216}, 
        {name: "song nr 13", duration: 92}, 
        {name: "song nr 14", duration: 52}
      ]
    },
    {
      name: "Does mom know you smoke?",
      songs: [
        {name: "song nr 21", duration: 100}, 
        {name: "song nr 22", duration: 91}, 
        {name: "song nr 23", duration: 81}, 
        {name: "song nr 24", duration: 104}
      ]

    },
    {
      name: "Bla bla songs",
      songs: [
        {name: "song nr 31", duration: 132}, 
        {name: "song nr 32", duration: 120}, 
        {name: "song nr 33", duration: 194}, 
        {name: "song nr 34", duration: 201}
      ]
    },
  ]
}
class App extends Component {
  constructor(){
    super()
    this.state = {serverData: {}}
  }

    componentDidMount() {
      setTimeout(() => {
        this.setState({serverData: fakeServerData})
        }, 2000);
    }

  render() {
    return (
      <div className="App">
          {
            this.state.serverData ?
            <div>
              {
              this.state.serverData.user ?
              <h1 style={defaultStyleObject}>
                {this.state.serverData.user.name}'s Playlist
              </h1> : <h1 style={defaultStyleObject}>Loading...</h1>
              }
            <PlaylistCounter playlists = {this.state.serverData.playlists}/>
            <PlaylistHourCounter playlists = {this.state.serverData.playlists}/>
            <Filter/>
            {this.state.serverData.playlists ? 
              this.state.serverData.playlists.map(playlist => 
              <Playlist playlist={playlist}/>)
              : <p style={defaultStyleObject}>Fetching playlists...</p>
            }
          </div> : <h1 style={defaultStyleObject}>Loading...</h1>
        }
      </div>
    );
  }
}
  
class PlaylistCounter extends Component {

  render() {
    return (
      <div style={{...defaultStyleObject, width: "40%", display: "inline-block"}}>
        <h2>
          {this.props.playlists && this.props.playlists.length} playlists
        </h2>
      </div>
    );
  }
}

class PlaylistHourCounter extends Component {

  calculateLength = () =>
    this.props.playlists && 
      this.props.playlists.reduce(
        (playlistsDuration, eachPlaylist) => {
          return playlistsDuration += eachPlaylist.songs.reduce((onePlaylistDuration, eachSong) => {
            return onePlaylistDuration += eachSong.duration;
          }, 0)
        }, 0) /60
  
  render() {      
    return (
      <div style={{...defaultStyleObject, width: "40%", display: "inline-block"}}>
        <h2>
          {/* {Math.floor(this.calculateLength())} minutes - first it's NaN bause of undefined, next it's rendered */}
          {this.calculateLength() ? this.calculateLength().toFixed(2) : "Calculating"} minutes
        </h2>
      </div>
    );
  }
}

class Filter extends Component {
  render() {
    return (
      <div>
        <img/>
        <input type="text"/>
      </div>
    )
  }
}

class Playlist extends Component{
  render(){
    return(
      <div style={{...defaultStyleObject, width: "25%", display: "inline-block"}}>
      {this.props.playlist ?
        <div>
          <img/>
          <h3>{this.props.playlist.name ? this.props.playlist.name : "Loading name..."}</h3>
          <ul>
            { this.renderPlaylists()}
          </ul>
        </div> :
        <p>"Loading..."</p>}
      </div>
    )
  }

  renderPlaylists = () => 
    this.props.playlist.songs ?
    this.props.playlist.songs.map(song => this.renderSong(song)):
      "Loading songs..."
    

  renderSong = (song) => 
    song.name ? 
    <li><Song song={song}/></li> : 
    <li><p>...</p></li>
  

}

class Song extends Component{
  render(){
    return(
      <div>
        <p>
          {
            this.props.song ?
            this.props.song.name :
            "..."
          }
        </p>
      </div>
    )
  }
}

export default App;
