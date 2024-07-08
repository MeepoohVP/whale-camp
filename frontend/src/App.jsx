import axios from 'axios';
import './App.css';
import './index.css';
import { useState } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Card from './components/Card';
import Refresh from './components/Refresh';
const options = {
  method: 'GET',
  url: 'https://sea-surface-temperature.p.rapidapi.com/historical',
  params: {
    latlon: '25.80423,-80.12441',
    startDate: '20220715',
    endDate: '20220717'
  },
  headers: {
    'x-rapidapi-key': '42dc2f1aa5msh5bf1af0cc42368fp1f03c6jsn88c35a62d997',
    'x-rapidapi-host': 'sea-surface-temperature.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
const spanStyle = {
  padding: '20px',
  background: '#efefef',
  color: '#000000'
}
const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '400px'
}
const slideImages = [
  {
    url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    caption: 'Slide 1'
  },
  {
    url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
    caption: 'Slide 2'
  },
  {
    url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    caption: 'Slide 3'
  },
];

function App() {
  const [userList, setUserList] = useState([]);
  const apiCall = () => {
    axios.get('http://10.4.53.25:4006/user').then((res) => {
      //this console.log will be in our frontend console
      setUserList(res.data);
    })
  }
  
  let dt = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus minima nobis iure ducimus eos explicabo natus, soluta repellat dolorem repellendus.";
  return (
    <>
    {Refresh}
    <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                <span style={spanStyle}>{slideImage.caption}</span>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
      <div className="px-2 pt-4 relative">
        <h3 className='text-3xl font-semibold'>Campaign</h3>
        <div className="card-channel">
        <Card topic={"Topic"}/> <Card topic={"Topic"}/><Card topic={"Topic"}/><Card topic={"Topic"}/><Card topic={"Topic"}/><Card topic={"Topic"}/><Card topic={"Topic"}/>
        </div>
      </div>
      <div className="App">
      <header className="App-header">

        <button onClick={apiCall} className={`btn btn-primary text-red-300`}>Make API Call</button>
      </header>
      {userList.map((val, key) => {
        return (
          <>
          <p>{val.userId}</p>
          <p>{val.userName}</p>
          </>
        )
      })}
    </div>
    
    </>
  )
}

export default App
