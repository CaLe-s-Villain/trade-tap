import { useEffect, useState } from 'react';

import reactLogo from './assets/react.svg';

// eslint-disable-next-line import/no-unresolved, import/no-absolute-path
import viteLogo from '/vite.svg';

import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('...loading');

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/message/latest`)
      .then(async (res) => {
        const text = await res.text();
        console.log('Raw response:', text);
        try {
          const json = JSON.parse(text);
          console.log(json);
          setMessage(json.text);
        } catch (parseErr) {
          console.error('Failed to parse JSON:', parseErr);
          setMessage('Invalid response from backend 😢');
        }
      })
      .catch((err) => {
        console.log('Fetch failed:', err); // line 20
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
