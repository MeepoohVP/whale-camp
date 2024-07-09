import { useState, useEffect } from "react";

import axios from "axios";
function CardExchange(props) {
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('');
  const [point, setPoint] = useState(0);
  useEffect(() => {
    setTopic(props.topic);
}, [props.topic])

useEffect(() => {
  setPoint(props.pt);
}, [props.pt])

    const [detail, setDetail] = useState('');
    const [pic, setPic] = useState(''); 
    const [isModalOpen, setIsModalOpen] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://10.4.53.25:4006/exchange',
        {
            topic,
            email,
            point
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
    return (
        <>
        <div className='card card-compact flex-none relative rounded-2xl bg-[#D9D9D9] w-[30%] overflow-hidden h-auto drop-shadow-[0_4px_4px_rgba(0,0,0,0.24)]'>
      <figure className='relative overflow-hidden'>
        <img className='w-[100%] rounded-lg relative' src={props.pic} alt="" />
      </figure>
      <div className="card-body flex-row justify-between">
        <h2 className="card-title">{props.topic} <span className="text-accent font-bold ml-4">{props.pt}P</span></h2>
        <div class="card-actions">
        <button className="btn btn-secondary" onClick={()=>{setIsModalOpen(true)}}> Exchange</button>
        </div>
      </div></div>
      <dialog id="my_modal_1" className={`modal ${isModalOpen ? 'modal-open' : ''}`}>
  <div className="modal-box w-full">
    <h3 className="font-bold text-2xl">Exchange</h3>
    <p className="py-4">{props.topic}</p>
    <p className="py-4">{props.pt}P</p>
    <div className="modal-action">
      <form method="dialog" className="form-control relative w-full" onSubmit={handleSubmit}>
        <div className="w-full relative p-3 gap-3 flex flex-col">
        <input type="text" value={props.topic} className="input bg-white input-bordered relative w-full input-sm" />
        <input type="text" value={props.pt} className="input bg-white input-bordered relative w-full input-sm" />
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="input input-bordered relative w-full input-sm" placeholder="email" />
        </div>
        <div className="text-right"><button className="btn w-20">OK</button></div>
        
      </form>
    </div>
  </div>
</dialog>
      </>
    )
}
export default CardExchange;