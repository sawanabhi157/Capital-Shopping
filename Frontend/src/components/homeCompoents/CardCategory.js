import React from "react";
import "./CardCategory.css";
function CardCategory(props) {
  let { ceategory, imgUrl } = props;
  return (
    <div className="card-catergory">
      <div className="inner-card-category-o">
        <img src={imgUrl} alt="" className="card-img-category" />
      </div>
      <div className="ceategory-card-p">
        '<p className="p-ceategory">{props.ceategory}</p>
      </div>
    </div>
  );
}

export default CardCategory;
