import { CDN_URL } from "../utils/contants";

const RestaurantCard = (props) => {
  const { resData } = props;

  //   console.log(resData);

  if (resData === undefined || resData == null) return;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;

  return (
    <div className="m-4 p-4 w-[250px] h-[400px] bg-gray-100 rounded-lg hover:bg-gray-200">
      <img
        className="rounded-lg h-[200px] w-[230px]"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h3>{cuisines.join(" , ")}</h3>
      <h3>{avgRating}</h3>
      <h3>{costForTwo}</h3>
      <h3>{sla.deliveryTime} minutes</h3>
    </div>
  );
};

export default RestaurantCard;
