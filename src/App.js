import React, { useState } from 'react';

function App() {
  const [number, setNumber] = useState(0);
  const [pattern, setPattern] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const n = parseInt(number, 10);
    const tempPattern = [];

    for (let i = 1; i <= n; i++) {
      tempPattern.push('*'.repeat(i));
    }
    for (let i = n - 1; i > 0; i--) {
      tempPattern.push('*'.repeat(i));
    }

    setPattern(tempPattern);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Input:
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <div>
        {pattern.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
