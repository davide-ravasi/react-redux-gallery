import React, { Component } from 'react';
import Container from './components/Container';
import Search from './components/Search';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      photos: [],
      search: ''
    }

    this.changeText = this.changeText.bind(this);
  }

  componentDidMount() {
    let root = 'https://jsonplaceholder.typicode.com'

    fetch(root + '/photos')
      .then(response => response.json())
      .then(data => this.setState({photos: data}))  
  }

  changeText(e) {
      this.setState({
        search: e.target.value
      });
      console.log(e.target.value);
  }

  render() {
    let {search} = this.state 
    let photos = this.state.photos.filter(function(el) {
      let text = new RegExp(search,'gi');
      return el.title.match(text);
    });
    return (
      <div className="App">
        <Search SearchChange={this.changeText} />
        <Container photos={photos} />
      </div>
    );
  }
}

export default App;
