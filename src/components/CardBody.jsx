import React from "react";

function CardBody({ image_url, text }) {
  return (
    <div className="Card">
      <div>
        <img src={image_url} alt="food logo" width="300px" />
      </div>

      <div className="card-body">
        <p>{text}</p>
        <div className="btn">
          <button>order now</button>
        </div>
      </div>
    </div>
  );
}

export default CardBody;
