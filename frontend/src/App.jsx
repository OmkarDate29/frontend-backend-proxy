import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    axios
      .get('https:localhost:3000/api/quotes')
      .then((res) => {
        setQuotes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div>
        <h1>Quotes</h1>
        {quotes.map((q) => (
          <div key={q.id}>
            <h3>{q.quote}</h3>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
