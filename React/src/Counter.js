import React, { Component } from "react";

class Counter extends Component {
  /*
  constructor(props) {
    super(props);
    //state의 초깃값 설정
    this.state = {
      number: 0,
      fixedNumber: 0,
    };
    */
  state = {
    number: 0,
    fixedNumber: 0,
  };
  render() {
    const { number, fixedNumber } = this.state; // state를 조회할 때는 this.state로 조회한다.
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값: {fixedNumber}</h2>

        <button
          onClick={() => {
            this.setState(
              {
                number: number + 1,
              },
              () => {
                console.log("setState 호출.");
                console.log(this.state);
              }
            );
          }}
        >
          +
        </button>

        <button
          onClick={() => {
            this.setState({ number: number - 1 });
          }}
        >
          -
        </button>
      </div>
    );
  }
}

export default Counter;
