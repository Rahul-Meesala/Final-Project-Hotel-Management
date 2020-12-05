import React, { Component } from 'react'
import RoomService from '../../services/RoomService'



export default class AddRoom extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             roomId:this.props.match.params.roomId,
             roomType:'',
             roomCost:'',
             roomStatus:''
        }
        this.changeTypeHandler = this.changeTypeHandler.bind(this);
        this.changeCostHandler = this.changeCostHandler.bind(this);
        this.changeStatusHandler = this.changeStatusHandler.bind(this); 
        this.editRoom= this.editRoom.bind(this);
    }
    componentDidMount(){
        if(this.state.roomId === -1){
           return
           }
       else{
           
           RoomService.getRoomById(this.state.roomId).then((res)=>{
               let room = res.data;
               this.setState({roomType:room.roomType,
               roomCost:room.roomCost,
           roomStatus:room.roomStatus
       });
           });
       }  
   }
   cancel=(e)=>{
    e.preventDefault()
    this.props.history.push('/viewroom')
}
editRoom=(e)=>{
    e.preventDefault()
    let rooms ={roomType:this.state.roomType,roomCost:this.state.roomCost,roomStatus:this.state.roomStatus}
    console.log('rooms =>' +JSON.stringify(rooms));

    if(this.state.roomId === -1){
        RoomService.addroom(rooms).then(res=>{
          this.props.history.push('/viewroom')
        })
        
    }
    else{
        console.log(this.state.roomId)
        RoomService.updateroom(rooms,this.state.roomId).then(res=>{
            if(this.state.roomStatus === 1){
                this.props.history.push('/admin') //status
                alert("updated Successfully")
            }
            else{
                this.props.history.push('/viewroom')
                alert("Room updated Successfully")
            }  
        })
    } 
}

    // saveRoom=(e)=>{
    //     e.preventDefault()
    //     let rooms ={roomType:this.state.roomType,roomCost:this.state.roomCost,roomStatus:this.state.roomStatus}
    //     console.log('rooms =>' +JSON.stringify(rooms));
    //     RoomService.addRoom(rooms).then(res=>{
    //         this.props.history.push("/viewroom")
    //     })
    // }
    changeTypeHandler =(event)=>{
        this.setState({roomType:event.target.value})
    }
    changeCostHandler=(event)=>{
        this.setState({roomCost:event.target.value})
    }
    changeStatusHandler=(event)=>{
        this.setState({roomStatus:event.target.value})
    }
    getTitle(){
        if(this.state.roomId === -1){
            return <h2 style={{color:""}} className="text-center">Add Room </h2>
        }
        else{
            return <h2 style={{color:"yellow"}} className="text-center">Update Room</h2>
        }
    }
    render() {
        return (
             <div style={{backgroundImage:"url(https://cdn.pixabay.com/photo/2016/07/26/18/27/kitchen-1543487_960_720.jpg)",height:700,backgroundSize:1400}}>
                
                <div>
                        {
                            this.getTitle()
                        }
                 </div>
                
                 <form >
                  <div class="form-group">
                    <label style={{color:"blue"}}>Room Type</label>
                    <input type="text" class="form-control"  name="roomType"  value={this.state.roomType} onChange={this.changeTypeHandler}/>
                  </div>
                  <div class="form-group">
                    <label style={{color:"blue"}}>Room Cost</label>
                    <input type="number" class="form-control"  name="roomCost"  value={this.state.roomCost} onChange={this.changeCostHandler}/>
                  </div>
                  <div class="form-group">
                    <label style={{color:"blue"}}>Room Status</label>
                    <input type="number" class="form-control"  name="roomStatus"  value={this.state.roomStatus} onChange={this.changeStatusHandler}/>
                  </div>
                  <button type="submit" class="btn btn-primary" onClick={this.editRoom}>Save</button>
                <button className="btn btn-danger" onClick={this.cancel} style={{marginLeft:"20px"}}> Cancel</button>
                  </form>    
            </div>
        )
    }
}
