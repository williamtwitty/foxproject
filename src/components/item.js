import React, { Component } from 'react';
import '../App.css';
import { Button } from 'reactstrap';
import { getinfo } from '../services/manager'

class Item extends Component {
    constructor(props) {
        super(props);

        this.state = {
            img: props.img,
            displayInfo: "",
            info: [],
        }
        this.moreInfo = this.moreInfo.bind(this);
    }

    componentWillReceiveProps(props) {
        this.setState({
            img: props.img
        })
    }

    moreInfo(id) {
        getinfo(id).then((res)=>{
        this.setState({
          displayInfo: !this.state.displayInfo,
          info: res
        })
        })
      }
    

    render() {

        return (
            
                <div className="pic-container">
                    <img src={ this.props.picture.image} alt={this.props.picture.alt} />
                    <div className="button-container">
                    <Button color="success" onClick={(e) => {this.props.deleteItem(this.props.picture.id)} } >Buy Now</Button>{' '}
                    <Button color="info" onClick={(e)=> {this.moreInfo(this.props.picture.id)}} >More info</Button>{' '}
                    <Button color="warning" onClick={(e) => {this.props.addToCart(this.props.picture.id)} } >Add to Cart</Button>{' '}
                    </div>
                        <div className="info-box">
                            {this.state.info}
                        </div>

                </div>        
            
        );
    }
}

export default Item;