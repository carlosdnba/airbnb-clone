import React from "react";

import ExplorerCard from "../components/ExplorerCard";

import "../styles/pages/home.css";

import airbnbLogo from "../images/airbnb-logo.png";
import explorerCardImg1 from '../images/explorer-card-1.png'
import explorerCardImg2 from '../images/explorer-card-2.png'
import explorerCardImg3 from '../images/explorer-card-3.png'
import bigCard from '../images/big-card.png';


const Home: React.FC = () => {
  return (
    <div className="container">
      <nav>
        <header>
          <img src={airbnbLogo} alt="" />
          <div className="header-options">
            <span>English (EUA)</span>
            <span>USD $</span>
            <span>Become a host</span>
            <span>Create your experience</span>
            <span>Help</span>
            <span>Registration</span>
            <span>Conection</span>
          </div>
        </header>

        <section>
          <h2>Book unique accommodations and activities.</h2>

          <form>
            <h5>Where</h5>
            <input
              placeholder="Departure"
              className="big-form-input"
              type="text"
            />
            <div className="form-row">
              <div>
                <h5>Arrival</h5>
                <input placeholder="dd/mm/yyyy" type="text" />
              </div>
              <div>
                <h5>Departure</h5>
                <input placeholder="dd/mm/yyyy" type="text" />
              </div>
            </div>
            <h5>Passengers</h5>
            <input
              placeholder="Passengers"
              className="big-form-input"
              type="number"
            />
          </form>

          <button>Search</button>
        </section>
      </nav>

      <section>
        <div className="explorer">
          <h2>Explorer Airbnb</h2>
          <div className="explorer-cards-row">
            <ExplorerCard path={explorerCardImg1} label={'Accommodations'} />
            <ExplorerCard path={explorerCardImg2} label={'Experiences'} />
            <ExplorerCard path={explorerCardImg3} label={'Adventures'} />
          </div>
        </div>

        <div className="accommodations">
          <h2>Accommodations Airbnb Plus</h2>
          <span>A selection of accommodation verified according to quality and design criteria</span>
          <img src={bigCard} alt=""/>
        </div>
      </section>
      <footer />
    </div>
  );
};

export default Home;
