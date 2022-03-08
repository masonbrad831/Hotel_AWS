import React from 'react';

var URL = 'https://sw6zper811.execute-api.us-west-2.amazonaws.com/test/ammenities';

const Ammenities = () => {
    
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

    return (
        <div>
            <div>
                {data.map((item,index) => (
                    <div key={index}>
                        <h4>{item.ammenities}</h4>
                        <h4>{item.type}</h4>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Ammenities;