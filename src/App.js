import React, { Component } from 'react';
import './App.css';
import QuoteMachine from './Components/QuoteMachine';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      selectedQuoteIndex: null,
    }
    this.selectQuoteIndex = this.generateNewQuoteIndex.bind(this);
    this.assignNewQuoteIndex = this.assignNewQuoteIndex.bind(this);
  }

  componentDidMount() {
    fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json')
    .then(data => data.json())
    .then(quotes => this.setState({quotes: quotes}, this.assignNewQuoteIndex));
  }

  get selectedQuote() {
    if (!this.state.quotes.length || !Number.isInteger(this.state.selectedQuoteIndex)) {
      return;
    }
    return this.state.quotes[this.state.selectedQuoteIndex];
  }

  /**
   * Returns an integer represeting an index in states.quotes
   * If state.quotes is empty, returns undefined
   */
  generateNewQuoteIndex() {
    if (!this.state.quotes.length){
      return undefined;
    }
      return Math.floor(Math.random() * this.state.quotes.length);
  }

  assignNewQuoteIndex() {
    this.setState({ selectedQuoteIndex: this.generateNewQuoteIndex() });
  }

  render() {
    return (
      <div className="App" id='quote-box'>
      { this.selectedQuote ?
        <QuoteMachine selectedQuote={this.selectedQuote} assignNewQuoteIndex={this.assignNewQuoteIndex}/> :
        null
      }
      </div>
    );
  }
}

export default App;
