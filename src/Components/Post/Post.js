import React from "react";
import Bookmark from "../../Assets/bookmark.svg";
import External from "../../Assets/external-link-icon.svg";
import { Link } from "react-router-dom";
import Default from "../../Assets/default_thumb.png";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import "./Post.scss";

const Post = ({ Items }) => {
  const PATHNAME = window.location.pathname;

  return (
    <>
      {Items &&
        Items.map(item => (
          <div className="post" key={item.id}>
            <div className="card">
              <Link to={`${PATHNAME}/${item.id}`} className="details">
                <div className="card-head">
                  {item.thumb.includes(".gif") ? (
                    <video poster={item.thumb || Default} width="80" height="80" disableRemotePlayback disablePictureInPicture loop playsInline />
                  ) : (
                    <LazyLoadImage effect="blur" threshold="100" src={item.thumb || Default} className="card-logo" alt={item.name} />
                  )}
                </div>
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.tagline}</p>
                </div>
              </Link>
              <div className="card-footer">
                <a href="#g" className="bookmark">
                  <img src={Bookmark} alt="bookmark" />
                </a>
                <a href={item.website_url} target="_blank" rel="noreferrer" className="web-link tooltip-top" data-tip="Visit website">
                  <img src={External} alt="bookmark" />
                </a>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default Post;
