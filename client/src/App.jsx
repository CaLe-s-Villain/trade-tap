import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
// eslint-disable-next-line import/no-unresolved, import/no-absolute-path
import viteLogo from '/vite.svg';

import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('...loading');

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/message`)
      .then((res) => res.json())
      .then((data) => setMessage(data.text))
      .catch((err) => {
        console.log(err);
        setMessage('Backend unreachable 😢');
      });
  }, []);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button
          type="button"
          onClick={() => setCount((prevCount) => prevCount + 1)}
        >
          count is {count}
        </button>
        <p>
          Backend says: <strong>{message}</strong>
        </p>
      </div>
    </>
  );
}

export default App;
