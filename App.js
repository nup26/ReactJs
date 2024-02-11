import React from "react";
import ReactDOM from "react-dom/client";
import resList, { name } from "./data/restaurant";

// Header
//  -Logo
//  -Nav Items

// Body
//  -Search
//  -RestaurentContainer
//  -ResturantCard - img , name , start rating , cusinies,delivery time

//  Footer
//   -Copyright
//   -Address
//   -Contact

const StyleCard = {
  backgroundColor: "#f0f0f0",
};

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/food-app-icon-food-explorer-design-template-8ae900e41ccbc0a2e1b48a85d239e389_screen.jpg?ts=1585237320"
        />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resData } = props;

  //   console.log(resData);

  if (resData === undefined || resData == null) return;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData.info;

  return (
    <div className="res-card" style={StyleCard}>
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h3>{cuisines.join(" , ")}</h3>
      <h3>{avgRating}</h3>
      <h3>{costForTwo}</h3>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="serach">Search</div>

      <div className="res-container">
        {resList.map((restaurant, index) => (
          <RestaurantCard resData={restaurant} key={index} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
