import axios from 'axios'

const url1 ="http://localhost:8080/getVaccantRooms"
const url2 = "http://localhost:8080/getroom"
const url3 = "http://localhost:8080/addroom"
const url4 = "http://localhost:8080/updateroom"
const url5 ="http://localhost:8080/getoneroom"
const URL6 = "http://localhost:8080/deleteroom"

class RoomService {

    getvaccantroom(){
        return axios.get(url1);
    }

    getallroom(){
        return axios.get(url2);
    }
    addroom(rooms) {
        return axios.post(url3,rooms);
    }
    updateroom(rooms,roomId){
        return axios.put(url4+'/'+ roomId,rooms)
    }
    getRoomById(roomId){
        return axios.get(url5+'/' + roomId)
    }
    deleteRoom(roomId){
        return axios.delete(URL6+'/'+roomId);
    }
}
export default new RoomService();