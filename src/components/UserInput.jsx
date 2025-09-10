import { useState } from 'react';
import InputGroup from "./InputGroup";

const LABELS = {
  initialState: 'Initial Investment',
  annualInvestment: 'Annual Investment',
  expectedReturn: 'Expected Return',
  duration: 'Duration'
};

export default function UserInput() {
  const [userInput, setUserInput] = useState({
    initialState: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  const { initialState, annualInvestment } = LABELS;
  const firstRawInputs = { initialState, annualInvestment };

  const { expectedReturn, duration } = LABELS;
  const secondRawInputs = { expectedReturn, duration };

  function handleChange(inputIdentifier, newValue) {
    setUserInput(previousUserInput => {
      return {
        ...previousUserInput,
        [inputIdentifier]: newValue
      }
    });
  };

  return <section id="user-input">
    <InputGroup labels={firstRawInputs} changeHandler={handleChange} values={userInput}/>
    <InputGroup labels={secondRawInputs} changeHandler={handleChange} values={userInput}/>
  </section>
}