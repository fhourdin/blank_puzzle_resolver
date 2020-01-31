import React, { useState } from 'react'
import ConnectionForm from './ConnectionForm'
import { makeStyles, ButtonGroup, Button, Typography } from '@material-ui/core'
import { get } from 'lodash'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  buttonGroup: {
    marginBottom: theme.spacing(4),
  },
  connectionFormsContainer: {
    position: 'relative',
    width: '100%',
  },
  connectionForm: {
    position: 'absolute',
  },
  rightConnectionForm: {},
  bottomConnectionForm: {},
  leftConnectionForm: {},
}))

const PieceCreator = (props) => {
  const [upShift, setUpShift] = useState('CENTER')
  const [upInclination, setUpInclination] = useState('CENTER')
  const [rightShift, setRightShift] = useState('CENTER')
  const [rightInclination, setRightInclination] = useState('CENTER')
  const [bottomShift, setBottomShift] = useState('CENTER')
  const [bottomInclination, setBottomInclination] = useState('CENTER')
  const [leftShift, setLeftShift] = useState('CENTER')
  const [leftInclination, setLeftInclination] = useState('CENTER')
  const { piece, setPiece } = props
  const classes = useStyles()

  const upConnection = get(piece, ['connections', 'up'])

  return (
    <div className={classes.root}>
      <Typography variant="h4" gutterBottom>
        New piece :
      </Typography>
      <div className={classes.connectionFormsContainer}>
        <ConnectionForm
          position="up"
          shift={upShift}
          setShift={setUpShift}
          inclination={upInclination}
          setInclination={setUpInclination}
        />
        <ConnectionForm
          position="right"
          shift={rightShift}
          setShift={setRightShift}
          inclination={rightInclination}
          setInclination={setRightInclination}
        />
        <ConnectionForm
          position="bottom"
          shift={bottomShift}
          setShift={setBottomShift}
          inclination={bottomInclination}
          setInclination={setBottomInclination}
        />
        <ConnectionForm
          position="left"
          shift={leftShift}
          setShift={setLeftShift}
          inclination={leftInclination}
          setInclination={setLeftInclination}
        />
      </div>
      <Button color="primary" variant="contained" size="large">
        Create piece
      </Button>
    </div>
  )
}

export default PieceCreator
