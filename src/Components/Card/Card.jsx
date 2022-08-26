import React from "react";
import "./Card.css";
import Modal from "../Modal/Modal";
import { useState } from "react";

const Card = ({value}) => {
  console.log(value, "the props is");
  const {date, title, content, thumbnail, author } = value;

  const [state, setState] = useState(false);
  const [modal, setModal] = useState(false);

  const dateString = new Date(date * 1000).toLocaleDateString("en", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const dealSwitch = ()=>{
setState(!state);

  };
  const dealModal = ()=>{
setModal(!modal);
  }
  // console.log("thedatestringisgivenbelow",dateString);

  return (
    <div className="card">
      <div id="card">
        {
            state ? (
                <p className="imageThumb">
                <img
                  className="image"
                  alt="Img Small"
                  src={thumbnail.small}
                ></img>
                <span>
                  <a className="button" onClick={dealModal} type="button" >
                    Learn More
                  </a>
                </span>
              </p>
            ):(
                <p className="imageThumb">
                <img
                  className="image"
                  alt="Img Small"
                  src={thumbnail.large}
                ></img>
                <span>
                  <a className="button" onClick={dealModal} type="button" >
                    Learn More
                  </a>
                </span>
              </p>
      
            )
        }
   
      </div>

      {/* next code begins here */}

      <div className="radio">
        <label>
          <input type="radio"
          onClick={dealSwitch}
          checked={!state} />
          <span className="circle"></span>
        </label>
        <label>
          <input type="radio"
          onClick={dealSwitch}
          checked={state} />
          <span className="circle"></span>
        </label>
      </div>

      <div className="card-detail">
        <h3>{title}</h3>
        <p className="content">{content}</p>
        <div className="foot-detail">
          <p>{author.name} : {author.role}</p>
          <p>{dateString}</p>
        </div>
      </div>

      <div className="learn-more">
        <a className="button" type="button">
          Learn more
        </a>
      </div>

     
     {
        modal && (
            <div className="backdrop-Landing">
                 <Modal value={value} dealModal={dealModal}/>
      </div>
        )
     }
       
    </div>
  );
};

export default Card;
