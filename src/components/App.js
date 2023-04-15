import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard';
import NewTweet from './NewTweet';
import TweetPage from './TweetPage';
import Nav from './Nav';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())

  }
  render() {
    return (
      <Router>
        <Fragment />
        <div className='container'>
          <Nav />
          {
            this.props.loading === true
              ? "Loading..." : <Routes>
                <Route path='/' exact element={<Dashboard />} />
                <Route path='/tweet/:id' element={<TweetPage  />} />
                <Route path='/new' element={<NewTweet  />} />
              </Routes>
          }
        </div>
      </Router>

    )
  }
}
function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  }
}
export default connect(mapStateToProps)(App)