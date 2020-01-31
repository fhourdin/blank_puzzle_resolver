import React, { useState } from 'react'
import { makeStyles, Typography } from '@material-ui/core'
import PiecePreview from './PiecePreview'
import PieceForm from './PieceForm'

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '50vh',
    display: 'flex',
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
  },
  piecePreviewContainer: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
  },
  pieceForm: {
    flex: 1,
  },
}))

const PieceCreator = () => {
  const classes = useStyles()
  const [piece, setPiece] = useState({})

  return (
    <div className={classes.root}>
      <div className={classes.piecePreviewContainer}>
        <PiecePreview piece={piece} />
      </div>
      <div className={classes.pieceForm}>
        <PieceForm piece={piece} setPiece={setPiece} />
      </div>
    </div>
  )
}

export default PieceCreator
