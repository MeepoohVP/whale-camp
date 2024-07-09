import axios from 'axios';
import './App.css';
import './index.css';
import { useState } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Card from './components/Card';
import Refresh from './components/Refresh';
import Star from './assets/star.png';
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

function App() {
  const [userList, setUserList] = useState([]);
  const [campaignList, setCampaignList] = useState([]);
  const apiCall = () => {
    axios.get('http://10.4.53.25:4006/user').then((res) => {
      //this console.log will be in our frontend console
      setUserList(res.data);
    })
  }
  axios.get('http://10.4.53.25:4006/campaign').then((res) => {
      //this console.log will be in our frontend console
      setCampaignList(res.data);
    })
  
  
  return (
    <>
    {Refresh}
    <div className="cover">
        
      </div>
      <div className="px-2 pt-4 relative">
        <h3 className='text-3xl font-semibold'>Campaign</h3>
        <div className="card-channel">
        {campaignList.map((val, key) => {
        return (
          <>
          <Card topic={val.campaignName} pic={val.imgLink} pt={val.rewardPoint}/>
          </>
        )
      })}
        
        </div>
      </div>

    
    </>
  )
}

export default App
