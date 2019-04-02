import React, { Component } from 'react';
import Container from './components/Container';
import Search from './components/Search';
import { connect } from 'react-redux';
import { SearchChange } from './actions.js';
import './App.css';

const mapStateToProps = (state) => {
  return {
    searchField: state.search
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    changeText: (e) => dispatch(SearchChange(e.target.value))
  }
}

class App extends Component {
  constructor() {
    super()

    this.state = {
      photos: []
    }

  }

  componentDidMount() {
    let root = 'https://jsonplaceholder.typicode.com'

    fetch(root + '/photos')
      .then(response => response.json())
      .then(data => this.setState({photos: data}))
  }

  render() {
    let {search} = this.state 
    const {changeText, searchField} = this.props
    let photos = this.state.photos.filter(function(el) {
      let text = new RegExp(searchField,'gi');
      return el.title.match(text);
    });
    return (
      <div className="App">
        <Search SearchChange={changeText} />
        <Container photos={photos} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
