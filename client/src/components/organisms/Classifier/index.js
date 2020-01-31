import React from 'react'
import { Container, makeStyles, Typography } from '@material-ui/core'
import { usePieces } from '../../../domains/pieces/hooks'
import PieceCreator from './PieceCreator'
import LastCreatedPieces from './LastCreatedPieces'

const useStyles = makeStyles((theme) => ({
  root: {},
}))

const Classifier = () => {
  const classes = useStyles()
  const { loading, error, data } = usePieces()

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  const pieces = data.pieces

  return (
    <Container maxWidth="md">
      <Typography variant="h2">Classifier</Typography>

      <PieceCreator />
      <LastCreatedPieces />
    </Container>
  )
}

export default Classifier
