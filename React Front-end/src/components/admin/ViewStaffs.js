import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import StaffService from '../../services/StaffService'

export default class ViewStaffs extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             staffs : []
        }
        this.addstaff =this.addstaff.bind(this);
        this.editstaff =this.editstaff.bind(this);
        this.deletestaff=this.deletestaff.bind(this);
    }
    editstaff(staffId){
        this.props.history.push(`/addstaff/${staffId}`);
            }
    deletestaff(staffId){
                StaffService.deletestaff(staffId).then(res=>{
                    this.setState({staffs:this.state.staffs.filter(staff =>staff.staffId !== staffId )})
                })
    }
    addstaff(){
                this.props.history.push('/addstaff/-1');
            }
    componentDidMount(){
        StaffService.getStaff().then((res)=>{
            this.setState({staffs:res.data})
        })
    }
    render() {
        return (
            <div>
                <nav class="navbar navbar-light" style={{backgroundColor:"lightblue"}}>
                <Link class="nav-link" to="/admin"><span class="navbar-brand mb-0 h1">Admin Portal</span></Link>

                <ul class="navbar-nav mr-auto">
                    <li class="nav-item1 active">
                        <Link class="nav-link" to="/viewcus">View Customers</Link>
                    </li>
                </ul>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item2 active">
                        <Link class="nav-link" to="/viewpay">View Payments</Link>
                    </li>
                </ul> 
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item2 active">
                        <Link class="nav-link" to="/viewroom">View Rooms</Link>
                    </li>
                </ul>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item3 active">
                        <Link class="nav-link" to="/viewstaff">View Staffs</Link>
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
      <th >staffId</th>
      <th >staffName</th> 
      <th >staffSalary</th>
      <th >Action</th>
      
    </tr>
  </thead>
  <tbody>
      {
          this.state.staffs.map((staff) =>
              <tr key={staff.staffId}>
                   <td>{staff.staffId}</td> 
                  <td>{staff.staffName}</td>
                  <td>{staff.staffSalary}</td>

                  <td><button onClick={ () => this.editstaff(staff.staffId)}className="btn btn-warning">Update Staff</button>
                  <button onClick={()=> this.deletestaff(staff.staffId)} className="btn btn-danger" style={{marginLeft:"20px"}} >Delete</button>
                  </td>
                  
              </tr>
              
          )
      }
      
  </tbody>
                </table>
                <button onClick={this.addstaff}className="btn btn-primary">Add Staff</button>
                

            </div>
        )
    }
}
