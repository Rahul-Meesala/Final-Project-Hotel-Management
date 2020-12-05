import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import RegisterServices from '../services/RegisterServices'
import './Login.css'

export default class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            //  role : '',
            user:[],
             emailId:'',
             password:'',
             a:''
             
        }
        // this.changeRole = this.changeRole.bind(this);
        this.changeEmail= this.changeEmail.bind(this);
        this.changePassword= this.changePassword.bind(this);
    }

    // changeRole =(event)=>{
    //     this.setState({
    //         role:event.target.value
    //     })
    // }
    changeEmail =(event)=>{
        this.setState({
            emailId:event.target.value
        })
    }
    changePassword= (event)=>{
        this.setState({
            password:event.target.value
        })
    }
    // 
    componentDidMount(){
        let register = {userName:this.state.userName ,emailId:this.state.emailId,password:this.state.password}
        console.log('register =>' +JSON.stringify(register));
        RegisterServices.getCustomer().then((res) => {
            this.setState({ user: res.data});
              this.state.a = (res.data);      
        });
      }
      checkRole=(e)=>{
        e.preventDefault()
    
        for(let i=0;i<this.state.a.length;i++){
            if((this.state.emailId===this.state.a[i].emailId)&&(this.state.password===this.state.a[i].password))
            {
                // alert("Login succesfully");
                this.props.history.push("/show")
            }
          else  if( this.state.emailId === "hoteladmin@gmail.com" && this.state.password === "admin123")
             {
                // alert("Admin Login succesfully");
                 this.props.history.push("/admin")
              }
            //   else{
            //     //   alert("Inavlid user")
            //     this.props.history.push("/login")
            //   }
    
        }
    }
    render() {
        return (
            <div style={{backgroundImage:"url(https://cdn.pixabay.com/photo/2017/01/28/19/31/landscape-2016308_960_720.jpg)",height:660,backgroundSize:1360}}>
                
           <nav class="navbar navbar-light" style={{backgroundColor:"pink"}}>

                <span class="navbar-brand mb-0 h1">Hotel Management System</span>

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
            <h2 style={{textAlign:"center"}}>Login Here</h2>
            
            <form id="lform" name="validform" onsubmit="return validatePassword()">
            <div class="form-group">
            <label style={{color:"black"}}><h6>Email address</h6></label>
              <input type="email" class="form-control" id="emailId" value={this.state.emailId} onChange={this.changeEmail} aria-describedby="emailHelp" placeholder="Enter Email"/>
            </div>
            <div class="form-group">
            <label style={{color:"black"}}><h6>Password</h6></label>
              <input type="password" class="form-control" id="password" value={this.state.password} onChange={this.changePassword} name="pasword1" placeholder="Enter password"/>
            </div>
            <button type="submit" class="btn btn-success" onClick={this.checkRole}>Login</button>
            <Link to="register"><h6 class="l1">New User?Click here to Regisrer</h6></Link>
          </form>
        </div>
        )
    }
}


