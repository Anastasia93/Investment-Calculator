export default function InputGroup({ labels, changeHandler, values }) {
  return (
    <div className="input-group">
      {Object.entries(labels).map(([key, text]) => (
        <p key={key} className="user-input">
          <label>{text}</label>
          <input required 
          id={`${key}`} 
          type="number"
          value={values[key]}
          onChange={(e) => changeHandler(key, e.target.value)}
          />
        </p>
      ))}
    </div>
  );
}