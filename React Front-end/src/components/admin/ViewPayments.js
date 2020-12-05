import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import PaymentService from '../../services/PaymentService'

export default class ViewPayments extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             payment:[]
        }
    }
    componentDidMount(){
        PaymentService.getallpay().then((res)=>{
            this.setState({payment:res.data});
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
            <table class="table table-striped">
  <thead>
    <tr>
     
      <th >paymentId</th>
      <th >roomId</th> 
      <th >Customer Name</th>
      <th >RoomCost</th>
      <th >cvv</th>
      
    </tr>
  </thead>
  <tbody>
      {
          this.state.payment.map((pay) =>
              <tr key={pay.id}>
                   <td>{pay.paymentId}</td> 
                  <td>{pay.roomId}</td>
                  <td>{pay.custName}</td>
                  <td>{pay.roomCost}</td>
                  <td>{pay.cvv}</td>
                 
              </tr>
              
          )
      }
      
  </tbody>

                    </table>

            </div>
        )
    }
}
