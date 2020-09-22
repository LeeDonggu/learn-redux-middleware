import React from "react";
import { connect } from "react-redux";
import { increateAsync, decreateAsync } from "../modules/counter";
import Counter from "../components/Counter";

const CounterContainer = ({ number, increateAsync, decreateAsync }) => {
  return (
    <Counter
      number={number}
      onIncrease={increateAsync}
      onDecrease={decreateAsync}
    />
  );
};

export default connect(
  (state) => ({
    number: state.counter,
  }),
  {
    increateAsync,
    decreateAsync,
  }
)(CounterContainer);
