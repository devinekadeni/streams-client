import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchStream, deleteStreams } from '../../actions'

import Modal from '../Modal'

import history from '../../history'

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id)
  }

  renderActions() {
    const { id } = this.props.match.params
    return (
      <>
        <button
          onClick={() => this.props.deleteStreams(id)}
          className="ui button primary"
        >
          Delete
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </>
    )
  }

  renderContent() {
    if (!this.props.stream) {
      return 'Are you sure you want to delete this stream?'
    }

    return `Are you sure you want to delete the stream with title: ${
      this.props.stream.title
    }`
  }

  render() {
    return (
      <Modal
        onDismiss={() => history.push('/')}
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  stream: state.streams[ownProps.match.params.id]
})

export default connect(
  mapStateToProps,
  { fetchStream, deleteStreams }
)(StreamDelete)
