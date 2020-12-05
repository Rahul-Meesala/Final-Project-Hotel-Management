import React from 'react';
import'./Service.css'
import {Link} from 'react-router-dom' 


export default function Services() {
    return (
        <div>
            <nav class="navbar navbar-light" style={{backgroundColor:"lightblue"}}>
                <span class="navbar-brand mb-0 h1">Online Hotel Booking System</span>
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
                        <Link class="nav-link" to="login">Login<span class="sr-only">(current)</span></Link>
                    </li>
                </ul>
            </nav>
        <div style={{backgroundImage:"url(https://media-cdn.tripadvisor.com/media/photo-s/11/ec/a6/99/wallpaper-hotel-burj.jpg)",height:660,backgroundSize:1360}}>
           
            <h2 style={{textAlign:"center"}}>AboutUs</h2><br/>
            
            <div>
        <p><i>A hotel is an establishment that provides paid lodging on a short-term basis. Facilities provided inside a hotel room may range from a modest-quality mattress in a small room to large suites with bigger, higher-quality beds, a dresser, a refrigerator and other kitchen facilities, upholstered chairs, a flat screen television, and en-suite bathrooms. Small, lower-priced hotels may offer only the most basic guest services and facilities. Larger, higher-priced hotels may provide additional guest facilities such as a swimming pool, business centre (with computers, printers, and other office equipment), childcare, conference and event facilities, tennis or basketball courts, gymnasium, restaurants, day spa, and social function services</i></p>
        <p></p>
        <h6><u>About Luxury:</u></h6>
        <p>International luxury hotels offer high-quality amenities, full-service accommodations, on-site full-service restaurants, and the highest level of personalized and professional service in major or capital cities. International luxury hotels are classified with at least a Five Diamond rating or Five Star hotel rating depending on the country and local classification standards.</p>

        <h6><u>Services:</u></h6>
        <p>We often provide a wide array of guest services and on-site facilities. Commonly found amenities may include: on-site food and beverage (room service and restaurants), meeting and conference services and facilities, fitness center, and business center. Upscale full-service hotels range in quality from upscale to luxury. This classification is based upon the quality of facilities and amenities offered by the hotel</p>
        <h6><u>Contact Details:</u></h6>
        <p>Name : Hotel GreenPark</p>
        <p>CellNo:+91 9010764909</p>
        <p>Email:greenparkservices@gmail.com</p>

      </div>
       </div>


        </div>
    )
}
