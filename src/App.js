import React, { Component } from 'react';
import './App.css';
import './components/items.css';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button } from 'reactstrap';
import Item from './components/item';
import {removeBought, getitems, addToCartList} from './services/manager';
import CartItem from './components/cartItem';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      collapsed: true,
      cartList: [],
    };

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }
    componentDidMount(){
      getitems().then((res)=>{
        console.log(res)
        this.setState({
          items: res
        })
      })
    }

    deleteItem(item) {
      removeBought(item).then(()=> {
      getitems().then((response)=> {
        console.log(response)
        this.setState({
          items: response
        })
      })
      })
  }
    addToCart(item){
      addToCartList(item).then((res)=> {
        console.log(res)
        this.setState({
          cartList: res
        })
      })
    }


    toggleNavbar() {
      this.setState({
        collapsed: !this.state.collapsed
      });
    }
  
  
  render() {
    const items = this.state.items.map( elem => {
      return <Item picture={elem} deleteItem={this.deleteItem} addToCart={this.addToCart}/>
    })
    const cartItems = this.state.cartList.map( elem => {
      return <CartItem obj={elem}/>
    })
    return (     

      <div>
        <div className="navbody">

            <Navbar color="faded" light toggleable>
              <NavbarToggler right onClick={this.toggle} />

              <NavbarBrand href="/">Fox Designs</NavbarBrand>
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="/components/">Components</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>

            </Navbar>
            <img src="https://scontent-dft4-3.xx.fbcdn.net/v/t31.0-8/15110452_659557267545411_1168945380155024896_o.jpg?oh=a8ba7a5949a367fe060c7e9122b66596&oe=5A19C77D" alt="logo" />

        </div>

        <div className="main-container">

            {items}

        </div>
        <div className="shopping-container">Shopping Cart
            {cartItems}
              </div>
      </div>
);
}
}
export default App;
