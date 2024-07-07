import { BrowserRouter,NavLink, Route, Routes } from "react-router-dom";
import Campaign from "../Campaign";
import App from "../App";
import Whale1 from "../assets/whaleLogo1.svg";
function Nav() {
    return(
        <>
        <BrowserRouter>
        <nav className="w-full h-auto sticky top-0 left-0 bg-[#0c2141] flex items-center py-3 px-4 justify-between">
            <figure className="w-[30%] h-auto">
                <img src={Whale1} alt="" className="w-48 h-auto"/>
            </figure>
            <div className="w-[50%] flex justify-center gap-4 text-white font-bold">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/posts">Posts</NavLink>
            <NavLink to="/campaign">Campaigns</NavLink>
            <NavLink to="/rewards">Rewards</NavLink>
            </div>
            <div className="w-[30%] h-auto text-right">
                <button className="btn btn-sm btn-secondary">Log in</button>
            </div>
        </nav>
        <Routes>
            <Route path="/" element={<App/>} />
            <Route path="/campaign" element={<Campaign/>}/>
        </Routes>
        </BrowserRouter>
        </>
    );
}
export default Nav;