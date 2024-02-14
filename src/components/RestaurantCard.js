import { CDN_URL } from "../utils/contants";

const RestaurantCard = (props) => {
  const { resData } = props;

  //   console.log(resData);

  if (resData === undefined || resData == null) return;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h3>{cuisines.join(" , ")}</h3>
      <h3>{avgRating}</h3>
      <h3>{costForTwo}</h3>
      <h3>{sla.deliveryTime} minutes</h3>
    </div>
  );
};

export default RestaurantCard;
