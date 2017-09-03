import React, { Component } from 'react';
import '../App.css';
import { Button } from 'reactstrap';

class Item extends Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            img: props.img

        }

    }

    componentWillReceiveProps(props) {
        this.setState({
            img: props.img
        })
    }


    render() { 


        
        return (

                <div className="pic-container">
                    <img src={ this.props.picture.image} alt={this.props.picture.alt} />
                    <div className="button-container">
                    <Button color="success" onClick={(e) => {this.props.deleteItem(this.props.picture.id)} } >Buy Now</Button>{' '}
                    <Button color="info">More info</Button>{' '}
                    <Button color="warning" onClick={(e) => {this.props.addToCart(this.props.picture.id)} } >Add to Cart</Button>{' '}
                    </div>
                        <div className="info-box">
                            {}
                        </div>

                </div>        

        );
    }
}

export default Item;