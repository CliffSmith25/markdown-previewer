import Marked from 'marked'
import { USER_TYPED } from '../actions/typing-actions'

export default function(state = '', action) {
  switch (action.type) {
    case USER_TYPED:
      return Marked(action.payload)
    default:
      return Marked(state)
  }
}