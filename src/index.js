// DO NOT MODIFY

// So we can use React
var React = require('react')
var ReactDOM = require('react-dom')

// Helper functions
// .shuffle() shuffles (randomizes the order of) an array
// e.g. [1,2,3,4,5].shuffle()
// getDeck() gives us an array of cards, represented as strings
// Hint: JavaScript's built-in .splice() function will remove elements from an
// array to create a new array. For example, a "hand" from a deck of cards might
// go something like this:
//
// deck.splice(0,5)
var helpers = require('./components/Helpers')
var getDeck = helpers.getDeck
Array.prototype.shuffle = helpers.shuffle

// Our component classes
var Card = require('./components/Card')

// END OF STUFF TO NOT MODIFY
var startFaceDown = ["face_down", "face_down", "face_down", "face_down", "face_down"];

var App = React.createClass({

  newDeck: function() {

    var newDeck = helpers.getDeck().shuffle().splice(0,5)
    this.setState({
      Hand: newDeck
    })
  },

  getInitialState: function() {
    return {
      Hand: startFaceDown
    };
  },

  render: function() {
    return (
      <div>
        <h1>Welcome to the KIEI-924 Casino!</h1>
        <div className="row">
          <Card currentCard={this.state.Hand[0]}/>
          <Card currentCard={this.state.Hand[1]}/>
          <Card currentCard={this.state.Hand[2]}/>
          <Card currentCard={this.state.Hand[3]}/>
          <Card currentCard={this.state.Hand[4]}/>

        <div className="col-sm-2">
            <h1><a href="#" onClick={this.newDeck} className="btn btn-success">Deal</a></h1>
        </div>

        </div>
      </div>
    )
  }
})

ReactDOM.render(<App />, document.getElementById("app"))
