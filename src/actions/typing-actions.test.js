import * as actions from './typing-actions'

describe('App Actions', () => {
  it('should create an action to add text', () => {
    const text = 'this is some test text'
    const expectedAction = {
      type: actions.USER_TYPED,
      payload: text
    }
    expect(actions.userTyped(text)).toEqual(expectedAction)
  })
})