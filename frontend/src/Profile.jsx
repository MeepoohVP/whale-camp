import axios from "axios";
import Avatar from "./assets/avatar.png"
import History from "./components/History";
import { useState } from "react";
function Profile() {
    const [rwList, setRwList] = useState([]);
    const [cpList, setCpList] = useState([]);
    const [isModalOpen1, setIsModalOpen1] = useState(false);
    const [isModalOpen2, setIsModalOpen2] = useState(false);
    const [isModalOpen3, setIsModalOpen3] = useState(false);
    const [email, setEmail] = useState('');
    const delHistory = (e) => {
        e.preventDefault();
        axios.post('http://10.4.53.25:4006/deleteHistory',
            {
                email
            }
        )
            .then(response => {
                console.log(response.data);
                setIsModalOpen3(false);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }
    const cpHistory = (e) => {
        e.preventDefault();
        axios.post('http://10.4.53.25:4006/historyjoin',
            {
                email
            }
        )
            .then(response => {
                setCpList(response.data);
                console.log(response.data);
                setIsModalOpen2(false);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://10.4.53.25:4006/historyexchange',
            {
                email
            }
        )
            .then(response => {
                setRwList(response.data);
                console.log(response.data);
                setIsModalOpen1(false);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    };
    return (
        <>
            <div className='flex justify-center'>
                <div className='w-[55%] flex flex-col gap-3'>
                    <div className='text-3xl font-bold text-[#0C2141] mt-4'>Exchange history</div>
                    <div className='flex flex-row'>
                        <div className='flex border-b-[1px] w-full pb-1'>
                            <div className='text-secondary px-2 font-semibold text-l -mb-1 cursor-pointer' onClick={(e) => setIsModalOpen2(true)} >Campaigns</div>
                            <div className='text-secondary px-2 font-semibold text-l -mb-1 cursor-pointer' onClick={(e) => setIsModalOpen1(true)}>Rewards</div></div>
                    </div>
                    {rwList.map((val, key) => {
                        return (
                            <>
                                <History campName={val.rewardName} />
                            </>
                        )
                    })}
                    {cpList.map((val, key) => {
                        return (
                            <>
                                <History campName={val.campaignName} />
                            </>
                        )
                    })}
                    <button className="btn btn-error w-24 btn-outline" onClick={(e) => setIsModalOpen3(true)} >Delete</button>
                </div>
            </div>
            <dialog id="my_modal_1" className={`modal ${isModalOpen1 ? 'modal-open' : ''}`}>
                <div className="modal-box w-full">
                    <h3 className="font-bold text-2xl">Your Exchange</h3>
                    <div className="modal-action">
                        <form method="dialog" className="form-control relative w-full" onSubmit={handleSubmit}>
                            <div className="w-full relative p-3 gap-3 flex flex-col">
                                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="input input-bordered relative w-full input-sm" placeholder="email" />
                            </div>
                            <div className="text-right"><button className="btn w-20">OK</button></div>

                        </form>
                    </div>
                </div>
            </dialog>

            <dialog id="my_modal_2" className={`modal ${isModalOpen2 ? 'modal-open' : ''}`}>
                <div className="modal-box w-full">
                    <h3 className="font-bold text-2xl">your campaign join</h3>
                    <div className="modal-action">
                        <form method="dialog" className="form-control relative w-full" onSubmit={cpHistory}>
                            <div className="w-full relative p-3 gap-3 flex flex-col">
                                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="input input-bordered relative w-full input-sm" placeholder="email" />
                            </div>
                            <div className="text-right"><button className="btn w-20">OK</button></div>

                        </form>
                    </div>
                </div>
            </dialog>

            <dialog id="my_modal_3" className={`modal ${isModalOpen3 ? 'modal-open' : ''}`}>
                <div className="modal-box w-full">
                    <h3 className="font-bold text-2xl">delete</h3>
                    <div className="modal-action">
                        <form method="dialog" className="form-control relative w-full" onSubmit={delHistory}>
                            <div className="w-full relative p-3 gap-3 flex flex-col">
                                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="input input-bordered relative w-full input-sm" placeholder="email" />
                            </div>
                            <div className="text-right"><button className="btn w-20">comfirm</button></div>

                        </form>
                    </div>
                </div>
            </dialog>

       
        </>
    )
}
export default Profile;