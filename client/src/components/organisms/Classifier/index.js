import React from "react";
import { Container, makeStyles, Typography } from "@material-ui/core";
import { gql } from "apollo-boost";
import apolloClient from "../../../env/apollo";
import { useQuery } from "@apollo/react-hooks";

const useStyles = makeStyles(theme => ({
  root: {}
}));

const PIECES = gql`
  {
    pieces {
      id
      index
      placed
      connections {
        male
        index
        inclination
      }
    }
  }
`;

const Classifier = () => {
  const classes = useStyles();
  const { loading, error, data } = useQuery(PIECES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  console.log(data.pieces);

  return (
    <Container maxWidth="md">
      <Typography variant="h2">Classifier</Typography>
    </Container>
  );
};

export default Classifier;
