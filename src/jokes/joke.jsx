import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import useSWR, { useSWRConfig } from 'swr';
import {Modal} from '../modal/modal'

const fetcher = (...args) =>
	fetch(...args).then(res => res.json());

export function Joke() {
  const { category } = useParams();

  const url = `https://api.chucknorris.io/jokes/random?category=${category}`;
  const { data, isValidating, isLoading } = useSWR(url, fetcher, { suspense: true });
  const { mutate } = useSWRConfig();

  function handleNextJokeClick() {
    mutate(url);
  }

  return (
    <p>
      <Modal>
        {data.value}

        <button disabled={isValidating} onClick={handleNextJokeClick}>
          Next joke
        </button>
      </Modal>
    </p>
  );
}
