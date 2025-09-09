import { useState } from 'react';
import InputGroup from "./InputGroup";

const LABELS = [
  'Initial Investment',
  'Annual Investment',
  'Expected Return',
  'Duration'
];

export default function UserInput() {
  const [userInput, setUserInput] = useState({
    initialState: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  return <section id="user-input">
    <InputGroup labels={LABELS.slice(0, 2)} />
    <InputGroup labels={LABELS.slice(2)} />
  </section>
}