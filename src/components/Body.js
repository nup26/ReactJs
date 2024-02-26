import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import resList from "../utils/mockdata";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  //state variable - super powerful variable

  const [listofRestaurants, setlistofRestaurants] = useState([]);

  const [filterRestaurants, setfilterRestaurants] = useState([]);

  const [searchText, setsearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.006405&lng=77.7518467&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    //console.log(json);
    //  console.log(listofRestaurants);
    //console.log(filterRestaurants);

    // const newarray =
    //   json.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    // console.log(newarray);

    // const array2 =
    //   json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    // console.log(array2);

    //optional chaining
    setlistofRestaurants(
      json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setfilterRestaurants(
      json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    console.log(filterRestaurants);
  };

  const onlineStatus = useOnlineStatus();

  console.log("before", onlineStatus);

  if (onlineStatus === false)
    return (
      <h1>Looks like you are offline.Please check your internet connection</h1>
    );

  console.log("after ", onlineStatus);

  //loading spiner when when was empty
  //conditional rendering
  if (listofRestaurants.length === 0) {
    return <Shimmer />;
  }

  //normal js variable
  // let listofRestaurants1 = [
  //   {
  //     info: {
  //       id: "550793",
  //       name: "Bakingo",
  //       cloudinaryImageId: "pzjaewtunfb5dzkqlprr",
  //       locality: "Hagdur Road",
  //       areaName: "Whitefield",
  //       costForTwo: "₹299 for two",
  //       cuisines: ["Bakery", "Desserts", "Beverages", "Snacks"],
  //       avgRating: 3.8,
  //       deliveryTime1: 36,
  //       feeDetails: {
  //         restaurantId: "550793",
  //         fees: [
  //           {
  //             name: "BASE_DISTANCE",
  //             fee: 5300,
  //           },
  //           {
  //             name: "BASE_TIME",
  //           },
  //           {
  //             name: "ANCILLARY_SURGE_FEE",
  //           },
  //         ],
  //         totalFee: 5300,
  //       },
  //       parentId: "3818",
  //       avgRatingString: "4.2",
  //       totalRatingsString: "1K+",
  //       sla: {
  //         deliveryTime: 28,
  //         lastMileTravel: 5,
  //         serviceability: "SERVICEABLE",
  //         slaString: "28 mins",
  //         lastMileTravelString: "5.0 km",
  //         iconType: "ICON_TYPE_EMPTY",
  //       },
  //       availability: {
  //         nextCloseTime: "2023-10-11 01:00:00",
  //         opened: true,
  //       },
  //       badges: {},
  //       isOpen: true,
  //       aggregatedDiscountInfoV2: {},
  //       type: "F",
  //       badgesV2: {
  //         entityBadges: {
  //           imageBased: {},
  //           textBased: {},
  //           textExtendedBadges: {},
  //         },
  //       },
  //       orderabilityCommunication: {
  //         title: {},
  //         subTitle: {},
  //         message: {},
  //         customIcon: {},
  //       },
  //       differentiatedUi: {
  //         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //         differentiatedUiMediaDetails: {
  //           mediaType: "ADS_MEDIA_ENUM_IMAGE",
  //           lottie: {},
  //           video: {},
  //         },
  //       },
  //       reviewsSummary: {},
  //       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //       restaurantOfferPresentationInfo: {},
  //     },
  //     analytics: {
  //       context: "seo-data-18637442-2a0a-4f3b-b77b-deae70816001",
  //     },
  //     cta: {
  //       link: "https://www.swiggy.com/restaurants/bakingo-hagdur-road-whitefield-bangalore-550793",
  //       text: "RESTAURANT_MENU",
  //       type: "WEBLINK",
  //     },
  //     widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  //   },

  //   {
  //     info: {
  //       id: "22247",
  //       name: "Subway",
  //       cloudinaryImageId: "1ace5fa65eff3e1223feb696c956b38b",
  //       locality: "Ascendas Park Square",
  //       areaName: "Whitefield",
  //       costForTwo: "₹350 for two",
  //       deliveryTime1: 38,
  //       cuisines: ["Salads", "Snacks", "Desserts", "Beverages"],
  //       avgRating: 4.1,
  //       feeDetails: {
  //         restaurantId: "22247",
  //         fees: [
  //           {
  //             name: "BASE_DISTANCE",
  //             fee: 5300,
  //           },
  //           {
  //             name: "BASE_TIME",
  //           },
  //           {
  //             name: "ANCILLARY_SURGE_FEE",
  //           },
  //         ],
  //         totalFee: 5300,
  //       },
  //       parentId: "2",
  //       avgRatingString: "4.1",
  //       totalRatingsString: "10K+",
  //       sla: {
  //         deliveryTime: 33,
  //         lastMileTravel: 5,
  //         serviceability: "SERVICEABLE",
  //         slaString: "33 mins",
  //         lastMileTravelString: "5.0 km",
  //         iconType: "ICON_TYPE_EMPTY",
  //       },
  //       availability: {
  //         nextCloseTime: "2023-10-11 00:00:00",
  //         opened: true,
  //       },
  //       badges: {},
  //       isOpen: true,
  //       type: "F",
  //       badgesV2: {
  //         entityBadges: {
  //           imageBased: {},
  //           textBased: {},
  //           textExtendedBadges: {},
  //         },
  //       },
  //       aggregatedDiscountInfoV3: {
  //         header: "40% OFF",
  //         subHeader: "UPTO ₹80",
  //       },
  //       differentiatedUi: {
  //         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //         differentiatedUiMediaDetails: {
  //           mediaType: "ADS_MEDIA_ENUM_IMAGE",
  //           lottie: {},
  //           video: {},
  //         },
  //       },
  //       reviewsSummary: {},
  //       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //       restaurantOfferPresentationInfo: {},
  //     },
  //     analytics: {},
  //     cta: {
  //       link: "https://www.swiggy.com/restaurants/subway-ascendas-park-square-whitefield-bangalore-22247",
  //       type: "WEBLINK",
  //     },
  //   },
  //   {
  //     info: {
  //       id: "577060",
  //       name: "EatFit",
  //       cloudinaryImageId: "6126c9b45de2cb222405c1af8a321e74",
  //       locality: "Prashanth Extension",
  //       areaName: "Whitefield",
  //       costForTwo: "₹270 for two",
  //       deliveryTime1: 30,
  //       cuisines: [
  //         "Chinese",
  //         "Healthy Food",
  //         "Tandoor",
  //         "Pizzas",
  //         "North Indian",
  //         "Thalis",
  //         "Biryani",
  //       ],
  //       avgRating: 4.4,
  //       feeDetails: {
  //         restaurantId: "577060",
  //         fees: [
  //           {
  //             name: "BASE_DISTANCE",
  //             fee: 3400,
  //           },
  //           {
  //             name: "BASE_TIME",
  //           },
  //           {
  //             name: "ANCILLARY_SURGE_FEE",
  //           },
  //         ],
  //         totalFee: 3400,
  //       },
  //       parentId: "76139",
  //       avgRatingString: "4.2",
  //       totalRatingsString: "1K+",
  //       sla: {
  //         deliveryTime: 25,
  //         lastMileTravel: 3.8,
  //         serviceability: "SERVICEABLE",
  //         slaString: "25 mins",
  //         lastMileTravelString: "3.8 km",
  //         iconType: "ICON_TYPE_EMPTY",
  //       },
  //       availability: {
  //         nextCloseTime: "2023-10-10 23:59:00",
  //         opened: true,
  //       },
  //       badges: {
  //         textExtendedBadges: [
  //           {
  //             iconId: "guiltfree/GF_Logo_android_3x",
  //             shortDescription: "brand",
  //             fontColor: "#7E808C",
  //           },
  //         ],
  //       },
  //       isOpen: true,
  //       type: "F",
  //       badgesV2: {
  //         entityBadges: {
  //           imageBased: {},
  //           textBased: {},
  //           textExtendedBadges: {
  //             badgeObject: [
  //               {
  //                 attributes: {
  //                   description: "",
  //                   fontColor: "#7E808C",
  //                   iconId: "guiltfree/GF_Logo_android_3x",
  //                   shortDescription: "brand",
  //                 },
  //               },
  //             ],
  //           },
  //         },
  //       },
  //       aggregatedDiscountInfoV3: {
  //         header: "₹125 OFF",
  //         subHeader: "ABOVE ₹249",
  //         discountTag: "FLAT DEAL",
  //       },
  //       differentiatedUi: {
  //         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //         differentiatedUiMediaDetails: {
  //           mediaType: "ADS_MEDIA_ENUM_IMAGE",
  //           lottie: {},
  //           video: {},
  //         },
  //       },
  //       reviewsSummary: {},
  //       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //       restaurantOfferPresentationInfo: {},
  //     },
  //     analytics: {},
  //     cta: {
  //       link: "https://www.swiggy.com/restaurants/eatfit-prashanth-extension-whitefield-bangalore-577060",
  //       type: "WEBLINK",
  //     },
  //   },
  // ];

  //using ternary operater and clubling the condiontal rendering condition with it . We can write it separetly also
  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              //om click of serach button filter the restaurant list and update UI

              const serachFilterRestaurants = listofRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              //list of restaurents will upadte
              setfilterRestaurants(serachFilterRestaurants);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            const filteredRestaurents = listofRestaurants.filter(
              (res) => res.info.avgRating > 4
            ); // console.log(listofRestaurants);

            setfilterRestaurants(filteredRestaurents);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {filterRestaurants.map((restaurant, index) => (
          <Link key={index} to={"/restaurants/" + restaurant.info.id}>
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
