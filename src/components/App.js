import React from 'react'
import { BrowserRouter, Route, Router } from 'react-router-dom'

import StreamCreate from './streams/StreamCreate'
import StreamEdit from './streams/StreamEdit'
import StreamDelete from './streams/StreamDelete'
import StreamShow from './streams/StreamShow'
import StreamList from './streams/StreamList'
import Header from './Header'

import history from '../history'

const App = () => (
  <div>
    {/* <BrowserRouter> */}
    <Router history={history} >
      <div style={{ paddingLeft: '20px', paddingRight: '20px'}}>
        <Header />
        <Route path="/" exact component={StreamList} />
        <Route path="/streams/new" exact component={StreamCreate} />
        <Route path="/streams/edit/:id" exact component={StreamEdit} />
        <Route path="/streams/delete/:id" exact component={StreamDelete} />
        <Route path="/streams/:id" exact component={StreamShow} />
      </div>
    </Router>
    {/* </BrowserRouter> */}
  </div>
)

export default App