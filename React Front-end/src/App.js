import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Services from './components/Service';
import AddStaffs from './components/admin/AddStaffs';
import ViewStaffs from './components/admin/ViewStaffs';
import AdminHome from './components/admin/AdminHome';
import ViewCustomer from './components/admin/ViewCustomer';

import Book from './components/Book'
import ViewAllRooms from './components/admin/ViewAllRooms';
import AddRoom from './components/admin/AddRoom';
import GetVaccantRoom from './components/user/GetVaccantRoom';


import ViewStatus from './components/user/ViewStatus';
import Payment from './components/user/Payment';
import ViewPayments from './components/admin/ViewPayments';
import ViewProfile from './components/user/ViewProfile';


function App() {
  return (
    <div className="App">
    <Router>
      <Switch>

          <Route  exact path="/" component={Home}/>
          <Route  exact path="/login"  component={Login}/>
          <Route  exact path="/register" component={Register}/>
          <Route  exact path="/services"  component={Services}/>
          <Route  exact path="/admin" component={AdminHome}/>
          <Route  exact path="/viewcus" component={ViewCustomer}/>
          <Route  exact path="/viewstaff" component={ViewStaffs}/>
          <Route  exact path="/addstaff/:staffId" component={AddStaffs}/>
          <Route  exact path="/show" component={Book}/>
          <Route  exact path="/viewroom" component={ViewAllRooms}/>
          <Route  exact path="/addroom/:roomId" component={AddRoom}/>
          <Route  exact path="/vroom" component={GetVaccantRoom}/>
          <Route  exact path="/payment/:roomId" component={Payment}/>
          <Route  exact path="/viewpay" component={ViewPayments}/>
          <Route  exact path="/status" component={ViewStatus}/>
          <Route  exact path="/viewservice" component={ViewProfile}/>
          

      </Switch>
    </Router>
  </div>
);
}
export default App;



