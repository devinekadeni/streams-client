import React, { Component } from 'react'
import { connect } from 'react-redux'

import { createStream } from '../../actions'

import StreamForm from './StreamForm'

class StreamCreate extends Component {
  onSubmit = (formValues) => {
    // event.preventDefault() // => automated execute on props.handleSubmit (redux-form)
    this.props.createStream(formValues)
  }

  render() {
    return (
      <div>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    )
  }
}

export default connect(
  null,
  {createStream}
)(StreamCreate)