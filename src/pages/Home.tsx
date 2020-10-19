import React from "react";
import { IoIosArrowForward } from "react-icons/io";

import ExplorerCard from "../components/ExplorerCard";
import AdventuresCard from "../components/AdventuresCard";

import "../styles/pages/home.css";

import airbnbLogo34 from "../images/airbnb-logo-34.png";
import airbnbLogo124 from "../images/airbnb-logo-124.png";
import explorerCardImg1 from "../images/explorer-card-1.png";
import explorerCardImg2 from "../images/explorer-card-2.png";
import explorerCardImg3 from "../images/explorer-card-3.png";
import adventureCardImg1 from "../images/adventure-image-1.png";
import adventureCardImg2 from "../images/adventure-image-2.png";
import adventureCardImg3 from "../images/adventure-image-3.png";
import adventureCardImg4 from "../images/adventure-image-4.png";
import adventureCardImg5 from "../images/adventure-image-5.png";
import adventureCardImg6 from "../images/adventure-image-6.png";
import aroundWorldImg1 from "../images/around-world-1.png";
import aroundWorldImg2 from "../images/around-world-2.png";
import aroundWorldImg3 from "../images/around-world-3.png";
import aroundWorldImg4 from "../images/around-world-4.png";
import aroundWorldImg5 from "../images/around-world-5.png";
import aroundWorldImg6 from "../images/around-world-6.png";
import aroundWorldImg7 from "../images/around-world-7.png";
import aroundWorldImg8 from "../images/around-world-8.png";
import AroundWorldCard from "../components/AroundWorldCard";

const Home: React.FC = () => {
  return (
    <div className="container">
      <nav>
        <header>
          <img src={airbnbLogo34} alt="" />
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
            <ExplorerCard path={explorerCardImg1} label={"Accommodations"} />
            <ExplorerCard path={explorerCardImg2} label={"Experiences"} />
            <ExplorerCard path={explorerCardImg3} label={"Adventures"} />
          </div>
        </div>

        <div className="accommodations">
          <h2>Accommodations Airbnb Plus</h2>
          <span>
            A selection of accommodation verified according to quality and
            design criteria
          </span>
          <div className="big-card">
            <img src={airbnbLogo124} alt="" />
            <button>
              <span>DISCOVER ACCOMMODATIONS</span>
              <IoIosArrowForward size={14} color="#484848" />
            </button>
          </div>
        </div>

        <div className="adventures">
          <h2>Discover Airbnb adventures</h2>
          <span className="adventures-description">
            Multi-day trips organized by local experts with activities, meals
            and accommodation included
          </span>
          <div className="adventures-cards-row">
            <AdventuresCard
              path={adventureCardImg1}
              title={"CAYMAN ISLANDS"}
              description={"2 Nights PACKAGE All Inclusive"}
              price={"Starting price: 577 € / person - 3 days"}
              rate={"5.0"}
            />
            <AdventuresCard
              path={adventureCardImg2}
              title={"URUGUAY"}
              description={"4 Nights PACKAGE All Inclusive"}
              price={"Starting price: 577 € / person - 3 days"}
              rate={"4.8"}
            />
            <AdventuresCard
              path={adventureCardImg3}
              title={"ICELAND"}
              description={"3 Nights PACKAGE All Inclusive"}
              price={"Starting price: 577 € / person - 3 days"}
              rate={"4.9"}
            />
            <AdventuresCard
              path={adventureCardImg4}
              title={"MONGOLIA"}
              description={"2 Nights PACKAGE All Inclusive"}
              price={"Starting price: 577 € / person - 3 days"}
              rate={"4.2"}
            />
            <AdventuresCard
              path={adventureCardImg5}
              title={"BAHRAIN"}
              description={"1 Nights PACKAGE All Inclusive"}
              price={"Starting price: 577 € / person - 3 days"}
              rate={"5.0"}
            />
            <AdventuresCard
              path={adventureCardImg6}
              title={"BOSNIA AND HERZEGOVINA"}
              description={"8 Nights PACKAGE All Inclusive"}
              price={"Starting price: 577 € / person - 3 days"}
              rate={"5.0"}
            />
          </div>
        </div>

        <div className="around">
          <h2>Accommodation around the world</h2>
          <div className="around-cards-row">
            <AroundWorldCard
              path={aroundWorldImg1}
              rate={"4.98"}
              location={"Toledo"}
              price={"Starting price: 577 € / person - 3 days"}
            />
            <AroundWorldCard
              path={aroundWorldImg2}
              rate={"4.98"}
              location={"Mesa"}
              price={"Starting price: 577 € / person - 3 days"}
            />
            <AroundWorldCard
              path={aroundWorldImg3}
              rate={"4.98"}
              location={"Utica"}
              price={"Starting price: 577 € / person - 3 days"}
            />
            <AroundWorldCard
              path={aroundWorldImg4}
              rate={"4.98"}
              location={"South Bend"}
              price={"Starting price: 577 € / person - 3 days"}
            />
            <AroundWorldCard
              path={aroundWorldImg5}
              rate={"4.98"}
              location={"Toledo"}
              price={"Starting price: 577 € / person - 3 days"}
            />
            <AroundWorldCard
              path={aroundWorldImg6}
              rate={"4.98"}
              location={"Mesa"}
              price={"Starting price: 577 € / person - 3 days"}
            />
            <AroundWorldCard
              path={aroundWorldImg7}
              rate={"4.98"}
              location={"Utica"}
              price={"Starting price: 577 € / person - 3 days"}
            />
            <AroundWorldCard
              path={aroundWorldImg8}
              rate={"4.98"}
              location={"South Bend"}
              price={"Starting price: 577 € / person - 3 days"}
            />
          </div>
        </div>

        <div className="experiences">
          <h2>Highly rated experiences</h2>
          <span className="experiences-description">
            Multi-day trips organized by local experts with activities, meals
            and accommodation included
          </span>
          <div className="experiences-cards-row"></div>
        </div>
      </section>
      <footer />
    </div>
  );
};

export default Home;
