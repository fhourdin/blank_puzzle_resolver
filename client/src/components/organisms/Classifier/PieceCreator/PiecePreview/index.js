import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    width: theme.spacing(40),
    height: theme.spacing(40),
    backgroundColor: theme.palette.primary.main,
  },
  upConnection: {
    position: 'absolute',
    width: theme.spacing(16),
    height: theme.spacing(20),
    marginLeft: theme.spacing(12),
    marginTop: -theme.spacing(10),
    borderRadius: '50px 50px 0 0',
    backgroundColor: theme.palette.primary.main,
  },
  rightConnection: {
    position: 'absolute',
    width: theme.spacing(20),
    height: theme.spacing(16),
    marginLeft: theme.spacing(30),
    marginTop: theme.spacing(12),
    borderRadius: '50px 0 0 50px',
    backgroundColor: theme.palette.common.white,
  },
  bottomConnection: {
    position: 'absolute',
    width: theme.spacing(16),
    height: theme.spacing(20),
    marginLeft: theme.spacing(12),
    marginTop: theme.spacing(30),
    borderRadius: '0 0 50px 50px',
    backgroundColor: theme.palette.primary.main,
  },
  leftConnection: {
    position: 'absolute',
    width: theme.spacing(20),
    height: theme.spacing(16),
    marginLeft: theme.spacing(-10),
    marginTop: theme.spacing(12),
    borderRadius: '0 50px 50px 0',
    backgroundColor: theme.palette.common.white,
  },
}))

const PiecePreview = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.upConnection}></div>
      <div className={classes.rightConnection}></div>
      <div className={classes.bottomConnection}></div>
      <div className={classes.leftConnection}></div>
    </div>
  )
}

export default PiecePreview
