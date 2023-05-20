import React, { Component } from 'react';
import Header from './Header';
import Movies from './Movie/Movies';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      title: 'Movies Assignment'
    }
  }

  render() {
    return (
      <div>
        <Header title={this.state.title} />
        <div className="mt-10">
          <Movies />
        </div>
      </div>
    )
  }
}
