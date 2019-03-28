import React, { Component } from 'react';

class Search extends Component {
    constructor() {
        super()
    }

    render() {
        return(
            <div>
                <input type="text" placeholder="search" onChange={this.props.SearchChange} />
            </div>
        )
    }

}

export default Search;