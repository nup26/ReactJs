import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockdata";

const Body = () => {
  //state variable - super powerful variable

  const [listofRestaurants, setlistofRestaurents] = useState(resList);

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

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredRestaurents = listofRestaurants.filter(
              (res) => res.info.avgRating > 4
            ); // console.log(listofRestaurants);

            setlistofRestaurents(filteredRestaurents);
          }}
        >
          Top Rated Restaurants{" "}
        </button>
      </div>

      <div className="res-container">
        {listofRestaurants.map((restaurant, index) => (
          <RestaurantCard resData={restaurant} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Body;
