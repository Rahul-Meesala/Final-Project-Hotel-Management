import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class AdminHome extends Component {
    render() {
        return (
            <div style={{backgroundImage:"url(https://logos.textgiraffe.com/logos/logo-name/Admin-designstyle-boots-o.png)",height:700,backgroundSize:1360,backgroundRepeat:"no-repeat"}}>
                
                 <nav class="navbar navbar-light" style={{backgroundColor:"lightblue"}}>
                <span class="navbar-brand mb-0 h1">Admin Portal</span>

                <ul class="navbar-nav mr-auto">
                    <li class="nav-item1 active">
                        <Link class="nav-link" to="/viewroom">View All Rooms</Link>
                    </li>
                </ul>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item2 active">
                        <Link class="nav-link" to="/viewpay">View Payments</Link>
                    </li>
                </ul> 
            
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item2 active">
                        <Link class="nav-link" to="/viewcus">View Customers</Link>
                    </li>
                </ul>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item2 active">
                        <Link class="nav-link" to="/viewstaff">View staffs</Link>
                    </li>
                </ul>
                 <ul class="navbar-nav mr-auto">
                    <li class="nav-item2 active">
                        <Link class="nav-link" to="/">Logout</Link>
                    </li>
                </ul> 
            </nav>  
            <marquee scrollamount="22"><h4 style={{textAlign:"center"}}> Welcome to Admin portal</h4></marquee>
            </div>
        )
    }
}
