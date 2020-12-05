import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import RegisterServices from '../../services/RegisterServices'

export default class ViewCustomer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             registers : []
        }
    }
    componentDidMount(){
        RegisterServices.getCustomer().then((res)=>{
            this.setState({registers:res.data});
        })
    }
    render() {
        return (
            <div>
                <nav class="navbar navbar-light" style={{backgroundColor:"lightblue"}}>
                <Link class="nav-link" to="/admin"><span class="navbar-brand mb-0 h1">Admin Portal</span></Link>

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
                    <li class="nav-item3 active">
                        <Link class="nav-link" to="/viewstaff">View staffs</Link>
                    </li>
                </ul>
                 <ul class="navbar-nav mr-auto">
                    <li class="nav-item4 active">
                        <Link class="nav-link" to="/">Logout</Link>
                    </li>
                </ul> 
            </nav>  

            <table class="table table-striped">
  <thead>
    <tr>
      {/* <th >Id</th> */}
      <th >userId</th>
      <th >userName</th> 
      <th >emailId</th>
      <th >password</th>
      <th >phoneNumber</th>
      <th >address</th>
      <th >gender</th>
    </tr>
  </thead>
  <tbody>
      {
          this.state.registers.map((register) =>
              <tr key={register.id}>
                   <td>{register.userId}</td> 
                  <td>{register.userName}</td>
                  <td>{register.emailId}</td>
                  <td>{register.password}</td>
                  <td>{register.phoneNumber}</td>
                  <td>{register.address}</td>
                  <td>{register.gender}</td>
                  <td>{register.role}</td>
              </tr>
              
          )
      }
      
  </tbody>

                    </table>

            </div>
        )
    }
}
