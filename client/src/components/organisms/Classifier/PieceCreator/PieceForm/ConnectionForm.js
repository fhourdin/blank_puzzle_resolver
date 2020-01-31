import React from 'react'
import {
  makeStyles,
  ButtonGroup,
  Button,
  Typography,
  Paper,
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(4),
    padding: theme.spacing(2),
  },
  buttonGroups: {
    display: 'flex',
    flexDirection: 'column',
  },
  buttonGroup: {
    marginBottom: theme.spacing(4),
  },
  label: {
    marginRight: theme.spacing(6),
    textTransform: 'capitalize',
  },
}))

const ConnectionForm = (props) => {
  const { shift, setShift, inclination, setInclination, position } = props
  const classes = useStyles()

  return (
    <Paper elevation={4} className={classes.root}>
      <Typography className={classes.label} variant="h5">
        {position}
      </Typography>
      <div className={classes.buttonGroups}>
        <div className={classes.buttonGroup}>
          <Typography variant="subtitle1">Shift :</Typography>

          <ButtonGroup color="primary" aria-label="text primary button group">
            <Button
              onClick={() => setShift('LEFT')}
              variant={shift === 'LEFT' ? 'contained' : 'outlined'}
            >
              LEFT
            </Button>
            <Button
              onClick={() => setShift('CENTER')}
              variant={shift === 'CENTER' ? 'contained' : 'outlined'}
            >
              CENTER
            </Button>
            <Button
              onClick={() => setShift('RIGHT')}
              variant={shift === 'RIGHT' ? 'contained' : 'outlined'}
            >
              RIGHT
            </Button>
          </ButtonGroup>
        </div>
        <div className={classes.buttonGroup}>
          <Typography variant="subtitle1">Inclination :</Typography>

          <ButtonGroup color="primary" aria-label="text primary button group">
            <Button
              onClick={() => setInclination('LEFT')}
              variant={inclination === 'LEFT' ? 'contained' : 'outlined'}
            >
              LEFT
            </Button>
            <Button
              onClick={() => setInclination('CENTER')}
              variant={inclination === 'CENTER' ? 'contained' : 'outlined'}
            >
              CENTER
            </Button>
            <Button
              onClick={() => setInclination('RIGHT')}
              variant={inclination === 'RIGHT' ? 'contained' : 'outlined'}
            >
              RIGHT
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </Paper>
  )
}

export default ConnectionForm
