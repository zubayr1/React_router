import React from 'react'
import { Component } from 'react'
import {  Menu, Image, Button } from 'semantic-ui-react'
import logo from '../image/logo.png'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    
    login()
    {

    }

    signup()
    {
        
    }
 
    render(){
    return (
        <div>
            <div className='mg'>
     <Menu  secondary>
     <Link to="/">
           <Image src={logo}  circular size='mini'/>
           </Link>
           <Menu.Menu position='right'>
            
            <Menu.Item
             name=''
           />
           <Link to="/login">
             <Button size='medium' basic color='blue' onClick={()=> this.login()}>Login</Button>
             </Link>
             <Menu.Item
             name=''
           />
           <Link to="/signup">
             <Button size='medium' basic color='blue' onClick={()=> this.signup()}>SignUp</Button>
             </Link>
            
           </Menu.Menu>
 
           
           
         </Menu>
         </div>
        </div>
    )
    }
}
