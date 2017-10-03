import React, { Component } from 'react'
import axios from 'axios';

export default class TwittyTracker extends Component {
    componentDidMount() {
    axios.post('http:localhost:3005/api/visit')
    }
    
}
