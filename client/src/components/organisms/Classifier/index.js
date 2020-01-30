import React from "react";
import { Container, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {}
}));

const Classifier = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <Typography variant="h2">Classifier</Typography>
    </Container>
  );
};

export default Classifier;
