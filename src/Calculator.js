import React, { Component } from "react";

class Calculator extends Component {
    constructor(props) {
        super(props)
        this.state = {
            num1: '',
            num2: '',
            answer: '',
            operator: '+'
        }
    }

    setNum = (event, num) => {
        this.setState({ [num]: event.target.value} );
    }

    setOperator = (event) => {
        this.setState({ operator: event.target.value})
    }

    calculate = () => {
        const num1 = this.state.num1;
        const num2 = this.state.num2;
        if(this.state.operator === '+'){
            this.setState({answer: parseInt(num1) + parseInt(num2)})
        } else if(this.state.operator === '-') {
            this.setState({answer: parseInt(num1) - parseInt(num2)})
        } else if(this.state.operator === '*') {
            this.setState({answer: parseInt(num1) * parseInt(num2)})
        } else if(this.state.operator === '/') {
            this.setState({answer: parseInt(num1) / parseInt(num2)})
        }
    }

  render() {
    return (
      <div className="container">
        <h1>Add with React!</h1>

        <div className="add">
          <input type="number" 
          name="num1"
          value={this.state.num1}
          onChange={(event) => this.setNum(event, 'num1')}
          />
          {/* <span>+</span> */}
          <select name="operator" onChange={this.setOperator}>
              <option value="+">+</option>
              <option value="-">-</option>
              <option value="*">*</option>
              <option value="/">/</option>
          </select>
          <input type="number" 
          name="num2"
          value={this.state.num2}
          onChange={(event) => this.setNum(event, 'num2')}
          />
          <button onClick={this.calculate}>=</button>
         <h3>{this.state.answer}</h3>
        </div>
      </div>
    );
  }
}

export default Calculator;
