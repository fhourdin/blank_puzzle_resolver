import React from 'react'
import { find } from 'lodash'
import {
  makeStyles,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Icon,
} from '@material-ui/core'
import { useLastPieces } from '../../../../domains/pieces/hooks'

const useStyles = makeStyles((theme) => ({
  root: {},
}))

const getConnectionDetails = (connection) => {
  const { shift, inclination } = connection

  let shiftIcon = null
  switch (shift) {
    case 'LEFT':
      shiftIcon = <Icon>chevron_left</Icon>
      break
    case 'CENTER':
      shiftIcon = <Icon>expand_less</Icon>
      break
    case 'RIGHT':
      shiftIcon = <Icon>chevron_right</Icon>
      break
    default:
      break
  }

  let inclinationIcon = null
  switch (inclination) {
    case 'LEFT':
      inclinationIcon = <Icon>undo</Icon>
      break
    case 'CENTER':
      inclinationIcon = <Icon>arrow_upward</Icon>
      break
    case 'RIGHT':
      inclinationIcon = <Icon>redo</Icon>
      break
    default:
      break
  }

  return (
    <div>
      {shiftIcon}
      {inclinationIcon}
    </div>
  )
}

const LastCreatedPieces = () => {
  const classes = useStyles()
  const { loading, error, data } = useLastPieces(10)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  console.log(data)

  const rows = data.pieces
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Last 10 created pieces
      </Typography>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Index</TableCell>
              <TableCell align="right">Placed</TableCell>
              <TableCell align="right">Up</TableCell>
              <TableCell align="right">Right</TableCell>
              <TableCell align="right">Bottom</TableCell>
              <TableCell align="right">Left</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              const up = find(row.connections, { position: 'UP' })
              const right = find(row.connections, { position: 'RIGHT' })
              const bottom = find(row.connections, { position: 'BOTTOM' })
              const left = find(row.connections, { position: 'LEFT' })

              return (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.index}
                  </TableCell>
                  <TableCell align="right">
                    {row.placed ? (
                      <Icon>check_circle</Icon>
                    ) : (
                      <Icon>close</Icon>
                    )}{' '}
                  </TableCell>
                  <TableCell align="right">
                    {getConnectionDetails(up)}
                  </TableCell>
                  <TableCell align="right">
                    {getConnectionDetails(right)}
                  </TableCell>
                  <TableCell align="right">
                    {getConnectionDetails(bottom)}
                  </TableCell>
                  <TableCell align="right">
                    {getConnectionDetails(left)}
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default LastCreatedPieces
