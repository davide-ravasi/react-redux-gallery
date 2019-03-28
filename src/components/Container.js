import React, { Component } from 'react';
import Photo from './Photo';

class Container extends Component {
    constructor() {
        super()

    }
    render() {
        let photos = this.props.photos.slice(0,100).map((el)  => {
            return (
                <Photo key={el.id} title={el.title} th={el.thumbnailUrl} />
            )
        })
        return (
            <div className="container">
                {photos}
            </div>    
        )
    }

}

export default Container;