import { useQuery } from '@apollo/client';
import React from 'react';
import GET_ALL_PLANETS from '../graphql/getPlanets.graphql';
import romanNumeral from '../utils/formatNumber';


export default function Home() {
  const { data, error, loading } = useQuery(GET_ALL_PLANETS);
  if (loading) {return <p>Loading...</p>}
  else if (error) {
    return (
      <p>
        `Error...$
        {error.message}
        `
      </p>
    );
  }
  else {
    const planetIndex = Math.floor(Math.random() * data?.allPlanets?.planets?.length);
    const planetData = data?.allPlanets?.planets[planetIndex];
    return (
      <>
        <h2>{planetData?.name}</h2>
        <h2>{planetData?.filmConnection.films.map(({ episodeID }:any) => romanNumeral(episodeID)).join(', ')}</h2>
      </>
    );
  }
}
