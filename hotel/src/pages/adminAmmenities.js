import React, {useState} from 'react';
import axios from 'axios';
var URL = 'https://sw6zper811.execute-api.us-west-2.amazonaws.com/test/ammenities';

const AdminAmmenities = () => {

    const[ammenities, setAmmenities] = useState('');
    const[type, setType] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const item = {ammenities, type};

        console.log(item)
        axios.post(URL, item)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    const [data, setData] = React.useState([{}])

    function getAmmenities() {
        fetch(URL).then(
        res => res.json()
        ).then (
            data => {
            setData(data.body)
            console.log('data' + data)
        }
        )
    }
    React.useEffect(() => {
        getAmmenities();
    }, [])

    function deleteAmmenities(id){
        var newUrl = URL + '?roomId=' + id;
        fetch(newUrl, {method : 'DELETE'});
        console.log(newUrl)
        getAmmenities();
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Create Ammenities</h1>
                <input type={"text"} placeholder={"Example: Coffee"} required value={ammenities} onChange={(e) => setAmmenities(e.target.value)}/>
                <select required value={type} onChange={(e) => setType(e.target.value)}>
                    <option value={""} selected disabled hidden>Select Here</option>
                    <option value={"inRoom"} onChange={(e) => setType(e.target.value)}>In Room</option>
                    <option value={"onSite"} onChange={(e) => setType(e.target.value)}>On Site</option>
                </select>
                <button type={'submit'} title={'Create'}>CREATE</button>
            </form>
            <div>
                <div>
                    <h1>In Room</h1>
                    {data.map((item,index) => (
                        <div key={index}>  
                            <h5 key={index}>{item.ammenities}</h5>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AdminAmmenities;