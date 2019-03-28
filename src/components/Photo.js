import React, { Component } from 'react';

class Photo extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="box" key={this.props.id}>
                <img src={this.props.th} />
                <p>{this.props.title}</p>
            </div>
        )
    }
}

export default Photo;