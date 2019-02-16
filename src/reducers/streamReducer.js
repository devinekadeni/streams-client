import {
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
} from '../actions/types'

export default (state = {}, action) => {
  switch (action.type) {
    case CREATE_STREAM:
      return { ...state }
    case FETCH_STREAMS:
      return { ...state }
    case FETCH_STREAM:
      return { ...state }
    case DELETE_STREAM:
      return { ...state }
    case EDIT_STREAM:
      return { ...state }
    default:
      break;
  }
}