import InputGroup from "./InputGroup";

const LABELS = {
  initialInvestment: 'Initial Investment',
  annualInvestment: 'Annual Investment',
  expectedReturn: 'Expected Return',
  duration: 'Duration'
};

const { initialInvestment, annualInvestment } = LABELS;
const firstRawInputs = { initialInvestment, annualInvestment };

const { expectedReturn, duration } = LABELS;
const secondRawInputs = { expectedReturn, duration };

export default function UserInput({ handleOnChangeInput, userInputValues }) {
  return <section id="user-input">
    <InputGroup labels={firstRawInputs} changeHandler={handleOnChangeInput} values={userInputValues} />
    <InputGroup labels={secondRawInputs} changeHandler={handleOnChangeInput} values={userInputValues} />
  </section>
}