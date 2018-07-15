import React , {Component} from 'react';

class Palindrome extends Component{
    constructor(){
        super();
            this.state = {
                userInput : '',
                palindrome: ''
            }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    //Props
    //Handeler for the change state event
    handleChange(val){
        this.setState({userInput:val});
    }

    handleClick(prop){
        var forwards = prop;
        var backwards = prop;
        backwards = backwards.split(''); //Split the string into an array
        backwards = backwards.reverse(); //Reverse the array
        backwards = backwards.join(''); //Restring the array
    
        if ( forwards === backwards ) {
          this.setState({ palindrome: 'true' });
        } else {
          this.setState({ palindrome: 'false' });
        }
      }

    render(){
        return(
        <div className="puzzleBox filterStringPB">
            <h4>Palindrome</h4>
                <span className="puzzleText"> Original String: {this.state.userInput}</span>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value)}></input>
                <button className="confirmationButton" onClick={ () => { this.handleClick(this.state.userInput) }}> Check </button>
                <span className="resultsBox palindromePB"> Is palindrome? {this.state.palindrome} </span>
        </div>
        )
    }
}

export default Palindrome;