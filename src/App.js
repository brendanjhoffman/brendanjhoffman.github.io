import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [timeString, setTimeString] = useState("");
  const getTimeSince = () => {
    return new Date().getTime() - new Date("August 6, 2022 12:30:00").getTime();
  };

  const formatTime = (time) => {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);
    return `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
  };

  useEffect(() => {
    // Update the time every second
    const interval = setInterval(() => {
      setTimeString(formatTime(getTimeSince()));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div>This site has been under construction for...</div>
        <h1>{timeString}</h1>
        <a
          className="App-link"
          href="https://twitter.com/intent/tweet?text=%40itsbrendanj%20fix%20ur%20website"
          rel="noopener noreferrer"
          target="_blank"
        >
          Tweet at Brendan to remind him
        </a>
      </header>
    </div>
  );
}

export default App;
