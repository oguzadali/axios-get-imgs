import React, { Component } from 'react'
import axios from 'axios'
import SearchBar from './components/searchbarComp/Searchbar'
import ImageList from './components/imgComp/ImageList'
import './App.css'

const urlUnsplash = "https://api.unsplash.com"
const authkey = process.env.REACT_APP_UNSPLASH_PUBLIC_AUTH_KEY

export default class App extends Component {

  state = { images: [] }

  onSearchImage = async (search) => {
    const result = await axios.get(urlUnsplash + "/search/photos", {
      params: { query: search, per_page: 15 },
      // headers: { Authorization: 'Client-ID anykey' }
      headers: { Authorization: authkey }
    })
    // .then((d) => { console.log(d.data.results) })
    this.setState({ images: result.data.results })
    // console.log('app:' + search)
  }

  render() {
    return (
      <div className="app-container">
        <SearchBar onSearchImage={this.onSearchImage} ></SearchBar>
        <ImageList images={this.state.images}></ImageList>
      </div>
    )
  }
}
