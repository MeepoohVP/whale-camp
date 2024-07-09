import Card from "./components/Card";
import { useState } from "react";
import axios from "axios";
function Campaign(){
    const [campaignList, setCampaignList] = useState([]);
    const [campName, setCampName] = useState('');
    const [campDt, setCampDt] = useState('');
    const [pic, setPic] = useState('');
    const [contact, setContact] = useState('');
    const [rwPoint, setRwPoint] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [t,setT] = useState(<div></div>);;
    axios.get('http://10.4.53.25:4006/campaign').then((res) => {
        //this console.log will be in our frontend console
        setCampaignList(res.data);
    })
      const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://10.4.53.25:4006/newcampaign',
            {
                campName,
                campDt,
                pic,
                contact,
                rwPoint,
            }
        )
        .then(response => {
            console.log(response.data);
            setIsModalOpen(false);
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
    };
    return(
        <>
        <div className="px-12 py-5 relative">
                <button className="btn btn-neutral rounded-full absolute right-0 top-0 my-5 mx-12" onClick={()=>setIsModalOpen(true)}> Campaign <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                    </svg></button>
<dialog id="my_modal_1" className={`modal ${isModalOpen ? 'modal-open' : ''}`}>
  <div className="modal-box w-full">
    <h3 className="font-bold text-2xl">Create your campaign</h3>
    <p className="py-4">Press ESC key or click the button below to close</p>
    <div className="modal-action">
      <form method="dialog" className="form-control relative w-full" onSubmit={handleSubmit}>
        <div className="w-full relative p-3 gap-3 flex flex-col">
        <input type="text" value={campName} onChange={(e) => setCampName(e.target.value)} className="input input-bordered relative w-full input-sm" placeholder="Campaign Name" />
        <textarea value={campDt} onChange={(e) => setCampDt(e.target.value)} className="textarea textarea-bordered relative w-full" placeholder="Detail"></textarea>
        <input value={pic} onChange={(e) => setPic(e.target.value)} type="text" className="input input-bordered relative w-full input-sm" placeholder="Image Link" />
        <input value={contact} onChange={(e) => setContact(e.target.value)} type="text" className="input input-bordered relative w-full input-sm" placeholder="Contact" />
        <input value={rwPoint} onChange={(e) => setRwPoint(e.target.value)} type="number" className="input input-bordered relative w-full input-sm" placeholder="Reward point" />
        </div>
        <div className="text-right"><button className="btn w-20">OK</button></div>
        
      </form>
    </div>
  </div>
</dialog>
                <h1 className="text-3xl font-bold mb-8">Campaigns</h1>
                <div className="w-full flex flex-wrap relative gap-5 justify-between items-center">
                {campaignList.map((val, key) => {
        return (
          <>
          <Card topic={val.campaignName} pic={val.imgLink} pt={val.rewardPoint} detail={val.campaignsDetail} />
          </>
        )
      })}
                </div>
            </div>
            {t}
        </>
    )
}
export default Campaign;