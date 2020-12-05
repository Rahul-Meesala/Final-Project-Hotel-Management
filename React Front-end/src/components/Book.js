import React from 'react'
import {Link} from 'react-router-dom'
import './Book.css'

export default function Book() {
    return (
        <div>
            <nav class="navbar navbar-light" style={{backgroundColor:"lightblue"}}>
                <span class="navbar-brand mb-0 h1">Customer</span>
            
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item1 active">
                        <Link class="nav-link" to="/vroom">Book Room</Link>
                    </li>
                </ul>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item2 active">
                        <Link class="nav-link" to="/viewservice">View Services</Link>
                    </li>
                </ul>
                 <ul class="navbar-nav mr-auto">
                    <li class="nav-item2 active">
                        <Link class="nav-link" to="/">Logout</Link>
                    </li>
                </ul> 
            </nav>
            <div style={{backgroundImage:"url(https://cdn.pixabay.com/photo/2016/04/15/11/45/hotel-1330841_960_720.jpg)",height:670,backgroundSize:1352,backgroundRepeat:"no-repeat"}}>
           <marquee scrollamount="20"><h2 style={{textAlign:"center"}}>Welcome To Customer Portal</h2></marquee>

            </div>
        </div>
    )
}
