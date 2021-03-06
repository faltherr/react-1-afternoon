import React , {Component} from 'react';

class FilterObject extends Component{
    constructor(){
        super ();
            this.state={
                unFilteredArray :[
                    {
                      name: 'Jimmy Joe',
                      title: 'Hack0r',
                      age: 12,
                    },
                    {
                      name: 'Jeremy Schrader',
                      age: 24,
                      hairColor: 'brown'
                    },
                    {
                      name: 'Carly Armstrong',
                      title: 'CEO',
                    }
                  ],
                userInput : '',
                filteredArray : []
            }
        this.handleChange = this.handleChange.bind(this)
        this.clicker = this.clicker.bind(this)
    }

    //On change method
    handleChange(val){
        this.setState({userInput:val})
    }

    clicker(prop){
        var unFilter = this.state.unFilteredArray;
        var filteredArray = [];
        for (var i= 0; i<unFilter.length;i++){
            if (unFilter[i].hasOwnProperty(prop)){
                filteredArray.push(unFilter[i])
            }
        }
        this.setState({filteredArray : filteredArray})
    }



    render(){
        return(
        <div className="puzzleBox filterObjectPB">
            <h4>Filter Element</h4>
                <span className="puzzleText"> Original Array: {JSON.stringify(this.state.unFilteredArray, null, 10)} </span>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
                <button className="confirmationButton" onClick={ () => { this.clicker(this.state.userInput) }}> Filter </button>
                <span className="resultsBox filterObjectRB"> New Array: {JSON.stringify(this.state.filteredArray, null, 10)} </span>
        </div>
        )
    }
}

export default FilterObject;