import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Request'

function Home() {
  return (
    <div>
        <Main/>
        <Row rowID="1" title='Up Coming' fetchURL={requests.requestUpcoming}/>
        <Row rowID="2" title='Trending' fetchURL={requests.requestTrending}/>
        <Row rowID="3" title='Top Rated' fetchURL={requests.requestTopRated}/>
        <Row rowID="4" title='Popular' fetchURL={requests.requestPopular}/>
        <Row rowID="5" title='Horror' fetchURL={requests.requestHorror}/>2
    </div>
  )
  }

export default Home