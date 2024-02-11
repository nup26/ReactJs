import React from "react";
import ReactDOM from "react-dom/client";


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


const StyleCard={
    backgroundColor:"#f0f0f0",

};

const Header =()=>{
    return (
        <div className="header">

            <div className="logo-container">
                <img className="logo" src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/food-app-icon-food-explorer-design-template-8ae900e41ccbc0a2e1b48a85d239e389_screen.jpg?ts=1585237320"/>
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
    )

} 

const RestaurantCard =(props)=>{

    const {resData}=props;

    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo}=resData?.info;

    return(
        <div className="res-card" style={StyleCard}>
        <img className="res-logo" alt="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + 
        cloudinaryImageId}/>
         <h3>{name}</h3>
         <h3>{cuisines.join(" , ")}</h3>
         <h3>{avgRating}</h3>
         <h3>{costForTwo}</h3>
        </div>
    )
}

const resList=[
    {
        "info": {
            "id": "550793",
            "name": "Bakingo",
            "cloudinaryImageId": "pzjaewtunfb5dzkqlprr",
            "locality": "Hagdur Road",
            "areaName": "Whitefield",
            "costForTwo": "₹299 for two",
            "cuisines": [
                "Bakery",
                "Desserts",
                "Beverages",
                "Snacks"
            ],
            "avgRating": 4.2,
            "feeDetails": {
                "restaurantId": "550793",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 5300
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 5300
            },
            "parentId": "3818",
            "avgRatingString": "4.2",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 28,
                "lastMileTravel": 5,
                "serviceability": "SERVICEABLE",
                "slaString": "28 mins",
                "lastMileTravelString": "5.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-10-11 01:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {
            "context": "seo-data-18637442-2a0a-4f3b-b77b-deae70816001"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/bakingo-hagdur-road-whitefield-bangalore-550793",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "65769",
            "name": "Burger King",
            "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
            "locality": "ITPL Main Road",
            "areaName": "Whitefield",
            "costForTwo": "₹350 for two",
            "cuisines": [
                "Burgers",
                "American"
            ],
            "avgRating": 3.9,
            "feeDetails": {
                "restaurantId": "65769",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 5300
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 5300
            },
            "parentId": "166",
            "avgRatingString": "4.2",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 27,
                "lastMileTravel": 5,
                "serviceability": "SERVICEABLE",
                "slaString": "27 mins",
                "lastMileTravelString": "5.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-10-11 00:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "EVERY ITEM",
                "subHeader": "@ ₹129"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {
            "context": "seo-data-18637442-2a0a-4f3b-b77b-deae70816001"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/burger-king-itpl-main-road-whitefield-bangalore-65769",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
     } ,

     {
        "info": {
            "id": "577060",
            "name": "EatFit",
            "cloudinaryImageId": "6126c9b45de2cb222405c1af8a321e74",
            "locality": "Prashanth Extension",
            "areaName": "Whitefield",
            "costForTwo": "₹270 for two",
            "cuisines": [
                "Chinese",
                "Healthy Food",
                "Tandoor",
                "Pizzas",
                "North Indian",
                "Thalis",
                "Biryani"
            ],
            "avgRating": 3.8,
            "feeDetails": {
                "restaurantId": "577060",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 3400
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 3400
            },
            "parentId": "76139",
            "avgRatingString": "4.2",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 25,
                "lastMileTravel": 3.8,
                "serviceability": "SERVICEABLE",
                "slaString": "25 mins",
                "lastMileTravelString": "3.8 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-10-10 23:59:00",
                "opened": true
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "brand",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "brand"
                                }
                            }
                        ]
                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹249",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/eatfit-prashanth-extension-whitefield-bangalore-577060",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "61580",
            "name": "Imperio Restaurant",
            "cloudinaryImageId": "a1629b9c7f59577a55411e94425c6d99",
            "locality": "Seegehalli",
            "areaName": "Whitefield",
            "costForTwo": "₹500 for two",
            "cuisines": [
                "Chinese",
                "South Indian",
                "North Indian",
                "Continental",
                "Desserts",
                "Kerala",
                "Andhra",
                "Beverages",
                "Mughlai",
                "Seafood",
                "Hyderabadi",
                "Healthy Food",
                "Arabian",
                "Biryani",
                "Burgers",
                "Barbecue",
                "Oriental"
            ],
            "avgRating": 3.9,
            "feeDetails": {
                "restaurantId": "61580",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 2800
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 2800
            },
            "parentId": "5610",
            "avgRatingString": "3.9",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 19,
                "lastMileTravel": 1.3,
                "serviceability": "SERVICEABLE",
                "slaString": "19 mins",
                "lastMileTravelString": "1.3 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-10-11 00:00:00",
                "opened": true
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "options available"
                                }
                            }
                        ]
                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "20% OFF",
                "subHeader": "UPTO ₹50"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/imperio-restaurant-seegehalli-whitefield-bangalore-61580",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "69892",
            "name": "Kanti Sweets",
            "cloudinaryImageId": "fx2d4ygwtgspqsji7gfo",
            "locality": "Garudacharpalya",
            "areaName": "Mahadevpura",
            "costForTwo": "₹100 for two",
            "cuisines": [
                "Desserts"
            ],
            "avgRating": 4.4,
            "veg": true,
            "feeDetails": {
                "restaurantId": "69892",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 7000
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 7000
            },
            "parentId": "4700",
            "avgRatingString": "4.4",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 34,
                "lastMileTravel": 7.9,
                "serviceability": "SERVICEABLE",
                "slaString": "34 mins",
                "lastMileTravelString": "7.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-10-10 22:30:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/kanti-sweets-garudacharpalya-mahadevpura-bangalore-69892",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "1530",
            "name": "A2B - Adyar Ananda Bhavan",
            "cloudinaryImageId": "ogivavhnvivnw1hv9nty",
            "locality": "Pattandur Agrahara Village",
            "areaName": "Whitefield",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "South Indian",
                "North Indian",
                "Sweets",
                "Chinese"
            ],
            "avgRating": 4.1,
            "veg": true,
            "feeDetails": {
                "restaurantId": "1530",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 3400
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 3400
            },
            "parentId": "22",
            "avgRatingString": "4.1",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 25,
                "lastMileTravel": 3.6,
                "serviceability": "SERVICEABLE",
                "slaString": "25 mins",
                "lastMileTravelString": "3.6 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-10-10 22:30:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹100 OFF",
                "subHeader": "ABOVE ₹299",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/a2b-adyar-ananda-bhavan-pattandur-agrahara-village-whitefield-bangalore-1530",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "297639",
            "name": "Thalairaj Biryani",
            "cloudinaryImageId": "qrqhfouxoeqt8aflj2yt",
            "locality": "ITPL Main Road",
            "areaName": "Whitefield",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Andhra",
                "Biryani",
                "Hyderabadi",
                "South Indian",
                "Indian",
                "Beverages"
            ],
            "avgRating": 4.2,
            "feeDetails": {
                "restaurantId": "297639",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 5300
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 5300
            },
            "parentId": "433875",
            "avgRatingString": "4.2",
            "totalRatingsString": "5K+",
            "sla": {
                "deliveryTime": 29,
                "lastMileTravel": 5,
                "serviceability": "SERVICEABLE",
                "slaString": "29 mins",
                "lastMileTravelString": "5.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-10-11 01:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/thalairaj-biryani-itpl-main-road-whitefield-bangalore-297639",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "384760",
            "name": "KFC",
            "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
            "locality": "VIJAY SAI COLONY",
            "areaName": "Kadugodi",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Burgers",
                "Biryani",
                "American",
                "Snacks",
                "Fast Food"
            ],
            "avgRating": 4.1,
            "feeDetails": {
                "restaurantId": "384760",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 3500
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 3500
            },
            "parentId": "547",
            "avgRatingString": "4.1",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 16,
                "lastMileTravel": 0.8,
                "serviceability": "SERVICEABLE",
                "slaString": "16 mins",
                "lastMileTravelString": "0.8 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-10-10 23:59:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "20% OFF",
                "subHeader": "UPTO ₹50"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/kfc-vijay-sai-colony-kadugodi-bangalore-384760",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "72823",
            "name": "Domino's Pizza",
            "cloudinaryImageId": "vttxirmqz3aiwzge0qyq",
            "locality": "Belathur Village",
            "areaName": "Whitefield",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Pizzas",
                "Italian",
                "Pastas",
                "Desserts"
            ],
            "avgRating": 4.3,
            "feeDetails": {
                "restaurantId": "72823",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 2800
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 2800
            },
            "parentId": "2456",
            "avgRatingString": "4.3",
            "totalRatingsString": "5K+",
            "sla": {
                "deliveryTime": 25,
                "serviceability": "SERVICEABLE",
                "slaString": "25 mins",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-10-10 22:59:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹150 OFF",
                "subHeader": "ABOVE ₹299",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/dominos-pizza-belathur-village-whitefield-bangalore-72823",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "22247",
            "name": "Subway",
            "cloudinaryImageId": "1ace5fa65eff3e1223feb696c956b38b",
            "locality": "Ascendas Park Square",
            "areaName": "Whitefield",
            "costForTwo": "₹350 for two",
            "cuisines": [
                "Salads",
                "Snacks",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 4.1,
            "feeDetails": {
                "restaurantId": "22247",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 5300
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 5300
            },
            "parentId": "2",
            "avgRatingString": "4.1",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 33,
                "lastMileTravel": 5,
                "serviceability": "SERVICEABLE",
                "slaString": "33 mins",
                "lastMileTravelString": "5.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-10-11 00:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "40% OFF",
                "subHeader": "UPTO ₹80"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/subway-ascendas-park-square-whitefield-bangalore-22247",
            "type": "WEBLINK"
        }
    },
      
] ;

const Body=()=>{
    return(
        <div className="body">

            <div className="serach">Search</div>

            <div className="res-container">
        { resList.map((restaurant) =>{
             <RestaurantCard resData={restaurant} /> } ) }
    
             
            </div>

        </div>
    )
}

const AppLayout=()=>{
    return(
        <div className="app">
            <Header/>
            <Body />

        </div>
    )
}


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);






