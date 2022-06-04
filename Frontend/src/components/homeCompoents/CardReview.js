import React from "react";
import "./CardReview.css";

function CardReview() {
  return (
    <div className="card-review">
      <p className="customer-testi">Customer Testimonial</p>
      <p className="review">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae fuga
        quasi, earum optio aperiam dolores omnis praesentium dicta saepe rerum
        dolorum quam. Voluptatem, molestias culpa velit similique cumque amet
        sit?
      </p>
      <div className="reviewr-profile">
        <div className="left-profile">
          <img
            src="https://res.cloudinary.com/iiitm/image/upload/v1653399855/pexels-klaus-nielsen-6303682_wktan0.jpg"
            className="left-profile-img"
            alt=""
          />
        </div>
        <div className="right-profile">
          <p>Prashant Uchariya</p>
        </div>
      </div>
    </div>
  );
}

export default CardReview;
