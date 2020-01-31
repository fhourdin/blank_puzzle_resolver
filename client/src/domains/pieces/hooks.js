import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'

const PIECES = gql`
  {
    pieces {
      id
      index
      placed
      connections {
        male
        position
        inclination
        shift
      }
    }
  }
`

export const usePieces = () => useQuery(PIECES)

const LAST_PIECES = gql`
  query Piece($first: Int!) {
    pieces(orderBy: "index_DESC", first: $first) {
      id
      index
      placed
      connections {
        male
        position
        inclination
        shift
      }
    }
  }
`

export const useLastPieces = (first) =>
  useQuery(LAST_PIECES, { variables: { first } })
