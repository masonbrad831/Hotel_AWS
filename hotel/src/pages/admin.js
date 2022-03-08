import React, {Component} from 'react';
import axios from 'axios';

var activityURL = 'https://sw6zper811.execute-api.us-west-2.amazonaws.com/test/activities';
var roomURL = 'https://sw6zper811.execute-api.us-west-2.amazonaws.com/test/room';
var ammenitiesURL = 'https://sw6zper811.execute-api.us-west-2.amazonaws.com/test/ammenities';


class Admin extends Component {


    constructor(props) {
      super(props)
    
      this.state = {
        heading : '',
        type : '',
        desc : '',
        img : '',
        link : ''
        }
    }

    


    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    
    activityHandler = (e) => {
        e.preventDefault();
        console.log(this.state)
        axios.post(activityURL, this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    roomHandler = (e) => {
        e.preventDefault();
        console.log(this.state)
        axios.post(roomURL, this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    ammenitiesHandler = (e) => {
        e.preventDefault();
        console.log(this.state)
        axios.post(ammenitiesURL, this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const {heading, type, desc, img, link} = this.state;

        return (
            <div>
                <div>
                    <div>
                        <form onSubmit={this.activityHandler}>
                            <h1>Create Activities</h1>
                            <input type={'text'} name={'heading'} placeholder={"Name"} required onChange={this.changeHandler}></input>
                            <input type={'text'} name={'type'} placeholder={"Type"} required onChange={this.changeHandler}></input>
                            <input type={'text'} name={'desc'} placeholder={"Description"} required onChange={this.changeHandler}></input>
                            <input type={'text'} name={'img'} placeholder={"Image URL"} required onChange={this.changeHandler}></input>
                            <input type={'text'} name={'link'} placeholder={"Website URL"} required onChange={this.changeHandler}></input>
                            <button>CREATE</button>
                        </form>
    
                        
                        <form>
                            <h1>Create Ammenities</h1>
                            <input type={"text"} placeholder={"Example: Coffee"}/>
                            <select>
                                <option value={"inRoom"}>In Room</option>
                                <option value={"onSite"}>On Site</option>
                            </select>
                            <button type={'submit'} title={'Create'}>CREATE</button>
                        </form>
                        <form>
                            <h1>Create Room</h1>
                            <input type={'text'} placeholder={"Room Number"}/>
                            <input type={'text'} placeholder={"Floor Number"}/>
                            <label>Is Available?</label>
                            <input type={'checkbox'} checked={true} onChange={this.changeHandler}/>
                            <label>Is Clean?</label>
                            <input type={'checkbox'} checked={true}/>
                            <button>CREATE</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Admin;