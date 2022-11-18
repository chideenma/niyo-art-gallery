// import { useEffect, useState, useRef } from "react"
// import { useDispatch, useSelector } from "react-redux"
// import { fetchArtCollectionRequest } from "../../store/action/fetchArtCollection";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Art1 from "../../assets/art1.png";
import {  getArtDetailsRequest } from "../../store/action/getArtDetails"

import "./index.css";

const img_url = "https://www.artic.edu/iiif/2/";

// fdc1a755-ff86-487d-f16b-f03c40a30bee/full/843,/0/default.jpg"
const ArtCollection = ({
  data: {
    id,
    image_id,
    thumbnail,
    title,
    timestamp,
    place_of_origin,
    api_link,
  },
}) => {

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/arts/${id}`);
   
  };
  return (
    <div
      onClick={() => handleNavigate()}
      key={id}
      className="art-card-container"
    >
      <div className="art-card-image-wrapper">
        <img
          className="art-card-image"
          src={`${img_url}${image_id}/full/843,/0/default.jpg`}
          alt={thumbnail?.alt_text}
        />
      </div>

      <div className="art-card-info">
        <p className="art-card-title">{title}</p>

        <div>
          <p className="art-card-desc">{moment(timestamp).format("LL")}</p>
          <p className="art-card-desc">{place_of_origin}</p>
        </div>
      </div>
    </div>
  );
};

export default ArtCollection;
