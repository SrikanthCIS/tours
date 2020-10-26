import React,{useState} from "react";
import "../index.css";

export default function Tours({id,image,name,info,price,removeTours}) {
    const [readmore, setReadmore] = useState(false);

  return (
    <div className="container">
      <div className="row">
        <div className="card">
          <div className="card-header">
            <img src={image} alt={name}  />
          </div>
          <div className="card-body">
            <h2>{name}</h2>
            <h3>₹{price}</h3>
            {/* func to read */}
            <p> 
                {readmore ? info : `${info.substring(0, 200)}...`}
                <button onClick={()=> setReadmore(!readmore)}>
                    {readmore ? 'showLess' : 'readmore'}
                </button>
            </p>
            <button className='btn' onClick={() => removeTours(id)}>
                Not Intrested
            </button>
          </div>
        </div> 
      </div>
    </div>
  );
}
