import React, { Component } from 'react'
import StaffService from '../../services/StaffService'


export default class AddStaffs extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             staffId:this.props.match.params.staffId,
             staffName:'',
             staffSalary:''
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeSalaryHandler = this.changeSalaryHandler.bind(this); 
        this.editstaff= this.editstaff.bind(this);
    }
    componentDidMount(){
        if(this.state.staffId == -1){
           return
           }
       else{
           
           StaffService.getstaffbyid(this.state.staffId).then((res)=>{
               let staffs = res.data;
               this.setState({staffName:staffs.staffName,
                        staffSalary:staffs.staffSalary,
           
       });
           });
       }
       
   }
   cancel=(e)=>{
    e.preventDefault()
    this.props.history.push('/viewstaff')
}
    editstaff=(e)=>{
        e.preventDefault()
        let staffs ={staffName:this.state.staffName, staffSalary:this.state.staffSalary}
        console.log('staffs =>' +JSON.stringify(staffs));
 
        if(this.state.staffId == -1){
            StaffService.addStaff(staffs).then(res=>{
              this.props.history.push('/viewstaff')
            })
            
        }
        else{
            console.log(this.state.staffId)
            StaffService.updatestaff(staffs,this.state.staffId).then(res=>{
                this.props.history.push('/viewstaff')
            })
        }
         
    }
    
    changeNameHandler =(event)=>{
        this.setState({staffName:event.target.value})
    }
    changeSalaryHandler=(event)=>{
        this.setState({staffSalary:event.target.value})
    }
    getTitle(){
        if(this.state.staffId == -1){
            return <h2 style={{color:"yellow"}} className="text-center">Add Staff </h2>
        }
        else{
            return <h2 style={{color:"yellow"}} className="text-center">Update Staff</h2>
        }
    }
    render() {
        return (
            <div>
               {/* <h1 style={{color: "cream",textAlign:"center"}}>Add Staff</h1> */}
               <div>
                     {
                        this.getTitle()
                     }
                 </div>
               
                 <form >
                  <div class="form-group">
                    <label style={{color:"black"}}>Name</label>
                    <input type="text" class="form-control"  name="staffName"  value={this.state.staffName} onChange={this.changeNameHandler}/>
                  </div>
                  <div class="form-group">
                    <label style={{color:"black"}}>Staff Salary</label>
                    <input type="number" class="form-control"  name="staffSalary"  value={this.state.staffSalary} onChange={this.changeSalaryHandler}/>
                  </div>
                  <button type="submit" className="btn btn-primary" onClick={this.editstaff}>Save</button>
                  <button className="btn btn-danger" onClick={this.cancel} style={{marginLeft:"20px"}}> Cancel</button>

                  </form>

            </div>
        )
    }
}
