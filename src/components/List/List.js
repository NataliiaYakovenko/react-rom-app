import React, { Component } from 'react';
import ListChild from './ListChild';

class List extends Component {
    render() {
        return (
       <ListChild>
        <h1>Header</h1>
        <p>Hello ListChild</p>
       </ListChild>
        );
    }
}

export default List;


