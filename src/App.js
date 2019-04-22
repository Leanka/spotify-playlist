import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { delay } from 'q';

const defaultTextColor = "#fff";
const defaultStyleObject = {
  color: defaultTextColor
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
      name: "Does mom know you smoke",
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
        }, 1000);
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
            <Playlist/>
            <Playlist/>
            <Playlist/>
            <Playlist/>
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
  render() {
    return (
      <div style={{...defaultStyleObject, width: "40%", display: "inline-block"}}>
        <h2>
          {
          this.props.playlists && 
          this.props.playlists.reduce(
            (playlistsDuration, eachPlaylist) => {
              return playlistsDuration += eachPlaylist.songs.reduce((onePlaylistDuration, eachSong) => {
                return onePlaylistDuration += eachSong.duration;
              }, 0)
            }, 0)
            /60} minutes
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
        <img/>
        <h3>Playlist name</h3>
        <ul>
          <li><Song/></li>
          <li><Song/></li>
          <li><Song/></li>
        </ul>
      </div>
    )
  }
}

class Song extends Component{
  render(){
    return(
      <div>
        <p>Song name</p>
      </div>
    )
  }
}

export default App;
