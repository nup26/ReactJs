import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/contants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestauantCategory";

const RestaurantMenu = () => {
  // const [resInfo, setresInfo] = useState(null);

  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  // console.log(resInfo);

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   // const data = await fetch(MENU_API + resId);

  //   const data = await fetch(MENU_API + resId);

  //   const json = await data.json();

  //   console.log(json);

  //   setresInfo(json.data);

  //   console.log(resInfo);
  // };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  //console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // console.log(categories);

  // console.log(itemCards);

  return (
    <div className="text-center">
      <h2 className="font-bold my-6 text-xl">{name}</h2>
      <p className="font-bold text-lg">
        {cuisines.join(",")} - {costForTwoMessage}
      </p>

      {/* <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.name}>
            {item.card.info.name} - {"Rs."} {item.card.info.price / 100}
          </li>
        ))}
      </ul> */}

      {/* categories accordian */}
      {categories.map((category, index) => (
        <RestaurantCategory key={index} data={category?.card?.card} />
      ))}
    </div>
  );
};

export default RestaurantMenu;
