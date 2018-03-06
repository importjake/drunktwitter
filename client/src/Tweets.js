import React, { Component } from 'react'
import Tweet from './Tweet.js'

class Tweets extends Component {
  render () {
    const tweets = this.props.tweets
    return (
      <div className='container'>
        <ul>
          {tweets.map((tweet, index) => {
            return <li><Tweet tweet={tweet} screenName={this.props.screenName} /></li>
          })}
        </ul>
      </div>
    )
  }
}

export default Tweets
