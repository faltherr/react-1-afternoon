import React , {Component} from 'react';

class Sum extends Component {
    constructor(){
        super();
            this.state ={
                number1 : 0,
                number2 : 0,
                sum: null
            }
        this.handleChange1 = this.handleChange1.bind(this)
        this.handleChange2 = this.handleChange2.bind(this)
        this.onClick = this.onClick.bind(this)
    }

    //State change for number 1
    handleChange1(val){
        this.setState({number1:val})
    }
    // State change for number 2
    handleChange2(val){
        this.setState({number2:val})
    }

    //Prop for change on click
    onClick(prop1, prop2){
        let sum = this.state.sum;
        sum = Number(prop1) + Number(prop2)
        this.setState({sum : sum})
    }
    


    render(){
        return (
        <div className="puzzleBox sumPB">
            <h4>Sum</h4>
                <input className="inputLine" onChange={ (e) => this.handleChange1(e.target.value)}></input>
                <input className="inputLine" onChange={ (e) => this.handleChange2(e.target.value)}></input>
                <button className="confirmationButton" onClick={ () => { this.onClick(this.state.number1, this.state.number2) }}> Sum </button>
                <span className="resultsBox filterStringRB"> Sum: {this.state.sum} </span>
        </div>
        )
    }
}

export default Sum;
