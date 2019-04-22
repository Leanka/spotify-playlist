import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const defaultTextColor = "#fff";
const defaultStyleObject = {
  color: defaultTextColor
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 style={defaultStyleObject}>Title</h1>
        </header>
          <Wat/>
          <Wat/>
          <Filter/>
          <Playlist/>
          <Playlist/>
          <Playlist/>
          <Playlist/>
      </div>
    );
  }
}

class Wat extends Component {
  render() {
    return (
      <div style={{...defaultStyleObject, width: "40%", display: "inline-block"}}>
        <h2>
          Number and Text
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
