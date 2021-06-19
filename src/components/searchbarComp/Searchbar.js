import React, { Component } from 'react'
import './Searchbar.css'

export default class Searchbar extends Component {

    state = { search: '' }

    inputChanged = event => { this.setState({ search: event.target.value }) }

    searcImage = () => { this.props.onSearchImage(this.state.search) }

    render() {
        return (
            <div className="sbar">
                <div className=" ui icon input ui centered grid ui container">
                    <input type="text" placeholder="Search any image..."
                        onKeyPress={(e) => { if (e.key === 'Enter') { this.searcImage(); } }}
                        onChange={this.inputChanged}>
                    </input>
                    <i className="circular search link icon" onClick={this.searcImage}></i>
                </div>
            </div>
        )
    }
}
