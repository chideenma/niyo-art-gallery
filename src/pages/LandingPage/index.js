import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsSearch } from "react-icons/bs"

import { fetchArtCollectionRequest } from "../../store/action/fetchArtCollection";
import { filterArtCollectionRequest } from "../../store/action/filterArtCollection";

import NavBar from "../../components/NavBar";
import Button from "../../components/Buttons";
import Loading from "../../components/Loading";
import ArtCollection from "../../components/ArtCollection";
import Footer from "../../components/Footer";

import "./index.css";

import Hero from "../../assets/hero.png";
import StarImage from "../../assets/star.png";

export const LandingPage = () => {
  const [searchParam, setSearchParam] = useState("");
  const [hideSearchIcon, setHideSearchIcon] = useState(false)
  const dispatch = useDispatch();

  const { collection, isLoading } = useSelector((state) => state.artCollectionStore);

  const fetchArtCollection = () => {
    dispatch(fetchArtCollectionRequest());
  };

  useEffect(() => {
    fetchArtCollection();
  }, []);

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      if (searchParam) {
        dispatch(filterArtCollectionRequest(searchParam));
      } else {
        fetchArtCollection();
      }
    }
  };
  return (
    <div id="App" className="app">
      <div className="hero-container">
        <NavBar />

        <div className="art-stats">
          <div className="art-stats-left">
            <h1>
              Discover amazing
              <br /> art around the <br color="#FBAF00" />
              <span>world</span>
            </h1>
            <p>
              Browse a curated selection of art around the world, <br />
              including museum exhibitions, gallery openings, <br />
              upcoming and many more
            </p>
            <Button type="explore" text="Explore arts" />

            <div className="svg">
              <img src={StarImage} alt="star sign" />
            </div>
          </div>

          <div className="art-stats-img">
            <img src={Hero} alt="hero artist" />
          </div>
        </div>
      </div>

      <div className="info">
        <div className="info-left">
          <h2>Art in the collection</h2>
          <p>
            Browse a curated selection of art around the world, including <br />{" "}
            museum exhibitions, gallery openings, upcoming and many <br /> more
          </p>
        </div>

        <div className="info-right">
          {!hideSearchIcon && <BsSearch className="icon" color="#FBAF00" />}
          <input
            value={searchParam}
            onChange={(e) => setSearchParam(e.target.value)}
            title="Search"
            placeholder="Search"
            onKeyDown={(e) => handleSearch(e)}
            onFocus={() => setHideSearchIcon(true)}
            onBlur={() => setHideSearchIcon(false)}
          />
        </div>
      </div>
      {isLoading && <Loading />}
      {collection && (
        <div className="gallery-grid">
          {!isLoading && collection.map((data) => <ArtCollection data={data} />)}
        </div>
      )}


      <Footer />

    </div>
  );
};
