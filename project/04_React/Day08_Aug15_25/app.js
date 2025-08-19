import React from "react";
import ReactDOM from "react-dom/client";




const LeftHeader = ()=>(
    <div className = "left-Nav">
    <img className = "app-icon" src = "https://static.vecteezy.com/system/resources/previews/050/816/833/non_2x/swiggy-transparent-icon-free-png.png" alt = "icon"/>
    </div>
)

const RightHeader = ()=>{
    return (
        <div className="Right-Nav">
        <ul className = "nav-item-list">
            <li className="nav-item-1"><a href="/">Swiggy corporate</a></li>
            <li className="nav-item-2"><a href="/">Search</a></li>
            <li className="nav-item-3"><a href="/">Offers</a></li>
            <li className="nav-item-4"><a href="/">Help</a></li>
            <li className="nav-item-5"><a href="/">Sign In</a></li>
            <li className="nav-item-6"><a href="/">Cart</a></li>
        </ul>
        </div>
    )
}


let Header = ()=>{
    return (
       <div className="Header">
        <LeftHeader/>
        <RightHeader/>
       </div>
    )
}

const restaurants= [
{
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "932149",
"name": "Ms Sri Jodhpur Misthan Bhandar",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/25/abdd54a2-cacc-4849-bb68-ca5ef557c1c9_932149.jpg",
"locality": "Old Bus Stand",
"areaName": "Banswara",
"costForTwo": "₹450 for two",
"cuisines": [
"Sweets"
],
"avgRating": 4.4,
"veg": true,
"parentId": "540213",
"avgRatingString": "4.4",
"totalRatingsString": "6",
"sla": {
"deliveryTime": 30,
"lastMileTravel": 0.4,
"serviceability": "SERVICEABLE",
"slaString": "25-30 mins",
"lastMileTravelString": "0.4 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-08-15 22:00:00",
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
"discountCalloutInfo": {
"message": "Free Delivery",
"logoCtx": {
"logo": "v1655895371/free_delivery_logo_hqipbo.png"
}
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
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-8ca4115d-88d7-4c0b-8a9c-29a9543c4586"
},
"cta": {
"link": "https://www.swiggy.com/city/banswara/ms-sri-jodhpur-misthan-bhandar-old-bus-stand-banswara-rest932149",
"text": "RESTAURANT_MENU",
"type": "WEBLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "797722",
"name": "Utsav Hotel",
"cloudinaryImageId": "5d8f203db35916f2b0b25c92e32f9daa",
"locality": "Banswara",
"areaName": "Banswara",
"costForTwo": "₹600 for two",
"cuisines": [
"North Indian"
],
"avgRating": 4.1,
"veg": true,
"parentId": "220417",
"avgRatingString": "4.1",
"totalRatingsString": "132",
"sla": {
"deliveryTime": 32,
"lastMileTravel": 2,
"serviceability": "SERVICEABLE",
"slaString": "30-35 mins",
"lastMileTravelString": "2.0 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-08-15 21:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "android/static-assets/icons/big_rx.png",
"description": "bolt!"
},
{
"imageId": "v1695133679/badges/Pure_Veg111.png",
"description": "pureveg"
}
],
"textExtendedBadges": [
{
"iconId": "Akash/Listing%20badge.png",
"shortDescription": "Price Match Promise",
"fontColor": "#7E808C"
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
"description": "bolt!",
"imageId": "android/static-assets/icons/big_rx.png"
}
},
{
"attributes": {
"description": "pureveg",
"imageId": "v1695133679/badges/Pure_Veg111.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {
"badgeObject": [
{
"attributes": {
"description": "",
"fontColor": "#7E808C",
"iconId": "Akash/Listing%20badge.png",
"shortDescription": "Price Match Promise"
}
}
]
}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹149",
"discountCalloutInfo": {
"message": "Free Delivery",
"logoCtx": {
"logo": "v1655895371/free_delivery_logo_hqipbo.png"
}
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
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-8ca4115d-88d7-4c0b-8a9c-29a9543c4586"
},
"cta": {
"link": "https://www.swiggy.com/city/banswara/utsav-hotel-banswara-rest797722",
"text": "RESTAURANT_MENU",
"type": "WEBLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "797721",
"name": "US Pizza & Cafe Casablanca",
"cloudinaryImageId": "d9b5570d65d8600f10d985a817e0f0ff",
"locality": "Banswara",
"areaName": "Banswara",
"costForTwo": "₹600 for two",
"cuisines": [
"Italian"
],
"avgRating": 4.3,
"veg": true,
"parentId": "477056",
"avgRatingString": "4.3",
"totalRatingsString": "211",
"sla": {
"deliveryTime": 38,
"lastMileTravel": 2.7,
"serviceability": "SERVICEABLE",
"slaString": "35-40 mins",
"lastMileTravelString": "2.7 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-08-15 22:30:00",
"opened": true
},
"badges": {
"textExtendedBadges": [
{
"iconId": "Akash/Listing%20badge.png",
"shortDescription": "Price Match Promise",
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
"iconId": "Akash/Listing%20badge.png",
"shortDescription": "Price Match Promise"
}
}
]
}
}
},
"aggregatedDiscountInfoV3": {
"header": "70% OFF",
"subHeader": "UPTO ₹140",
"discountCalloutInfo": {
"message": "Free Delivery",
"logoCtx": {
"logo": "v1655895371/free_delivery_logo_hqipbo.png"
}
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
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-8ca4115d-88d7-4c0b-8a9c-29a9543c4586"
},
"cta": {
"link": "https://www.swiggy.com/city/banswara/us-pizza-and-cafe-casablanca-banswara-rest797721",
"text": "RESTAURANT_MENU",
"type": "WEBLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "940913",
"name": "The Imperial Hotel & Restaurant",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/14/aa04afa5-610e-40fd-8552-dcc6c406ef48_940913.JPG",
"locality": "Banswara",
"areaName": "Banswara",
"costForTwo": "₹500 for two",
"cuisines": [
"Desserts",
"Hyderabadi",
"Afghani",
"Pizzas",
"Fast Food",
"Cafe"
],
"avgRating": 3.8,
"veg": true,
"parentId": "573921",
"avgRatingString": "3.8",
"totalRatingsString": "27",
"sla": {
"deliveryTime": 33,
"lastMileTravel": 2.4,
"serviceability": "SERVICEABLE",
"slaString": "30-35 mins",
"lastMileTravelString": "2.4 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-08-15 15:30:00",
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
"header": "ITEMS",
"subHeader": "AT ₹129",
"discountCalloutInfo": {
"message": "Free Delivery",
"logoCtx": {
"logo": "v1655895371/free_delivery_logo_hqipbo.png"
}
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
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-8ca4115d-88d7-4c0b-8a9c-29a9543c4586"
},
"cta": {
"link": "https://www.swiggy.com/city/banswara/the-imperial-hotel-and-restaurant-banswara-rest940913",
"text": "RESTAURANT_MENU",
"type": "WEBLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "1027057",
"name": "Jay Bhavani Vadapav",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/22/2be6ca32-6f59-4925-a574-3877698d3fa5_1027057 (1).jpg",
"locality": "Banswara",
"areaName": "Banswara",
"costForTwo": "₹100 for two",
"cuisines": [
"Fast Food",
"Snacks",
"Chaat",
"Street Food",
"Chinese",
"pizza",
"Burger"
],
"avgRating": 3.7,
"veg": true,
"parentId": "4428",
"avgRatingString": "3.7",
"totalRatingsString": "53",
"sla": {
"deliveryTime": 32,
"lastMileTravel": 2.5,
"serviceability": "SERVICEABLE",
"slaString": "30-35 mins",
"lastMileTravelString": "2.5 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-08-15 22:00:00",
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
"header": "ITEMS",
"subHeader": "AT ₹39",
"discountCalloutInfo": {
"message": "Free Delivery",
"logoCtx": {
"logo": "v1655895371/free_delivery_logo_hqipbo.png"
}
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
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-8ca4115d-88d7-4c0b-8a9c-29a9543c4586"
},
"cta": {
"link": "https://www.swiggy.com/city/banswara/jay-bhavani-vadapav-banswara-rest1027057",
"text": "RESTAURANT_MENU",
"type": "WEBLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "1099828",
"name": "Nagpal's Chole Bhature",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/21/35d60667-c4da-4859-bcd6-8239dcc2f2e0_1099828.jpg",
"locality": "Banswara",
"areaName": "Banswara",
"costForTwo": "₹200 for two",
"cuisines": [
"North Indian"
],
"avgRating": 4,
"veg": true,
"parentId": "251364",
"avgRatingString": "4.0",
"totalRatingsString": "25",
"sla": {
"deliveryTime": 27,
"lastMileTravel": 2.6,
"serviceability": "SERVICEABLE",
"slaString": "25-30 mins",
"lastMileTravelString": "2.6 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-08-15 22:30:00",
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
"discountCalloutInfo": {
"message": "Free Delivery",
"logoCtx": {
"logo": "v1655895371/free_delivery_logo_hqipbo.png"
}
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
"isNewlyOnboarded": true,
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-8ca4115d-88d7-4c0b-8a9c-29a9543c4586"
},
"cta": {
"link": "https://www.swiggy.com/city/banswara/nagpals-chole-bhature-banswara-rest1099828",
"text": "RESTAURANT_MENU",
"type": "WEBLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "873725",
"name": "Jodhpur Misthan Bhandar And Restaurant",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/21/de819b9b-c4f4-4177-bad3-d6eb6fdc5d53_873725.JPG",
"locality": "Mohan Colony",
"areaName": "Banswara",
"costForTwo": "₹300 for two",
"cuisines": [
"Chinese",
"Sweets",
"Sri Lankan",
"Fast Food"
],
"avgRating": 3.9,
"veg": true,
"parentId": "512102",
"avgRatingString": "3.9",
"totalRatingsString": "94",
"sla": {
"deliveryTime": 27,
"lastMileTravel": 1.6,
"serviceability": "SERVICEABLE",
"slaString": "25-30 mins",
"lastMileTravelString": "1.6 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-08-15 22:30:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "android/static-assets/icons/big_rx.png",
"description": "bolt!"
},
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
"description": "bolt!",
"imageId": "android/static-assets/icons/big_rx.png"
}
},
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
"header": "ITEMS",
"subHeader": "AT ₹89",
"discountCalloutInfo": {
"message": "Free Delivery",
"logoCtx": {
"logo": "v1655895371/free_delivery_logo_hqipbo.png"
}
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
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-8ca4115d-88d7-4c0b-8a9c-29a9543c4586"
},
"cta": {
"link": "https://www.swiggy.com/city/banswara/jodhpur-misthan-bhandar-and-restaurant-mohan-colony-banswara-rest873725",
"text": "RESTAURANT_MENU",
"type": "WEBLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "938978",
"name": "Ms Danpur Misthan Bhandar",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/9/6493d3e9-f562-46ae-b9da-328a885b0878_938978.jpg",
"locality": "Banswara",
"areaName": "Banswara",
"costForTwo": "₹300 for two",
"cuisines": [
"Chinese",
"Bakery",
"Sweets",
"Pizzas",
"Pastas",
"Waffle",
"Ice Cream Cakes",
"Fast Food",
"Burgers",
"Cafe"
],
"avgRating": 4.6,
"veg": true,
"parentId": "550800",
"avgRatingString": "4.6",
"totalRatingsString": "8",
"sla": {
"deliveryTime": 27,
"lastMileTravel": 0.7,
"serviceability": "SERVICEABLE",
"slaString": "25-30 mins",
"lastMileTravelString": "0.7 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-08-15 22:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "android/static-assets/icons/big_rx.png",
"description": "bolt!"
},
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
"description": "bolt!",
"imageId": "android/static-assets/icons/big_rx.png"
}
},
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
"discountCalloutInfo": {
"message": "Free Delivery",
"logoCtx": {
"logo": "v1655895371/free_delivery_logo_hqipbo.png"
}
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
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-8ca4115d-88d7-4c0b-8a9c-29a9543c4586"
},
"cta": {
"link": "https://www.swiggy.com/city/banswara/ms-danpur-misthan-bhandar-banswara-rest938978",
"text": "RESTAURANT_MENU",
"type": "WEBLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
];

console.log(restaurants[0].info.name);

// const RestCard0 = ()=>(
//     <div className = "rest0-info">
//     <img className = "rest0-img" src = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/25/abdd54a2-cacc-4849-bb68-ca5ef557c1c9_932149.jpg"/>
//     <h2>{restaurants[0].info.name}</h2>
//     <p>{restaurants[0].info.locality}</p>
//     <p>{restaurants[0].info.cuisines.join(", ")}</p>
//     <p>{restaurants[0].info.avgRating} stars</p>
    
//     </div>
// );

// const RestCard1 = ()=>(
//     <div className = "rest0-info">
//     <img className = "rest0-img" src = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/5d8f203db35916f2b0b25c92e32f9daa"/>
//     <h2>{restaurants[1].info.name}</h2>
//     <p>{restaurants[1].info.locality}</p>
//     <p>{restaurants[1].info.cuisines.join(", ")}</p>
//     <p>{restaurants[1].info.avgRating} stars</p>
//     </div>
// );

// const RestCard2 = ()=>(
//     <div className = "rest0-info">
//     <img className = "rest0-img" src = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/d9b5570d65d8600f10d985a817e0f0ff"/>
//     <h2>{restaurants[2].info.name}</h2>
//     <p>{restaurants[2].info.locality}</p>
//     <p>{restaurants[2].info.cuisines.join(", ")}</p>
//     <p>{restaurants[2].info.avgRating} stars</p>
//     </div>
// )

// const RestCard3 = ()=>(
//     <div className = "rest0-info">
//     <img className = "rest0-img" src = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/8/14/aa04afa5-610e-40fd-8552-dcc6c406ef48_940913.JPG"/>
//     <h2>{restaurants[3].info.name}</h2>
//     <p>{restaurants[3].info.locality}</p>
//     <p>{restaurants[3].info.cuisines.join(", ")}</p>
//     <p>{restaurants[3].info.avgRating} stars</p>
//     </div>
// );

// const RestCard4 = ()=>(
//     <div className = "rest0-info">
//     <img className = "rest0-img" src = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/1/22/2be6ca32-6f59-4925-a574-3877698d3fa5_1027057%20(1).jpg"/>
//     <h2>{restaurants[4].info.name}</h2>
//     <p>{restaurants[4].info.locality}</p>
//     <p>{restaurants[4].info.cuisines.join(", ")}</p>
//     <p>{restaurants[4].info.avgRating} stars</p>
//     </div>
// );

// const RestCard5 = ()=>(
//     <div className = "rest0-info">
//     <img className = "rest0-img" src = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/5/21/35d60667-c4da-4859-bcd6-8239dcc2f2e0_1099828.jpg"/>
//     <h2>{restaurants[5].info.name}</h2>
//     <p>{restaurants[5].info.locality}</p>
//     <p>{restaurants[5].info.cuisines.join(", ")}</p>
//     <p>{restaurants[5].info.avgRating} stars</p>
//     </div>
// );

// const RestCard6 = ()=>(
//     <div className = "rest0-info">
//     <img className = "rest0-img" src = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/21/de819b9b-c4f4-4177-bad3-d6eb6fdc5d53_873725.JPG"/>
//     <h2>{restaurants[6].info.name}</h2>
//     <p>{restaurants[6].info.locality}</p>
//     <p>{restaurants[6].info.cuisines.join(", ")}</p>
//     <p>{restaurants[6].info.avgRating} stars</p>
//     </div>
// );
// const RestCard7 = ()=>(
//     <div className = "rest0-info">
//     <img className = "rest0-img" src = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/8/9/6493d3e9-f562-46ae-b9da-328a885b0878_938978.jpg"/>
//     <h2>{restaurants[7].info.name}</h2>
//     <p>{restaurants[7].info.locality}</p>
//     <p>{restaurants[7].info.cuisines.join(", ")}</p>
//     <p>{restaurants[7].info.avgRating} stars</p>
//     </div>
// )

const RestCard = ({restaurant})=> {
    return (
        <div className = "rest0-info">
    <img className = "rest0-img" src = {`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurant.info.cloudinaryImageId}`}/>
    <h2>{restaurant.info.name}</h2>
    <p>{restaurant.info.locality}</p>
    <p>{restaurant.info.cuisines.join(", ")}</p>
    <p>{restaurant.info.avgRating} stars</p>
    
    </div>
    )
};

let Main = ()=>{
    return (
        <div className="restCard-head">
  {    /* 
        <RestCard0/>
        <RestCard1/>
        <RestCard2/>
        <RestCard3/>
        <RestCard4/>
        <RestCard5/>
        <RestCard6/>
        <RestCard7/>
*/}
    {restaurants.map((value) => (
    <RestCard key={value.info.id} restaurant={value} />
))}
        </div>       
    )
};

let Footer = ()=>{
    return (
        <h2>I am Footer section</h2>
    )
}

const AppLayout=()=>{
    return (
        <>
        <Header/>
        <Main/>
        <Footer/>
        </>
    )
};

let destination = ReactDOM.createRoot(document.getElementById("root"));;
destination.render(<AppLayout/>)