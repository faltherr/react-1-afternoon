import React ,{Component} from 'react';

class EvenAndOdd extends Component{
    constructor(){
        super();
            this.state = {
                evenArray : [],
                oddArray : [],
                userInput : ''
            }
    }

    //method

    handleChange(val){
        this.setState({userInput: val});
    }

    assignEvenAndOdds(userInput){
        var arr = userInput.split(',');
        var evens =[];
        var odds =[];

        for (var i=0; i<arr.length; i++){
            if (arr[i] % 2 === 0 ){
                evens.push(parseInt(arr[i], 10)); //Not sure what is happening here
            } else {
                odds.push(parseInt(arr[i], 10)); //Not sure what is happening here!!
            }
        }
        this.setState({ evenArray: evens, oddArray: odds }); //Not sure what is happening here
    }

    render(){
        return(
            <div className="puzzleBox evenAndOddPB">
                <h4>"Evens and Odds"</h4>
                    <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
                    <button className="confirmationButton" onClick={ () => { this.assignEvenAndOdds(this.state.userInput) }}> Split </button>
                    <span className="resultsBox"> Evens:{JSON.stringify(this.state.evenArray)}</span>
                    <span className="resultsBox"> Odd:{JSON.stringify(this.state.oddArray)}</span>
            </div>
        )
    }

}

export default EvenAndOdd;