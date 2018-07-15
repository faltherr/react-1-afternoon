import React , {Component} from 'react';

class FilterString extends Component {
    constructor(){
        super();
            this.state ={
                unFilteredStrings : ["hoopla", "blah", "bleh", "kabaam"] ,
                userInput : '',
                filteredArray: []
            }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    //Prop for change to text field
    handleChange(val){
        this.setState({userInput:val})
    }

    //Prop for change on click
    handleClick(prop){
        var strArray = this.state.unFilteredStrings;
        var filteredArray = [];
        for (var i=0 ; i< strArray.length ; i++){
            if (strArray[i].includes(prop)){
                filteredArray.push(strArray[i])
            }

        }
        this.setState({filteredArray : filteredArray})
    }


    render(){
        return (
        <div className="puzzleBox filterStringPB">
            <h4>Filter String</h4>
                <span className="puzzleText"> Original String: {JSON.stringify(this.state.unFilteredStrings)}</span>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value)}></input>
                <button className="confirmationButton" onClick={ () => { this.handleClick(this.state.userInput) }}> Filter </button>
                <span className="resultsBox filterStringRB"> New String: {JSON.stringify(this.state.filteredArray)} </span>
        </div>
        )
    }
}

export default FilterString;