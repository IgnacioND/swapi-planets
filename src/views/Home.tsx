import { useQuery } from '@apollo/client';
import React from 'react';
import GET_ALL_PLANETS from '../graphql/getPlanets.graphql';

export default function Home() {
  const { data, error, loading } = useQuery(GET_ALL_PLANETS);
  if (loading) return <p>Loading...</p>;
  if (error) {
    return (
      <p>
        `Error...$
        {error.message}
        `
      </p>
    );
  }
  if (data){
    const planetIndex = Math.floor(Math.random()*data?.allPlanets?.planets?.length);
    console.log(planetIndex)
    return (
      <h2>{data?.allPlanets?.planets[planetIndex]?.name}</h2>
      );
  }
  }
