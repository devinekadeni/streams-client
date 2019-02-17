import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import { fetchStream, editStreams } from '../../actions'

import StreamForm from './StreamForm'

class StreamEdit extends Component {
  state = {  }

  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id)
  }

  onSubmit = (formValues) => {
    this.props.editStreams(this.props.match.params.id, formValues)
  }

  render() {
    if (!this.props.stream) {
      return <div>Loading....</div>
    }

    const { title, description } = this.props.stream
    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm
          initialValues={_.pick(this.props.stream, 'title', 'description')}
          onSubmit={this.onSubmit}
        />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  stream: state.streams[ownProps.match.params.id],
})

export default connect(
  mapStateToProps,
  { fetchStream, editStreams }
)(StreamEdit)