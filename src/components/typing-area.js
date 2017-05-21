import React, { Component } from 'react'
import * as actions from '../actions/typing-actions'
import { connect } from 'react-redux'

class TypingArea extends Component {
  constructor(props) {
    super(props)
    this.state = { text: defaultText }
    this.props.userTyped(this.state.text)
  }

  render() {
    return (
      <div>
        <textarea 
          rows='150'
          onChange={ event => this.onInputChange(event.target.value)}
          value={this.state.text} />
      </div>
    )
  }

  onInputChange(text) {
    this.setState({text}, () => this.props.userTyped(this.state.text))
  }
}

export default connect(null, actions)(TypingArea)

const defaultText = `Heading
=======

Sub-heading
-----------
 
### Another deeper heading
 
Paragraphs are separated
by a blank line.

Leave 2 spaces at the end of a line to do a  
line break

Text attributes *italic*, **bold**, 
\`monospace\`, ~~strikethrough~~ .

Shopping list:

  * apples
  * oranges
  * pears

Numbered list:

  1. apples
  2. oranges
  3. pears

The rain---not the reign---in
Spain.

 *[Herman Fassett](https://freecodecamp.com/hermanfassett)*`