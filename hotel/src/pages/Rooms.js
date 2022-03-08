import React from 'react';


var room = 'https://sw6zper811.execute-api.us-west-2.amazonaws.com/test/room';
var rooms = 'https://sw6zper811.execute-api.us-west-2.amazonaws.com/test/rooms';

const Rooms = () => {

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
        var newUrl = room + '?roomId=' + roomId;
        fetch(newUrl, {method : 'DELETE'});
        console.log(newUrl)
        getRooms();
    }

    return (
    <div>
        <div id="table">

            <table style={{
            display: 'block',
            justifyContent: 'center',
            marginLeft: '25%',
            height: '90vh',
        }}>
                <tr>
                    <th style={{borderRight: 'solid'}}>Room Number</th>
                    <th style={{borderRight: 'solid'}}> Floor Number</th>
                    <th style={{borderRight: 'solid'}}>Is Available?</th>
                    <th>Is Clean?</th>
                </tr>
                {data.map((item,index) => (
                    <tr key={index}>
                        <td style={{borderRight: 'solid'}}>{item.room}</td>
                        <td style={{borderRight: 'solid'}}>{item.floor}</td>
                        <td style={{borderRight: 'solid'}}>{item.available}</td>
                        <td > {item.clean}</td>
                    </tr>
                ))}
            </table>

        </div>
    </div>
    );
};

export default Rooms;