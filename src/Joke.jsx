import { useEffect, useState } from 'react';
import axios from 'axios';

export function Joke() {
  const [ joke, setJoke ] = useState(null);
  const [ isFetching, setIsFetching ] = useState(false);

  useEffect(() => {
    fetchJoke();
  }, []);

  async function fetchJoke() {
    try {
      setIsFetching(true);
      const response = await axios.get('https://api.chucknorris.io/jokes/random');
      setJoke(response.data.value);
    } finally {
      setIsFetching(false);
    }
  }

  function handleNextJokeClick() {
    fetchJoke();
  }

  return <p>
    <button disabled={isFetching} onClick={handleNextJokeClick}>Next joke</button>
    {joke}
  </p>
}