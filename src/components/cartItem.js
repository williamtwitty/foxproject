import React, { Component } from 'react';
import '../App.css';

export default class CartItem extends Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            img: props.img, 
            
        }
    }
        componentWillReceiveProps(props) {
            this.setState({
            img: props.img
            })
        }        

    render() { 
        
        
        return (
            <div className="shopping-container">
                <div className="pic-container">
                <img src={ this.props.obj.image} alt={this.props.obj.alt} />       
                </div>
            </div>
        )
}
}