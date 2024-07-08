import { Link } from "react-router-dom";
import Avatar from "./assets/avatar.png"
import Refresh from "./components/Refresh";
function Profile() {
    return (
        <>
            <div className="bg-[#102c57] h-36 w-full relative"></div>
            <div className="w-full h-auto relative flex justify-center">
               <div className="w-[50%] flex flex-col items-center -mt-16">
               <div className="avatar">
                    <div className="w-32 rounded-full">
                        <img src={Avatar} />
                    </div>
                </div>
                <h3 className="text-center font-medium text-3xl mb-4">Username</h3>
                <div className="flex justify-center gap-6 relative w-[100%] mt-6">
                    <Link onClick={Refresh} to="/campaign/join" className="text-center relative w-[20%]">
                        <h4 className="text-2xl">124</h4>
                        <h6>Campaigns</h6>
                    </Link>
                    <div className="h-full w-[.5px] bg-black/60"></div>
                    <Link onClick={Refresh} to="/yourposts" className="text-center relative w-[20%]">
                        <h4 className="text-2xl">124</h4>
                        <h6>Posts</h6>
                    </Link>
                    <div className="h-full w-[.5px] bg-black/60"></div>
                    <Link onClick={Refresh} to="/rewards/history" className="text-center relative w-[20%]">
                        <h4 className="text-2xl">124</h4>
                        <h6>rewards</h6>
                    </Link>
                </div>
                <button className="btn btn-error mt-12">Logout</button>
               </div>
            </div>
        </>
    )
}
export default Profile;