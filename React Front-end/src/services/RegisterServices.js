import axios from'axios';
const   Userurl ="http://localhost:8080/add";
const url2 ="http://localhost:8080/getuser"

 class RegisterServices{

        createUser(register){
        return axios.post(Userurl,register);
    }
    getCustomer(){
        return axios.get(url2);
    }

}
export default new RegisterServices();
