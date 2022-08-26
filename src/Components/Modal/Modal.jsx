import React from "react";
import './Modal.css';

const Modal = ({value, dealModal}) => {
  const { title,thumbnail, author, content } = value;
  return (
    <div id="modal">
      <div className="top-bar">
      <i onClick={dealModal} className="fa-solid fa-xmark"></i>
      </div>
      <div className="image-container">
        <img src={thumbnail.large} alt="img"></img>
      </div>
      <div className="details">
        <h5>  {title}</h5>
      
        <p>{content}</p>
      </div>
      <div className="author">
      <img src={author.avatar} alt="Img"></img>
        <p>{author.name} : {author.role}</p>
      </div>
    </div>
  );
};

export default Modal;
