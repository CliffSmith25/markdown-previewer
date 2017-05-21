import React from 'react'
import { connect } from 'react-redux'

const Output = (props) => {
  return (
    <div 
      className='content'
      dangerouslySetInnerHTML={{__html: props.markdown}}
    ></div>
  )
}

function mapStateToProps(state) {
  return {
    markdown: state.MarkdownReducer
  }
}

export default connect(mapStateToProps)(Output)