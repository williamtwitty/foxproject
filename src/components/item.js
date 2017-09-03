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
                    <img src={ this.props.img} alt={this.props.alt} />
                    <div className="button-container">
                    <Button color="success">Buy Now</Button>{' '}
                    <Button color="info">More info</Button>{' '}
                    </div>
                        <div className="info-box">
                        </div>
                </div>        

        );
    }
}

export default Item;