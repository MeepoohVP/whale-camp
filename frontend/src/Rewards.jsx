import CardExchange from "./components/CardExchange";
import axios from "axios";
import { useState } from "react";
function Rewards() {
    const [rewardList, setRewardList] = useState([]);
    axios.get('http://10.4.53.25:4006/rewards').then((res) => {
        //this console.log will be in our frontend console
        setRewardList(res.data);
      })
    return(
        <>
        <div className="px-12 py-5 relative">
                <h1 className="text-3xl font-bold mb-8">Exchange Rewards</h1>
                <div className="w-full flex flex-wrap relative gap-5 justify-between items-center">
                    {rewardList.map((val, key) => {
        return (
          <>
          <CardExchange topic={val.rewardName} pic={val.imgLink} pt={val.rewardPoint} />
          </>
        )
      })}
                </div>
            </div>
        </>
    )
}
export default Rewards;