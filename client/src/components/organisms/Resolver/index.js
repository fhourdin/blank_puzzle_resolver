import React from "react";
import { Container, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {}
}));

const Resolver = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <Typography variant="h2">Resolver</Typography>
    </Container>
  );
};

export default Resolver;
