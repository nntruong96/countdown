import './App.css';

import React, { useState } from 'react';

import CountdownTimer from './Components/Countdown';

function App() {
  const [time, setTime] = useState('');
  const [startTime, setStartTime] = useState({ seconds: 0 });
  const handleChange = (event) => {
    setTime(event.target.value);
  };
  const onStart = () => {
    setStartTime({ seconds: time });
  };

  return (
    <div className="App">
      <div className="container-input">
        <input
          value={time}
          onChange={handleChange}
          placeholder="Enter seconds"
        />
        <button onClick={onStart}>Start</button>
      </div>
      <div className="container-countdown">
        <p>Countdown Timer:</p>
        <CountdownTimer time={startTime} />
      </div>
    </div>
  );
}

export default App;
