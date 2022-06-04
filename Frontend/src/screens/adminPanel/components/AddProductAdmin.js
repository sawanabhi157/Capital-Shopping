import React, { useState } from "react";
import "./AddProductAdmin.css";
import axios from "axios";
import { SERVER_URL } from "../../../utils";
function AddProductAdmin() {
  const [addProduct, setAddProduct] = useState({
    title: "",
    sellerName: "",
    imgUrl: "",
    oldPrice: "",
    newPrice: "",
    brand: "",
    cetagory: "",
    description: "",
  });

  const HandleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setAddProduct({ ...addProduct, [name]: value });
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log(addProduct);
    axios
      .post(`${SERVER_URL}/products`, {
        ...addProduct,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    setAddProduct({
      title: "",
      sellerName: "",
      imgUrl: "",
      oldPrice: "",
      newPrice: "",
      brand: "",
      cetagory: "",
      description: "",
    });
  };

  return (
    <div className="add-product">
      <div className="inner-add-product">
        <div className="child-add-product">
          <div className="title-add-product">
            <h2 className="h2-add-product">Add Product</h2>
          </div>
          <div className="child-addProduct-middle">
            <form action="" onSubmit={HandleSubmit}>
              <div className="input-field">
                <label>Enter Title</label>
                <input
                  type="text"
                  autoComplete="off"
                  name="title"
                  onChange={HandleOnChange}
                  value={addProduct.title}
                  id="title"
                />
              </div>
              <div className="input-field">
                <label>Seller Name</label>
                <input
                  type="text"
                  autoComplete="off"
                  name="sellerName"
                  onChange={HandleOnChange}
                  value={addProduct.sellerName}
                  id="sellerName"
                />
              </div>
              <div className="input-field">
                <label>Image Url</label>
                <input
                  type="text"
                  autoComplete="off"
                  name="imgUrl"
                  onChange={HandleOnChange}
                  value={addProduct.imgUrl}
                  id="imgUrl"
                />
              </div>
              <div className="row-div">
                <div className="input-field-sub">
                  <label>Old Price</label>
                  <input
                    type="number"
                    autoComplete="off"
                    name="oldPrice"
                    onChange={HandleOnChange}
                    value={addProduct.oldPrice}
                    id="oldPrice"
                  />
                </div>
                <div className="input-field-sub">
                  <label>New Price</label>
                  <input
                    type="number"
                    autoComplete="off"
                    name="newPrice"
                    onChange={HandleOnChange}
                    value={addProduct.newPrice}
                    id="newPrice"
                  />
                </div>
              </div>
              <div className="row-div">
                <div className="input-field-sub">
                  <label>Cetagory</label>
                  <input
                    type="text"
                    autoComplete="off"
                    name="cetagory"
                    onChange={HandleOnChange}
                    value={addProduct.cetagory}
                    id="cetagory"
                  />
                </div>
                <div className="input-field-sub">
                  <label>Brand</label>
                  <input
                    type="text"
                    autoComplete="off"
                    name="brand"
                    onChange={HandleOnChange}
                    value={addProduct.brand}
                    id="brand"
                  />
                </div>
              </div>

              <div className="input-field">
                <label>Description</label>
                <textarea
                  type="text"
                  autoComplete="off"
                  name="description"
                  onChange={HandleOnChange}
                  value={addProduct.description}
                  id="description"
                />
              </div>
              <div className="submit-div">
                <button className="submit-add-product" type="submit">
                  Submit{" "}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProductAdmin;
