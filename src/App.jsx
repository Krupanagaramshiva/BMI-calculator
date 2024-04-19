import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [message, setMessage] = useState('');
  const [bmi, setBmi] = useState('');

  const bmicalcu = (e) => {
    e.preventDefault(); // Prevent default form submission

    if (weight === 0 || height === 0) {
      alert("Please enter correct weight and height");
    } else {
      const calculatedBmi = (weight / (height * height)) * 703;
      setBmi(calculatedBmi.toFixed(1));

      if (calculatedBmi > 25) {
        setMessage("Body weight is underweight");
      } else if (calculatedBmi >= 18.5 && calculatedBmi < 25) {
        setMessage("Body weight is healthy");
      } else {
        setMessage("Body weight is overweight");
      }
    }
  };

  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      <div className="container">
        <h1>BMI CALCULATOR</h1>
        <form onSubmit={bmicalcu}>
          <label>Weight (lbs)</label>
          <input
            type="text"
            placeholder="Enter a Weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
          <label>Height</label>
          <input
            type="text"
            placeholder="Enter a Height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
          <button type="submit">Calculate BMI</button>
          <button type="button" onClick={handleReload}>Reload</button>
        </form>

        <div>
          {bmi && <p>Your BMI: {bmi}</p>}
          {message && <p>{message}</p>}
        </div>
      </div>
    </div>
  );
};

export default App;
