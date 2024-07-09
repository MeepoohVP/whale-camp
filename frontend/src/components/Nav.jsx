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
import Coin from "../assets/coin.svg";
import Avatar from "../assets/avatar.png"
import { useState } from "react";
import axios from "axios";
function Nav() {
    const [hideBtn, setHideBtn] = useState('');
    const [point, setPoint] = useState(4);
    const handleLogout = () => {
        axios.post('http://10.4.53.25:4006/logout')
          .then(response => {
            if(response.data.message==="Logout successful"){
                setHideBtn('');
            }else{
                
            }
            console.log(response.data.message);
            alert('Logout successful');
            window.location.replace('/');
          })
          .catch(error => {
            console.error('There was an error logging out!', error);
          });
      };
      const handleSubmit = () => {
        axios.post('http://10.4.53.25:4006/login')
    .then(response => {
        if(response.data==="No record"){
            setHideBtn("");
        }else{
            window.location.replace('/login');
            setHideBtn("hidden");
        }
    })
    .catch(error => {
        console.error('There was an error!', error);
    });
      }
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
               <NavLink className={`btn btn-sm btn-secondary ${hideBtn}`} to="/SignUp" onClick={() => window.location.replace("/signup")}>Sign up</NavLink>

                <div className="badge gap-2 bg-white/0 border-none">
                    <Link to="/profile"><img src={Avatar} alt="" className="w-10 ml-4" /></Link>
                </div>
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