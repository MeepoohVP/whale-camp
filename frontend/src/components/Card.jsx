import { Link } from "react-router-dom";

function Card(props) {
  return (
    <div className='card card-compact flex-none relative rounded-2xl bg-[#D9D9D9] w-[30%] overflow-hidden h-auto drop-shadow-[0_4px_4px_rgba(0,0,0,0.24)]'>
      <div class={`badge badge-accent badge-outline absolute z-[2] bg-white right-0 top-0 m-2 ${props.point}`}>100P</div>
      <figure className='relative overflow-hidden'>
        <img className='w-[100%] rounded-lg relative' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp_FrMYBhzYOFt7ReEvE4-cYWtwRcQiiXc0Q&s" alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{props.topic}</h2>
        <p className={``}>{props.detail}</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Read more</button>
        </div>
      </div></div>
  )
}

export default Card;