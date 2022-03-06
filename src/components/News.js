import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div>This is news app
      <NewsItem/>
      </div>
    )
  }
}

export default News