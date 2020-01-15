import React, { Component } from 'react';
import axios from 'axios';
import './ZenQuote.css';

class ZenQuote extends Component {
  constructor(props) {
    console.log('INSIDE CONSTRUCTOR');
    super(props);
    this.state = { quote: '', isLoaded: false };
    // ************** REALLY BAD!!! DON'T DO THAT!!!!!!! **************
    // axios.get("http://api.github.com/zen").then(response => {
    //   this.setState({ quote: response.data });
    // })
  }

  componentDidMount() {
    console.log('INSIDE COMPONENT DID MOUNT');
    //load data
    axios.get("http://api.github.com/zen").then(response => {
      setTimeout(
        function() {
          // set state with that data
          this.setState({ 
            quote: response.data, 
            isLoaded: true 
          });
        }.bind(this),
        3000
      );
    });
  }

  componentDidUpdate() {
    console.log('INSIDE COMPONENT DID UPDATE');
  }

  render() {
    console.log('INSIDE RENDER');
    return (
      <div>
        {this.state.isLoaded ? (
          <div>
            <h1>Always remember...</h1>
            <p>{this.state.quote}</p>
          </div>
        ) : (
          <div>
            <div className="cont" />
            <div className='is-animate'>
              <div class="l">l</div>
              <div class="l">o</div>
              <div class="l">a</div>
              <div class="l">d</div>
              <div class="l">i</div>
              <div class="l">n</div>
              <div class="l">g</div>
            </div>
          </div>
        )} 
      </div>
    );
  }
}

export default ZenQuote;
