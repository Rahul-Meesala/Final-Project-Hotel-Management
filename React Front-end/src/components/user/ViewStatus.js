import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class ViewStatus extends Component {
    render() {
        return (
            <div>
                 <nav class="navbar navbar-light" style={{backgroundColor:"skyblue"}}>
                <span class="navbar-brand mb-0 h1">Customer</span>
            
                
                 <ul class="navbar-nav mr-auto">
                    <li class="nav-item2 active">
                        <Link class="nav-link" to="/">Logout</Link>
                    </li>
                </ul> 
            </nav>
            <div className="card col-md-6 offset-md-3" style={{backgroundColor:"blue"}}>
                <h3 className="text-center">Room Status</h3>
                <div className="card-body">
                    <div className="row">
                        <label>Your Room Is booked Successfully!!</label>

                    </div>

                </div>

            </div>
            </div>
        )
    }
}
