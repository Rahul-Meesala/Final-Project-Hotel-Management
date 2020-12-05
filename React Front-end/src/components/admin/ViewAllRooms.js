import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import RoomService from '../../services/RoomService'

export default class ViewAllRooms extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             rooms :[]
        }
        this.addRoom =this.addRoom.bind(this);
        this.editRoom =this.editRoom.bind(this);
        this.deleteroom=this.deleteroom.bind(this);
    }
    deleteroom(roomId){
        RoomService.deleteRoom(roomId).then(res=>{
            this.setState({rooms:this.state.rooms.filter(room =>room.roomId !== roomId )})
        })
  }
  editRoom(roomId){
    this.props.history.push(`/addroom/${roomId}`);
}
    componentDidMount(){
        RoomService.getallroom().then((res)=>{
            this.setState({rooms:res.data})
        })
    }
    addRoom(){
        this.props.history.push('/addroom/-1');
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
      <th >roomId</th>
      <th >roomType</th> 
      <th >roomCost</th>
      <th >roomStatus</th>
      <th>Actions</th>
     
    </tr>
  </thead>
  <tbody>
      {
          this.state.rooms.map((room) =>
              <tr key={room.id}>
                   <td>{room.roomId}</td> 
                  <td>{room.roomType}</td>
                  <td>{room.roomCost}</td>
                  <td>{room.roomStatus}</td>
                  <td>
                      <button onClick ={ () => this.editRoom(room.roomId)} className = "btn btn-warning">Update</button>
                      <button onClick={()=> this.deleteroom(room.roomId)} className="btn btn-danger" style={{marginLeft:"20px"}} >Delete</button>
                  </td>
              </tr>   
          )
      }
  </tbody>

                    </table>
                    <button  onClick={this.addRoom} className="btn btn-primary">Add Room</button>

            </div>
        )
    }
}
