import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import RoomService from '../../services/RoomService'


export default class GetVaccantRoom extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             vrooms :[]
        }
        this.editRoom = this.editRoom.bind(this);
    }
    editRoom(roomId){
        this.props.history.push(`/payment/${roomId}`);
    }
    componentDidMount(){
        RoomService.getvaccantroom().then((res)=>{
            this.setState({vrooms:res.data})
        })
    }
    render() {
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


            <div className="card-body">

            <table class="table table-bordered">
  <thead>
    <tr>
      
      <th >roomId</th>
      <th >roomType</th> 
      <th >roomCost</th>
      <th >roomStatus</th>
      <th>Book Room</th>
     
    </tr>
  </thead>
  <tbody>
      {
          this.state.vrooms.map((vroom) =>
              <tr key={vroom.id}>
                   <td>{vroom.roomId}</td> 
                  <td>{vroom.roomType}</td>
                  <td>{vroom.roomCost}</td>
                  <td>{vroom.roomStatus}</td>
                  <td><button className="btn-primary"onClick={()=> this.editRoom(vroom.roomId)} >Book Now</button></td>
              </tr>
              
          )
      }    
  </tbody>

                    </table>
            </div>
        </div>
        )
    }
}
