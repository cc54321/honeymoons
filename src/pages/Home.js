import React from "react";
import honeymoonData from '../data/HoneymoonData';
import cruiseData from '../data/CruiseData';
import exoticTravelData from '../data/ExoticTravelData';
import northAmericaData from '../data/NorthAmericaData';
import resortData from '../data/ResortData';
import { Link } from "react-router-dom";
import '../styles/Home.css'; // Import the CSS file


function getRandomListings(data) {
  const shuffledData = data.sort(() => 0.5 - Math.random());
  return shuffledData.slice(0, 3);
}

const Home = () => {
  const randomHoneymoonListings = getRandomListings(honeymoonData);
  const randomCruiseListings = getRandomListings(cruiseData);
  const randomExoticTravelListings = getRandomListings(exoticTravelData);
  const randomNorthAmericaListings = getRandomListings(northAmericaData);
  const randomResortListings = getRandomListings(resortData);

  return (
    <div>
          <div className="home-content"> {/* Wrap the content to center with a div and apply the home-content class */}
        <h1>Welcome to Latest Honeymoons!</h1>
        <p>
        Plan your dream honeymoon with us. Browse through our selection of
        popular honeymoon destinations and find the perfect getaway for you and
        your loved one. Whether you're looking for a tropical beach destination, a romantic
        European city, or an adventurous retreat, we have you covered.
      </p>
      <p>
        Start exploring our honeymoon deals and create memories that will last a
        lifetime.
      </p>
      </div>

      <h2 className="home-heading">
  <Link to="/honeymoons">Unique Honeymoons</Link>
</h2>
<div className="home-container home-grid">
  {randomHoneymoonListings.map((listing) => (
    <div key={listing.id} className="home-item">
      <h3>{listing.destination}</h3>
      <a href="/honeymoons">
        <img src={listing.image} alt={listing.destination} />
      </a>
      <h3>{listing.destination}</h3>
      <p>{listing.description}</p>
    </div>
  ))}
</div>
<h2 className="home-heading">
  <Link to="/cruises"> Honeymoon Cruises</Link>
</h2>
<div className="home-container home-grid">
  {randomCruiseListings.map((listing) => (
    <div key={listing.id} className="home-item">
      <h3>{listing.title}</h3>
      <a href="/cruises">
        <img src={listing.image} alt={listing.destination} />
      </a>
      <h3>{listing.title}</h3>
      <p>{listing.description}</p>
    </div>
  ))}
</div>
<h2 className="home-heading">
  <Link to="/exotic-travel">Exotic Honeymoons</Link>
</h2>
<div className="home-container home-grid">
  {randomExoticTravelListings.map((listing) => (
    <div key={listing.id} className="home-item">
      <h3>{listing.destination}</h3>
      <a href="/exotic-travel">
        <img src={listing.image} alt={listing.destination} />
      </a>
      <h3>{listing.destination}</h3>
      <p>{listing.description}</p>
    </div>
  ))}
</div>
<h2 className="home-heading">
  <Link to="/resorts">Honeymoon Resorts</Link>
</h2>
<div className="home-container home-grid">
  {randomResortListings.map((listing) => (
    <div key={listing.id} className="home-item">
      <h3>{listing.name}</h3>
      <a href="/resorts">
        <img src={listing.image} alt={listing.destination} />
      </a>
      <h3>{listing.name}</h3>
      <p>{listing.description}</p>
    </div>
  ))}
    </div>
      <h2 className="home-heading">
  <Link to="/north-america">North America Honeymoons</Link>
</h2>
<div className="home-container home-grid">
  {randomNorthAmericaListings.map((listing) => (
    <div key={listing.id} className="home-item">
      <h3>{listing.destination}</h3>
      <a href="/north-america">
        <img src={listing.image} alt={listing.destination} />
      </a>
      <h3>{listing.destination}</h3>
      <p>{listing.description}</p>
    </div>
  ))}
     
      </div>
    </div>
  );
};

export default Home;







