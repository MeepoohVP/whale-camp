import { BrowserRouter,Link,NavLink, Route, Routes, useLocation } from "react-router-dom";
import Campaign from "../Campaign";
import App from "../App";
import Login from "../Login";
import Whale1 from "../assets/whaleLogo1.svg";
import Refresh from "./Refresh";
import SignUp from "../SignUp";
import Posts from "../Posts";
import Rewards from "../Rewards";
import Profile from "../Profile";
import CampaignJoin from "../CampaignJoin";
import RewardsHistory from "../RewardsHistory";
import YourPosts from "../YourPosts";
function Nav() {
    return(
        <>
        <BrowserRouter>
        {window.location.pathname !== "/login" && window.location.pathname !== "/signup" ? (
           <> <nav className="navbar z-20">
            <figure className="w-[30%] h-auto">
                <img src={Whale1} alt="" className="w-48 h-auto"/>
            </figure>
            <div className="w-[50%] flex justify-center gap-8 text-white font-bold">
            <NavLink to="/" className="font-['Inter'] hover:text-accent duration-500">Home</NavLink>
            <NavLink to="/posts" className="font-['Inter'] hover:text-accent duration-500">Posts</NavLink>
            <NavLink to="/campaign" className="font-['Inter'] hover:text-accent duration-500">Campaigns</NavLink>
            <NavLink to="/rewards" className="font-['Inter'] hover:text-accent duration-500">Rewards</NavLink>
            </div>
            <div className="w-[30%] h-auto flex justify-end">
                <NavLink className="btn btn-sm btn-secondary" to="/login" onClick={Refresh}>Log in</NavLink>
            </div>
        </nav>
        </>
        ): (
            <></>
        )}
        <Routes>
            <Route path="/" element={<App/>} />
            <Route path="/posts" element={<Posts/>}/>
            <Route path="/campaign" element={<Campaign/>}/>
            <Route path="/rewards" element={<Rewards/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/campaign/join" element={<CampaignJoin/>}/>
            <Route path="/yourposts" element={<YourPosts/>}/>
            <Route path="/rewards/history" element={<RewardsHistory/>}/>
        </Routes>
        </BrowserRouter>
        </>
    );
}
export default Nav;