function History(props) {
    return(
        <>
        <div className=' flex flex-col gap-1 border border-black/15 h-auto py-3 pl-6'>
            <div className='font-bold text-l'>{props.campName}</div>
            <div className='font-bold text-l text-black/35'>{props.date}</div>
        </div>
        </>
    )
}
export default History;