import React, { Component } from 'react'
import { connect } from 'react-redux'

import { signIn, signOut } from '../actions'

class GoogleAuth extends Component {

  componentDidMount() {
    window.gapi.load('client:auth2', async () => {
      await window.gapi.client.init({
        clientId: '627537530548-qo725nvg1fkku1k2liquecf5l3ui0cuj.apps.googleusercontent.com',
        scope: 'email',
      })

      this.auth = window.gapi.auth2.getAuthInstance()

      this.onAuthChange(this.auth.isSignedIn.get())
      this.auth.isSignedIn.listen(this.onAuthChange)
    })
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId())
    } else {
      this.props.signOut()
    }
  }

  onSignInClick = () => {
    this.auth.signIn()
  }

  onSignOutClick = () => {
    this.auth.signOut()
  }

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null
    } else if (this.props.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} className="ui red google button">
          <i className="google icon" />
          Sign Out
        </button>
      )
    }
    return (
      <button onClick={this.onSignInClick} className="ui red google button">
        <i className="google icon" />
        Sign In with google
      </button>
    )
  }

  render() {
    return (
      <div>{this.renderAuthButton()}</div>
    )
  }
}

const mapStateToProps = state => ({
  isSignedIn: state.auth.isSignedIn,
})

export default connect(
  mapStateToProps,
  {signIn, signOut}
)(GoogleAuth)