//       <div className="home-container">
//         <h2 className="home-heading">Cruise Listings</h2>
//         {randomCruiseListings.map((listing) => (
//           <div key={listing.id} className="north-item">
//             <img src={listing.image} alt={listing.destination} />
//             <h3>{listing.destination}</h3>
//             <p>{listing.description}</p>
//           </div>
//         ))}
//       </div>

//       <div className="home-container">
//         <h2 className="home-heading">Exotic Listings</h2>
//         {randomExoticTravelListings.map((listing) => (
//           <div key={listing.id} className="north-item">
//             <img src={listing.image} alt={listing.destination} />
//             <h3>{listing.destination}</h3>
//             <p>{listing.description}</p>
//           </div>
//         ))}
//       </div>

//       <div className="home-container">
//         <h2 className="home-heading">North America Listings</h2>
//         {randomNorthAmericaListings.map((listing) => (
//           <div key={listing.id} className="north-item">
//             <img src={listing.image} alt={listing.destination} />
//             <h3>{listing.destination}</h3>
//             <p>{listing.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;










// import React from "react";
// import honeymoonData from '../data/HoneymoonData';
// import cruiseData from '../data/CruiseData';
// import exoticTravelData from '../data/ExoticTravelData';
// import northAmericaData from '../data/NorthAmericaData';

// function getRandomListings(data) {
//   const shuffledData = data.sort(() => 0.5 - Math.random());
//   return shuffledData.slice(0, 3);
// }

// const Home = () => {
//   const randomHoneymoonListings = getRandomListings(honeymoonData);
//   const randomCruiseListings = getRandomListings(cruiseData);
//   const randomExoticTravelListings = getRandomListings(exoticTravelData);
//   const randomNorthAmericaListings = getRandomListings(northAmericaData);

//   return (
//     <div>
//       <h1>Welcome to our Honeymoons App!</h1>
//       <p>
//         Plan your dream honeymoon with us. Browse through our selection of
//         popular honeymoon destinations and find the perfect getaway for you and
//         your loved one.
//       </p>
//       <p>
//         Whether you're looking for a tropical beach destination, a romantic
//         European city, or an adventurous retreat, we have you covered.
//       </p>
//       <p>
//         Start exploring our honeymoon deals and create memories that will last a
//         lifetime.
//       </p>

//       <div>
//         <h2>Honeymoon Listings</h2>
//         {randomHoneymoonListings.map((listing) => (
//           <div key={listing.id}>
//             <img src={listing.image} alt={listing.destination} />
//             <h3>{listing.destination}</h3>
//             <p>{listing.description}</p>
//           </div>
//         ))}
//       </div>

//       <div>
//         <h2>Cruise Listings</h2>
//         {randomCruiseListings.map((listing) => (
//           <div key={listing.id}>
//             <img src={listing.image} alt={listing.destination} />
//             <h3>{listing.destination}</h3>
//             <p>{listing.description}</p>
//           </div>
//         ))}
//       </div>

//       <div>
//         <h2>Exotic Listings</h2>
//         {randomExoticTravelListings.map((listing) => (
//           <div key={listing.id}>
//             <img src={listing.image} alt={listing.destination} />
//             <h3>{listing.destination}</h3>
//             <p>{listing.description}</p>
//           </div>
//         ))}
//       </div>

//       <div>
//         <h2>North America Listings</h2>
//         {randomNorthAmericaListings.map((listing) => (
//           <div key={listing.id}>
//             <img src={listing.image} alt={listing.destination} />
//             <h3>{listing.destination}</h3>
//             <p>{listing.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;



// // const Home = () => {
// //   return (
// //     <div>
// //       <h1>Welcome to our Honeymoons App!</h1>
// //       <p>
// //         Plan your dream honeymoon with us. Browse through our selection of
// //         popular honeymoon destinations and find the perfect getaway for you and
// //         your loved one.
// //       </p>
// //       <p>
// //         Whether you're looking for a tropical beach destination, a romantic
// //         European city, or an adventurous retreat, we have you covered.
// //       </p>
// //       <p>
// //         Start exploring our honeymoon deals and create memories that will last a
// //         lifetime.
// //       </p>
// //     </div>
// //   );
// // };

// export default Home;

