import axios from 'axios';
import './App.css';
import './index.css';
import { useState } from 'react';


function App() {
  const [userList, setUserList] = useState([]);
  const apiCall = () => {
    axios.get('http://10.4.53.25:4006/user').then((res) => {
      //this console.log will be in our frontend console
      setUserList(res.data);
    })
  }
  return (
    <>
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
