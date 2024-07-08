import LogoFooter from "../assets/whaleFooter.svg"
import { useLocation } from "react-router-dom";
function Footer() {
    return (
        <>
        {window.location.pathname!=="/login" && window.location.pathname!=="/signup" ? (
            <div className='mt-12 '>
            <div className='h-auto w-[100%] bg-[#0C2141] py-4'>
            <div className='flex flex-row items-center pl-5'>    
            <img className='w-12' src={LogoFooter} alt="" />
            <h1 className='text-gray-400 ml-2'>© 2022 Company, Inc</h1>
            </div>  
        </div>
        </div>
        ):<></>
        }
        </>
    );
}
export default Footer;