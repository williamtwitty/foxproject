import React, { Component } from 'react';
import './App.css';
import './components/items.css';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button } from 'reactstrap';
import Item from './components/item';
import axios from 'axios';
import {removeBought, getitems} from './services/manager';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [ {
        image: "https://img0.etsystatic.com/214/0/14059109/il_570xN.1277579746_pf0m.jpg",
        alt: "Rad shirt"},
          {
        image: "https://scontent-dft4-3.cdninstagram.com/t51.2885-15/e35/16122829_240170946429746_5779329614362968064_n.jpg",
        alt: "Sign"
          },
          {
        image: "https://scontent-dft4-3.cdninstagram.com/t51.2885-15/e35/16123643_381380718877581_2290976624163684352_n.jpg",
        alt: "Dog sign"
          },
          {
        image: "https://img0.etsystatic.com/185/0/14059109/il_570xN.1277574808_puxg.jpg",
        alt: "Shot caller shirt"
          },
          {
          image: "https://scontent-dft4-3.cdninstagram.com/t51.2885-15/e35/15337193_1292409157481991_4974862289699078144_n.jpg",
          alt: "Sign"
          },
          {
          image: "https://scontent-dft4-3.cdninstagram.com/t51.2885-15/e35/17882510_430641707300062_5602697323378376704_n.jpg",
          alt: "Sign"
          },
      ],
      collapsed: true
    };

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.moreInfo = this.moreInfo.bind(this);
  }
  

    deleteItem(item) {
      removeBought(item).then(()=> {
      getitems().then((response)=> {
        this.setState({
          items: response
        })
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
      return <Item img = {elem.image} alt={elem.alt}/>
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
      </div>
);
}
}
export default App;
