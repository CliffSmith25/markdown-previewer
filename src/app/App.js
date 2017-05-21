import React, { Component } from 'react'
import '../style/App.css'

import Output from '../containers/output'
import TypingArea from '../components/typing-area'

export default class App extends Component {
  render() {
    return (
      <div className='App flexbox-container'>
        <TypingArea />
        <Output />
      </div>
    )
  }
}
