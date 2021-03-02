import React from 'react';

function Card(props) {
    return (
      // <div className="cards">
      //   <div className="card">
      //     <img
      //       src={props.imgSrc}
      //       alt="mypic"
      //       className="card_img"
      //     />
      //     <div className="card_info">
      //       <span className="card_category"> {props.imgtitle} </span>
      //       <h3 className="card_title"> {props.sname} </h3>
      //       <a href={props.link} target="_blank">
      //         <button>WATCH NOW </button>
      //       </a>
      //     </div>
      //   </div>
      // </div>
    <div class="cards">
    <div class="card-item">
      <div class="card-image">
      <img
            src={props.imgSrc}
            alt="mypic"
            className="card_img"
          />
      </div>
      <div class="card-info">
        <h2 class="card-title">{props.sname}</h2>
        <p class="card-intro">{props.imgtitle}</p>
        <a className="kinkk" href={props.link} target="_blank">
          <button>WATCH NOW </button>
         </a>
      </div>
    </div>
  </div>
    );
  }

  export default Card;