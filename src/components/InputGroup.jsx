export default function InputGroup({ labels }) {
  return (
    <div className="input-group">
      {labels.map((label, index) => (
        <p key={index} className="user-input">
          <label>{label}</label>
          <input required id={`input-${label}`} type="number"
          />
        </p>
      ))}
    </div>
  );
}