import { Link } from "react-router-dom";
import History from "./components/History";

function CampaignJoin() {
    return (
        <>
            <div className='flex justify-center'>
                <div className='w-[55%] flex flex-col gap-3'>
                    <div className='text-3xl font-bold text-[#0C2141] mt-4'>Campaign join history</div>
                    <div className='flex flex-row'>
                        <div className='flex border-b-[1px] w-full pb-1'>
                            <Link className='text-secondary px-2 font-semibold text-l border-b-[4px] border-b-secondary -mb-1' to="/campaign/join">Campaigns</Link>
                            <Link className='text-secondary px-2 font-semibold text-l -mb-1' to="/rewards/history">Rewards</Link></div>
                    </div>
                    <History campName="Topic" date="2024-02-02" />
                    <History campName="Topic" date="2024-02-02" />
                    <History campName="Topic" date="2024-02-02" />
                    <History campName="Topic" date="2024-02-02" />
                    <History campName="Topic" date="2024-02-02" />
                    <History campName="Topic" date="2024-02-02" />
                </div>
            </div>
        </>
    )
}
export default CampaignJoin;