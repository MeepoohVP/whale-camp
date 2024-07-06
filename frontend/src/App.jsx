import axios from 'axios';
import './App.css';
import './index.css';

const apiCall = () => {
  axios.get('http://10.4.53.25:4006/').then((data) => {
    //this console.log will be in our frontend console
    console.log(data.data)
  })
}

function App() {

  return (
    <>
      {/* <div className="App">
      <header className="App-header">

        <button onClick={apiCall} className="btn-secondary btn">Make API Call</button>

      </header>
    </div> */}
    
    </>
  )
}

export default App
