import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom' 

export default function Home() {
    return (
        <div>
             <nav class="navbar navbar-light" style={{backgroundColor:"pink"}}>
                <h6><span class="navbar-brand mb-0 h1">Online Hotel Booking System</span></h6>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item1 active">
                        <Link class="nav-link" to="/">Home</Link>
                    </li>
                </ul>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item2 active">
                        <Link class="nav-link" to="/services">AboutUs</Link>
                    </li>
                </ul>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item3 active">
                        <Link class="nav-link" to="/register">Register</Link>
                    </li>
                </ul>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item4 active">
                        <Link class="nav-link" to="/login">Login<span class="sr-only">(current)</span></Link>
                    </li>
                </ul>
            </nav>
            
    
    <div 
    
    style={{backgroundImage:"url(https://cdn.pixabay.com/photo/2017/03/25/23/11/buildings-2174578_960_720.jpg)",height:650,backgroundSize:1350,backgroundRepeat:"no-repeat"}}>

        <marquee scrollamount="15"><h3 id="home">Welcome To Our Hotel Application</h3></marquee>
    </div>
    
    
 </div> 
    )
}