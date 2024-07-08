function CardExchange(props) {
    return (
        <>
        <div className='card card-compact flex-none relative rounded-2xl bg-[#D9D9D9] w-[30%] overflow-hidden h-auto drop-shadow-[0_4px_4px_rgba(0,0,0,0.24)]'>
      <figure className='relative overflow-hidden'>
        <img className='w-[100%] rounded-lg relative' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp_FrMYBhzYOFt7ReEvE4-cYWtwRcQiiXc0Q&s" alt="" />
      </figure>
      <div className="card-body flex-row justify-between">
        <h2 className="card-title">{props.topic} <span className="text-accent font-bold ml-4">10000p</span></h2>
        <div class="card-actions">
          <button class="btn btn-secondary">Detail</button>
        </div>
      </div></div></>
    )
}
export default CardExchange;