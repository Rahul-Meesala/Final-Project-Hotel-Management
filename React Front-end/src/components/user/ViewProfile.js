import React from 'react'
import {Link} from 'react-router-dom' 


export default function ViewProfile() {
    return (
        <div>
            <nav class="navbar navbar-light" style={{backgroundColor:"pink"}}>
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
                    <li class="nav-item3 active">
                        <Link class="nav-link" to="/">Logout</Link>
                    </li>
                </ul>
            </nav>
        <div style={{backgroundImage:"url(https://cdn.pixabay.com/photo/2019/09/12/15/21/resort-4471852_960_720.jpg)",height:680,backgroundSize:1350,backgroundRepeat:"no-repeat"}}>
            
            <h2 style={{textAlign:"center"}}>Our Services</h2><br/>
            <p style={{color:"white",fontStyle:"italic"}}>
            A hotel is an establishment that provides paid lodging on a short-term basis. Facilities provided inside a hotel room may range from 
            a modest-quality mattress in a small room to large suites with bigger, 
            higher-quality beds, a dresser, a refrigerator and other kitchen facilities, upholstered chairs, a flat screen television, and en-suite bathrooms. 
            </p>

            <h2 style={{color:"black",fontStyle:"italic"}}>Services Offered:</h2>

            <ul>
                <li style={{color:"white",fontStyle:"italic",fontSize: "20px"}}>Ambulance Service.</li>
                <li style={{color:"white",fontStyle:"italic",fontSize: "20px"}}>Free Wifi.</li>
                <li style={{color:"white",fontStyle:"italic",fontSize: "20px"}}>Car parking.</li>
                <li style={{color:"white",fontStyle:"italic",fontSize: "20px"}}>Interconnecting rooms.</li>
                <li style={{color:"white",fontStyle:"italic",fontSize: "20px"}}>24 Hour security.</li>
                <li style={{color:"white",fontStyle:"italic",fontSize: "20px"}}>Swimming pool.</li>
                <li style={{color:"white",fontStyle:"italic",fontSize: "20px"}}>Cafteria</li>

            </ul>

  
</div>
</div>
    )
}
