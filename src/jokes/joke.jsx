import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export function Joke() {
  const { category } = useParams();
  const [joke, setJoke] = useState(null);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    fetchJoke();
  }, []);

  async function fetchJoke() {
    try {
      setIsFetching(true);
      const response = await axios.get(
        `https://api.chucknorris.io/jokes/random?category=${category}`
      );
      setJoke(response.data.value);
    } finally {
      setIsFetching(false);
    }
  }

  function handleNextJokeClick() {
    fetchJoke();
  }

  return (
    <p>
      <button disabled={isFetching} onClick={handleNextJokeClick}>
        Next joke
      </button>
      {joke}
    </p>
  );
}
