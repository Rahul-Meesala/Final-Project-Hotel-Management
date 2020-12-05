import React, { Component } from 'react'
import {Link}  from 'react-router-dom';
import PaymentService from '../../services/PaymentService';

export default class Payment extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            roomId:this.props.match.params.roomId,
            custName:'',
            roomCost:'',
            cardNumber:'',
            cvv:''
        }
    }
    cancel=(e)=>{
      e.preventDefault()
      this.props.history.push('/vroom')
    }
    payment=(e)=>{
        e.preventDefault()
        let payment = {roomId:this.state.roomId ,custName:this.state.custName,roomCost:this.state.roomCost,cardNumber:this.state.cardNumber,cvv:this.state.cvv}
        console.log('payment =>' +JSON.stringify(payment));
        PaymentService.addpayment(payment).then(res =>{
          alert("Your payment is Successfully done")
          this.props.history.push('/status');
        })
      }
    changeIdHandler = (event)=>{
        this.setState({roomId:event.target.value})
      }
      changeCustNameHandler=(event)=>{
        this.setState({custName:event.target.value})
      }
      changeRoomCostHandler=(event)=>{
        this.setState({roomCost:event.target.value})
      }
      changeCardNumberHandler=(event)=>{
        this.setState({cardNumber:event.target.value})
      }
      changeCvvHandler=(event)=>{
        this.setState({cvv:event.target.value})
      }
    render() {
        return (
            <div style={{backgroundImage:"url(https://cdn.pixabay.com/photo/2016/09/16/09/21/card-1673581_960_720.png)",height:680,backgroundSize:1350,backgroundRepeat:"no-repeat"}}>
              
                <nav class="navbar navbar-light" style={{backgroundColor:"wheat"}}>
                <span class="navbar-brand mb-0 h1">Customer</span>
            
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item1 active">
                        <Link class="nav-link" to="/vroom">Book Room</Link>
                    </li>
                </ul>
                 <ul class="navbar-nav mr-auto">
                    <li class="nav-item2 active">
                        <Link class="nav-link" to="/">Logout</Link>
                    </li>
                </ul> 
            </nav>
            <h1>Make Payment</h1>
                     <form>
                     <div class="form-group">
                    <label style={{color:"black"}}>RoomId</label>
                    <input type="number" class="form-control"  name="roomId"  value={this.state.roomId} onChange={this.changeIdHandler}/>
                  </div>
                  <div class="form-group">
                    <label style={{color:"black"}}>Cutomer Name</label>
                    <input type="text" class="form-control"  name="custName"  value={this.state.custName} onChange={this.changeCustNameHandler}/>
                  </div>
                  <div class="form-group">
                    <label style={{color:"black"}}>Room Cost</label>
                    <input type="number" class="form-control"  name="roomCost"  value={this.state.roomCost} onChange={this.changeRoomCostHandler}/>
                  </div>
                  <div class="form-group">
                    <label style={{color:"black"}}>Card Number</label>
                    <input type="number" class="form-control"  name="cardNumber"  value={this.state.cardNumber} onChange={this.changeCardNumberHandler}/>
                  </div>
                  <div class="form-group">
                    <label style={{color:"black"}}>CVV</label>
                    <input type="number" class="form-control"  name="cvv"  value={this.state.cvv} onChange={this.changeCvvHandler}/>
                  </div>
                  <button type="submit" class="btn btn-success" onClick={this.payment}>Make Payment</button>
                  <button className="btn btn-danger" onClick={this.cancel} style={{marginLeft:"15px"}}>Cancel</button>
                     </form>
                
            </div>
        )
    }
}
