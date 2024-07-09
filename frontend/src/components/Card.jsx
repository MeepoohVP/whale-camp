import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
function Card(props) {
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    setTopic(props.topic);
}, [props.topic])

const handleSubmit = (e) => {
  e.preventDefault();
  axios.post('http://10.4.53.25:4006/joincampaign',
      {
          topic,
          email
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
      <div class={`badge badge-accent badge-outline absolute z-[2] bg-white right-0 top-0 m-2 ${props.point}`}>{props.pt}P</div>
      <figure className='relative overflow-hidden'>
        <img className='w-[100%] rounded-lg relative' src={props.pic} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{props.topic}</h2>
        <p className={``}>{props.detail}</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary" onClick={()=>{setIsModalOpen(true)}}>Join</button>
        </div>
      </div></div>
      <dialog id="my_modal_1" className={`modal ${isModalOpen ? 'modal-open' : ''}`}>
  <div className="modal-box w-full">
    <h3 className="font-bold text-2xl">Exchange</h3>
    <div className="modal-action">
      <form method="dialog" className="form-control relative w-full" onSubmit={handleSubmit}>
        <div className="w-full relative p-3 gap-3 flex flex-col">
        <input type="text" value={props.topic} className="input bg-white input-bordered relative w-full input-sm" />
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="input input-bordered relative w-full input-sm" placeholder="email" />
        </div>
        <div className="text-right"><button className="btn w-20" onClick={() => setIsModalOpen(false)}>Join</button></div>
        
      </form>
    </div>
  </div>
</dialog>
      </>
  )
}

export default Card;