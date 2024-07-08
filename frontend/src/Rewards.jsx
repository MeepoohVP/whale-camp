import CardExchange from "./components/CardExchange";

function Rewards() {
    return(
        <>
        <div className="px-12 py-5 relative">
                <h1 className="text-3xl font-bold mb-8">Exchange Rewards</h1>
                <div className="w-full flex flex-wrap relative gap-5 justify-between items-center">
                    <CardExchange topic="topic" />
                    <CardExchange topic="topic" />
                    <CardExchange topic="topic" />
                    <CardExchange topic="topic" />
                    <CardExchange topic="topic" />
                    <CardExchange topic="topic" />
                    <CardExchange topic="topic" />
                    <CardExchange topic="topic" />
                    <CardExchange topic="topic" />
                </div>
            </div>
        </>
    )
}
export default Rewards;