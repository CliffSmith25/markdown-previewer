export const USER_TYPED = 'user_typed'

export function userTyped(text) {
  return {
    type: USER_TYPED,
    payload: text
  }
}