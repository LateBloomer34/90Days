import React from "react";
import ReactDOM from "react-dom/client"


/* clone of swiggy app
basic building block of swiggy AudioParamMap

Header - icon
        navIcon
main - 
    search
    restro list
        Image
        resto name
        cousion
        rating
        dishes
footer
    t&c
*/

// headerSection creation
const HeaderNavList = ( <ul className="navList">
        <li className = "navItem1"><a href="/"> Swiggy Corporate</a></li>
        <li className = "navItem2"><a href="/"> search</a></li>
        <li className = "navItem3"><a href="/"> offers</a></li>
        <li className = "navItem4"><a href="/"> Help</a></li>
        <li className = "navItem5"><a href="/"> Sign In</a></li>
        <li className = "navItem6"><a href="/"> Cart</a></li>
    </ul>)

const Header = ()=>(
<div className = "headerBox">
<div className = "logoSide">
<a><img className ="logo" src="https://www.vhv.rs/dpng/d/433-4338596_swiggy-logo-png-image-free-download-searchpng-swiggy.png" alt="logo not loaded"/></a>
<button className="navButton">Others</button>
</div>

<>
   {HeaderNavList}
</>

</div>
)


//main Section creation

// const RestCard = ({
//     RestName : "KFC",
//     RestImage:<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXtFRQ9HZaFj-rhvF_W7H-nDP6dSiY2Cgieg&s" alt="KFCImage />
// });
let couision = ["chicken", "pizza" , "burger"];
let restCard = [
{
"info": {
"id": "387406",
"name": "Burger King",
"cloudinaryImageId": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/7af29109-02c3-41ff-afc6-d4dd8de5076c_387406.jpg",
"locality": "Walkway Mall",
"areaName": "Haldwani City",
"costForTwo": "₹350 for two",
"cuisines": [
"Burgers",
"American"
],
"avgRating": 4.4,
"parentId": "166",
"avgRatingString": "4.4",
"totalRatingsString": "7.4K+",
"sla": {
"deliveryTime": 24,
"lastMileTravel": 4.5,
"serviceability": "SERVICEABLE",
"slaString": "20-25 mins",
"lastMileTravelString": "4.5 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-08-14 23:59:00",
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
"subHeader": "AT ₹59"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
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
"context": "seo-data-c0b0e5e7-d43b-4e91-a936-62adad6c5628"
},
"cta": {
"link": "https://www.swiggy.com/city/haldwani/burger-king-walkway-mall-haldwani-city-rest387406",
"type": "WEBLINK"
}
},
{
"info": {
"id": "527687",
"name": "Subway",
"cloudinaryImageId": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/12/daa22d95-782f-472d-a696-796ab65325e9_527687.jpg",
"locality": "Nainital Road",
"areaName": "Haldwani Locality",
"costForTwo": "₹400 for two",
"cuisines": [
"sandwich",
"Salads",
"wrap",
"Healthy Food"
],
"avgRating": 3.8,
"parentId": "2",
"avgRatingString": "3.8",
"totalRatingsString": "543",
"sla": {
"deliveryTime": 33,
"lastMileTravel": 4.9,
"serviceability": "SERVICEABLE",
"slaString": "30-35 mins",
"lastMileTravelString": "4.9 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-08-14 23:59:00",
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
"subHeader": "AT ₹119"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
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
"context": "seo-data-c0b0e5e7-d43b-4e91-a936-62adad6c5628"
},
"cta": {
"link": "https://www.swiggy.com/city/haldwani/subway-nainital-road-haldwani-locality-rest527687",
"type": "WEBLINK"
}
},
{
"info": {
"id": "146764",
"name": "Nanak Sweets",
"cloudinaryImageId": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/at2gskplktoljqor1neb",
"locality": "Bareilly Road",
"areaName": "Banbhoolpura",
"costForTwo": "₹250 for two",
"cuisines": [
"Sweets",
"South Indian",
"Snacks",
"Chaat",
"Beverages"
],
"avgRating": 4.1,
"veg": true,
"parentId": "143793",
"avgRatingString": "4.1",
"totalRatingsString": "5.2K+",
"sla": {
"deliveryTime": 25,
"lastMileTravel": 2.3,
"serviceability": "SERVICEABLE",
"slaString": "25-30 mins",
"lastMileTravelString": "2.3 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-08-14 22:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "Ratnesh_Badges/Rx_Awards_2025/_Legendary%20Restaurants.png",
"description": "Delivery!"
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
"description": "Delivery!",
"imageId": "Ratnesh_Badges/Rx_Awards_2025/_Legendary%20Restaurants.png"
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
"subHeader": "AT ₹95"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
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
"context": "seo-data-c0b0e5e7-d43b-4e91-a936-62adad6c5628"
},
"cta": {
"link": "https://www.swiggy.com/city/haldwani/nanak-sweets-bareilly-road-banbhoolpura-rest146764",
"type": "WEBLINK"
}
},
{
"info": {
"id": "861519",
"name": "Pastas By Pizza Hut",
"cloudinaryImageId": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/5793d170-8756-4fd0-850f-523e9f99b439_861519.jpg",
"locality": "Thapa Colony",
"areaName": "Haldwani Locality",
"costForTwo": "₹400 for two",
"cuisines": [
"Pastas"
],
"avgRating": 3.6,
"parentId": "306806",
"avgRatingString": "3.6",
"totalRatingsString": "48",
"sla": {
"deliveryTime": 36,
"lastMileTravel": 4.7,
"serviceability": "SERVICEABLE",
"slaString": "35-40 mins",
"lastMileTravelString": "4.7 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-08-14 23:59:00",
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
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
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
"context": "seo-data-c0b0e5e7-d43b-4e91-a936-62adad6c5628"
},
"cta": {
"link": "https://www.swiggy.com/city/haldwani/pastas-by-pizza-hut-thapa-colony-haldwani-locality-rest861519",
"type": "WEBLINK"
}
},
{
"info": {
"id": "759020",
"name": "KFC",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/454bca0d-55d0-46de-96b4-3728195083b1_759020.JPG",
"locality": "Talli Bamori",
"areaName": "Kaladhungi",
"costForTwo": "₹400 for two",
"cuisines": [
"Burgers",
"Fast Food",
"Rolls & Wraps"
],
"avgRating": 4.3,
"parentId": "547",
"avgRatingString": "4.3",
"totalRatingsString": "1.2K+",
"sla": {
"deliveryTime": 10,
"lastMileTravel": 0.3,
"serviceability": "SERVICEABLE",
"slaString": "10-15 mins",
"lastMileTravelString": "0.3 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-08-14 23:59:00",
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
"subHeader": "AT ₹179"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
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
"context": "seo-data-c0b0e5e7-d43b-4e91-a936-62adad6c5628"
},
"cta": {
"link": "https://www.swiggy.com/city/haldwani/kfc-talli-bamori-kaladhungi-rest759020",
"type": "WEBLINK"
}
},
{
"info": {
"id": "243258",
"name": "Bikanervala",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/20/a3de5f0a-675c-458a-bc9c-850382266b81_243258.jpg",
"locality": "Saras Market Road",
"areaName": "Haldwani Locality",
"costForTwo": "₹300 for two",
"cuisines": [
"Chinese",
"North Indian",
"Snacks",
"Street Food",
"Sweets"
],
"avgRating": 4.4,
"veg": true,
"parentId": "45936",
"avgRatingString": "4.4",
"totalRatingsString": "2.3K+",
"sla": {
"deliveryTime": 28,
"lastMileTravel": 2.7,
"serviceability": "SERVICEABLE",
"slaString": "25-30 mins",
"lastMileTravelString": "2.7 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-08-14 22:00:00",
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
"header": "10% OFF",
"discountTag": "FLAT DEAL"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
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
"context": "seo-data-c0b0e5e7-d43b-4e91-a936-62adad6c5628"
},
"cta": {
"link": "https://www.swiggy.com/city/haldwani/bikanervala-saras-market-road-haldwani-locality-rest243258",
"type": "WEBLINK"
}
},
{
"info": {
"id": "330396",
"name": "Kwality Walls Ice Cream and More",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/13/decf499f-1408-4f67-9e38-26072b2fe760_330396.JPG",
"locality": "Indira Nagar",
"areaName": "Heera Nagar",
"costForTwo": "₹300 for two",
"cuisines": [
"Desserts",
"Ice Cream",
"Ice Cream Cakes"
],
"avgRating": 4.6,
"veg": true,
"parentId": "582",
"avgRatingString": "4.6",
"totalRatingsString": "1.9K+",
"sla": {
"deliveryTime": 28,
"lastMileTravel": 2.5,
"serviceability": "SERVICEABLE",
"slaString": "25-30 mins",
"lastMileTravelString": "2.5 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-08-14 22:40:00",
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
"context": "seo-data-c0b0e5e7-d43b-4e91-a936-62adad6c5628"
},
"cta": {
"link": "https://www.swiggy.com/city/haldwani/kwality-walls-ice-cream-and-more-indira-nagar-heera-nagar-rest330396",
"type": "WEBLINK"
}
},
{
"info": {
"id": "489981",
"name": "La Pino'z Pizza",
"cloudinaryImageId": "tpieyesjh9qpoa2lv0g2",
"locality": "Nainital Road",
"areaName": "Haldwani Locality",
"costForTwo": "₹300 for two",
"cuisines": [
"Pizzas",
"Pastas",
"Italian",
"Desserts",
"Beverages"
],
"avgRating": 4.3,
"parentId": "4961",
"avgRatingString": "4.3",
"totalRatingsString": "4.6K+",
"sla": {
"deliveryTime": 29,
"lastMileTravel": 2.3,
"serviceability": "SERVICEABLE",
"slaString": "25-30 mins",
"lastMileTravelString": "2.3 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-08-14 23:57:00",
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
"subHeader": "ABOVE ₹399",
"discountTag": "FLAT DEAL"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
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
"context": "seo-data-c0b0e5e7-d43b-4e91-a936-62adad6c5628"
},
"cta": {
"link": "https://www.swiggy.com/city/haldwani/la-pinoz-pizza-nainital-road-haldwani-locality-rest489981",
"type": "WEBLINK"
}
},
{
"info": {
"id": "388095",
"name": "Domino's Pizza",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/8/42635149-feee-4625-ae46-9404becf27e7_388095.JPG",
"locality": "Kaladhungi Road",
"areaName": "Heera Nagar",
"costForTwo": "₹400 for two",
"cuisines": [
"Pizzas",
"Italian",
"Pastas",
"Desserts"
],
"avgRating": 4.4,
"parentId": "2456",
"avgRatingString": "4.4",
"totalRatingsString": "1.1K+",
"sla": {
"deliveryTime": 25,
"lastMileTravel": 1.1,
"serviceability": "SERVICEABLE",
"slaString": "20-25 mins",
"lastMileTravelString": "1.1 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-08-14 23:59:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "android/static-assets/icons/big_rx.png",
"description": "bolt!"
}
],
"textExtendedBadges": [
{
"iconId": "Ratnesh_Badges/free%20del%20icon.png",
"shortDescription": "Free Delivery",
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
"iconId": "Ratnesh_Badges/free%20del%20icon.png",
"shortDescription": "Free Delivery"
}
}
]
}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹69"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
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
"context": "seo-data-c0b0e5e7-d43b-4e91-a936-62adad6c5628"
},
"cta": {
"link": "https://www.swiggy.com/city/haldwani/dominos-pizza-kaladhungi-road-heera-nagar-rest388095",
"type": "WEBLINK"
}
}]

// const RestCard =()=>(
//     <div className="card">
//        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXtFRQ9HZaFj-rhvF_W7H-nDP6dSiY2Cgieg&s" alt="description"></img>
//          <h2>KFC</h2>
//          <h3>  {couision.join(", ")}  </h3>
//          <h3>4.4 stars</h3>
//        </div>
// )


// const Rest1 = ()=>(
//     <div className="restCard">
//        <img className = "RestImage" src={restCard[1].info.cloudinaryImageId}/>
//        <h1 >       {restCard[1].info.name}       </h1>
//        <h2> {restCard[1].info.cuisines.join(", ")}    </h2>
//       <h2>{restCard[1].info.stars} stars</h2>
//       </div>
// ); 

// const Rest2 = ()=>(
//     <div className="restCard">
//        <img className = "RestImage" src={restCard[2].info.cloudinaryImageId}/>
//        <h1 >       {restCard[2].info.name}       </h1>
//        <h2> {restCard[2].info.cuisines.join(", ")}    </h2>
//       <h2>{restCard[2].info.stars} stars</h2>
//       </div>
// ); 

// const Rest3 = ()=>(
//     <div className="restCard">
//        <img className = "RestImage" src={restCard[3].info.cloudinaryImageId}/>
//        <h1 className = "RestImage">       {restCard[3].info.name}       </h1>
//        <h2> {restCard[3].info.cuisines.join(", ")}    </h2>
//       <h2>{restCard[3].info.rating} stars</h2>
//       </div>
// ); 

const Rest = ( {restCar   })=>(
    console.log(restCard),
    <div className="restCard">
       <img className = "RestImage" src={restCar.info?.cloudinaryImageId}/>
       <h1 className = "RestImage">       {restCar.info?.name}       </h1>
       <h2> {restCar.info.cuisines.join(", ")}  </h2> ̰
       <h2>{restCar.info.stars} stars</h2>
       </div>
); 

const Body = ()=>
    (<div className="restLi">
        <Rest restCar = {restCard[0]}/>
        {/* <Rest {...restCard[0].info}/> */}
        <Rest restCar = {restCard[1]}/>
        <Rest restCar = {restCard[2]}/>
        <Rest restCar= {restCard[3]}/>


       {/* <RestCard/>
       <RestCard/>
       <RestCard/>
       <RestCard/> */}
    </div>
);


const Footer = ()=>(
    <p>i am footer section</p>
)

const App = ()=>(
    <>
    {<Header/>}
    {<Body/>}
    {<Footer/>}
    </>
)

let destination = ReactDOM.createRoot(document.getElementById("root"));

destination.render(<App/>)