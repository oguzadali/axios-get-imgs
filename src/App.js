import React, { Component } from 'react'
import axios from 'axios'
import SearchBar from './components/searchbarComp/Searchbar'
import ImageList from './components/imgComp/ImageList'
import Loading from './components/loading/Loading'
import './App.css'

const urlUnsplash = "https://api.unsplash.com"
const authkey = process.env.REACT_APP_UNSPLASH_PUBLIC_AUTH_KEY

export default class App extends Component {

  state = { images: [], loading: false, error: null }

  onSearchImage = async (search) => {
    const result = await axios.get(urlUnsplash + "/search/photos", {
      params: { query: search, per_page: 15 },
      // headers: { Authorization: 'Client-ID anykey' }
      headers: { Authorization: authkey }
    }).catch(err => this.setState({ error: err, loading: false }))

    this.setState({ loading: true, images: result.data.results, })

    setTimeout(() => {
      this.setState({ loading: false })
    }, 2000);

  }

  render() {
    const { loading, error } = this.state

    if (error) { return <p>Oops.. try again</p> }

    return (
      <div className="app-container">
        <SearchBar onSearchImage={this.onSearchImage} ></SearchBar>
        {loading ? <Loading /> : <ImageList images={this.state.images}></ImageList>}
      </div>
    )
  }
}
