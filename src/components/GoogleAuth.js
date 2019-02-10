import React, { Component } from 'react'

class GoogleAuth extends Component {
  state = { isSignedIn: null }

  componentDidMount() {
    window.gapi.load('client:auth2', async () => {
      await window.gapi.client.init({
        clientId: '627537530548-qo725nvg1fkku1k2liquecf5l3ui0cuj.apps.googleusercontent.com',
        scope: 'email',
      })

      this.auth = window.gapi.auth2.getAuthInstance()
      this.setState({ isSignedIn: this.auth.isSignedIn.get() })
      this.auth.isSignedIn.listen(this.onAuthChange)
    })
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() })
  }

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return <div>I dont know if we are signed in</div>
    } else if (this.state.isSignedIn) {
      return <div>I am signed in!</div>
    }
    return <div>I am not signed in</div>
  }

  render() {
    return (
      <div>{this.renderAuthButton()}</div>
    )
  }
}

export default GoogleAuth