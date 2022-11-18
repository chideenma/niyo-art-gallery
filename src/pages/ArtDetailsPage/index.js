import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { BiShareAlt } from "react-icons/bi";

import Button from "../../components/Buttons";
import Loading from "../../components/Loading";

import { getArtDetailsRequest } from "../../store/action/getArtDetails";

import NavBar from "../../components/NavBar";

import "./index.css";

const img_url = "https://www.artic.edu/iiif/2/";

export const ArtDetailsPage = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let { id } = useParams();

  const { art, isLoading } = useSelector((state) => state.artDetailsStore);

  useEffect(() => {
    dispatch(getArtDetailsRequest(id));
  }, [id, dispatch]);

  return (
    <div className="container">
      <NavBar />

      <div className="icons-wrapper">
        <HiOutlineArrowLeft
          className="icons"
          onClick={() => navigate("/")}
          color="white"
        />
        <BiShareAlt className="icons" color="white" />
      </div>
      {isLoading && <Loading />}
      {!isLoading && (
        <div className="section-wrapper">
          <div className="section-container image-wrapper">
            <img
              className="section-wrapper-image curved-borders"
              src={`${img_url}${art?.image_id}/full/843,/0/default.jpg`}
              alt={art?.thumbnail?.alt_text}
            />
          </div>
          <div className="section-container desc">
            <h5 className="art-title">{art?.title}</h5>
            <div className="art-history-container">
              <p className="art-history">
                {art?.exhibition_history ?? "NOT HISTORY TO DISPLAY"}
              </p>
            </div>

            <div className="buttons">
              <Button type="explore" text="Explore arts" />
              <button> Explore arts</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
