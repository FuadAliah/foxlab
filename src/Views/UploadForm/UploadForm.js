import React, { useState } from "react";
import useFetch from "../../Components/UseFetch/useFetch";
import Input from "./Input";
import ProgressBar from "./ProgressBar";

import "./UploadForm.scss";

const UploadForm = () => {
  const { data: tags } = useFetch("https://firebasestorage.googleapis.com/v0/b/pocket-design-fbec1.appspot.com/o/menu-icons.json?alt=media&token=4e045800-ebd4-498e-9d6a-cd7b5c775b29");

  const [product, setProduct] = useState({ name: "", tagline: "", tags: "", website_url: "" });
  const [thumb, setThumb] = useState(null);
  const [thumbError, setThumbError] = useState(null);
  const handleChange = e => setProduct({ ...product, [e.target.id]: e.target.value });

  const types = ["image/png", "image/jpg", "image/jpeg", "image/gif"];
  const handleThumb = e => {
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setThumb(selected);
      setThumbError("");
    } else {
      setThumb(null);
      setThumbError("Image type not supported");
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  const handleFocus = () => setProduct({ ...product, website_url: "https://" });
  const handleBlur = e => setProduct({ ...product, website_url: `${product.website_url.length > 8 ? e.target.value : ""}` });
  const removeThumb = () => setThumb(null);

  return (
    <div className="upload-form">
      <h5>Tell us about this product</h5>
      <div className="contain">
        <form onSubmit={handleSubmit}>
          <Input type="text" id="name" label="Product Name" placeholder="Name of the product" value={product.name} handlechange={handleChange} />
          <Input type="text" id="tagline" label="Short Description" value={product.tagline} handlechange={handleChange} placeholder="Concise and descriptive tagline for the product" />
          <div className="dropdown_list">
            <label htmlFor="tags">
              Category <small className="ms-2 text-secondary">Required</small>
            </label>
            <select className="select" id="tags" value={product.tags} onChange={handleChange}>
              <option value="" hidden>
                Select category
              </option>
              {tags &&
                tags.map(item => (
                  <option value={item.name} key={item.id}>
                    {item.name.replace("-", " ")}
                  </option>
                ))}
            </select>
            <span className="arrow"></span>
          </div>
          <Input
            type="url"
            id="website_url"
            value={product.website_url}
            handlechange={handleChange}
            label="URL of the product"
            focus={handleFocus}
            blur={handleBlur}
            placeholder="eg. https://apple.com"
          />
          <div className="upload-area">
            <input type="file" id="thumb" width="100px" height="100px" onChange={handleThumb} />
            <label className="custom-upload-file" htmlFor="thumb">
              {thumb && <span className="thumb-name">{thumb.name.split(".")[0]}</span>}
            </label>
            <div className="gap d-flex flex-column">
              <div className="hints">
                <h6 className="m-0 fw-bold">Upload Logo</h6>
                <small className="ms-2 text-secondary">Required</small>
              </div>
              <div className="d-flex flex-column text-secondary">
                <small>Recommended size: 200x200</small>
                <small>JPG, PNG, GIF, Max size: 2MB</small>
              </div>
            </div>
            {thumbError && (
              <div className="thumb-error alert alert-warning" role="alert">
                {thumbError}
              </div>
            )}
            {thumb && <span className="close" onClick={removeThumb}></span>}
            {thumb && <ProgressBar thumb={thumb} setThumb={setThumb} />}
          </div>
          <input type="submit" className="submit_btn" disabled={!product.name || !product.tagline || !product.tags || !product.website_url || !thumb} />
        </form>
        <div className="preview">
          <div className="prev-head d-flex align-items-center justify-content-center">
            <img src="/static/media/img-placeholder.da674ddc.svg" className="prev-image" alt="..." />
          </div>
          <div className="prev-body">
            <div className="prev-title">{product.name || "Title"}</div>
            <div className="prev-tagline">{product.tagline || "Tagline"}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadForm;
