import { gql } from '@apollo/client';

const GET_ALL_PLANETS = gql`
  query{
    allPlanets{
        planets{
          name
        }
      }
    }
`;

export default GET_ALL_PLANETS;
