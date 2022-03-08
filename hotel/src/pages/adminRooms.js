import React, {useState} from 'react';
import axios from 'axios';

var url = 'https://sw6zper811.execute-api.us-west-2.amazonaws.com/test/room';
var roomurl = 'https://sw6zper811.execute-api.us-west-2.amazonaws.com/test/room';
var rooms = 'https://sw6zper811.execute-api.us-west-2.amazonaws.com/test/rooms';

const AdminRooms = () => {

    const[room, setRoom] = useState('');
    const[floor, setFloor] = useState('');
    const[available, setAvailable] = useState('');
    const[clean, setClean] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const item = {room, floor, available, clean};

        console.log(item)
        axios.post(url, item)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    const [data, setData] = React.useState([{}])

    function getRooms() {
        fetch(rooms).then(
        res => res.json()
        ).then (
            data => {
            setData(data.body)
            console.log('data' + data)
        }
        )
    }
    React.useEffect(() => {
        getRooms();
    }, [])

    function deleteRoom(roomId){
        var newUrl = roomurl + '?roomId=' + roomId;
        fetch(newUrl, {method : 'DELETE'});
        console.log(newUrl)
        getRooms();
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Create Room</h1>
                <input type={'text'} placeholder={"Room Number"} value={room} onChange={(e) => setRoom(e.target.value)}/>
                <input type={'text'} placeholder={"Floor Number"} value={floor} onChange={(e) => setFloor(e.target.value)}/>
                <select required value={available} onChange={(e) => setAvailable(e.target.value)}>
                    <option value={""} selected disabled hidden>Available?</option>
                    <option value={"True"} onChange={(e) => setAvailable(e.target.value)}>Is Available</option>
                    <option value={"False"} onChange={(e) => setAvailable(e.target.value)}>Not Available</option>
                </select>
                <select required value={clean} onChange={(e) => setClean(e.target.value)}>
                    <option value={""} selected disabled hidden>Clean?</option>
                    <option value={"True"} onChange={(e) => setClean(e.target.value)}>Clean</option>
                    <option value={"False"} onChange={(e) => setClean(e.target.value)}>Dirty</option>
                </select>
                <button>CREATE</button>
            </form>

            <div id="table">

            <table style={{
            display: 'block',
            justifyContent: 'center',
            marginLeft: '25%',
            height: '90vh'}}>
                <tr>
                    <th>Room Number</th>
                    <th>Floor Number</th>
                    <th>Is Available?</th>
                    <th>Is Clean?</th>
                </tr>
                {data.map((item,index) => (
                    <tr key={index}>
                        <td>{item.room}</td>
                        <td>{item.floor}</td>
                        <td>{item.available}</td>
                        <td>{item.clean}</td>
                        <td>
                            <button id='tableButton'
                                onClick={() => deleteRoom(item.roomId)}>
                                    Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </table>

        </div>
            
        </div>
    );
};

export default AdminRooms;