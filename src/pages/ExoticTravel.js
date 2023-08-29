
import React from 'react';
import exoticTravelData from '../data/ExoticTravelData';
import '../styles/ExoticTravel.css';

const ExoticTravel = () => {
  return (
    <div className="exotic-travel-container">
      <h1>Exotic Honeymoons</h1>
      <div className="exotic-travel-grid">
        {exoticTravelData.map((honeymoon) => (
          <div className="exotic-item" key={honeymoon.id}>
               <a href={honeymoon.imageLink} target="_blank" rel="noopener noreferrer">
              <img src={honeymoon.image} alt={honeymoon.destination} />
            </a>
            <h2>{honeymoon.destination}</h2>
            <p>{honeymoon.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExoticTravel;





// import React from 'react';
// import exoticTravelData from '../data/ExoticTravelData';
// import '../styles/ExoticTravel.css';

// const ExoticTravel = () => {
//   return (
//     <div className="exotic-travel-container">
//       <h1>Exotic Honeymoons</h1>
//       {exoticTravelData.map((honeymoon) => (
//         <div className="exotic-travel-item" key={honeymoon.id}>
//           <h2>{honeymoon.destination}</h2>
//           <p>{honeymoon.description}</p>
//           <img src={honeymoon.image} alt={honeymoon.destination} />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ExoticTravel;








// import React from "react";
// import exoticTravelData from "../data/ExoticTravelData";

// const ExoticTravel = () => {
//   return (
//     <div>
//       <h1>Exotic Honeymoons</h1>
//       {exoticTravelData.map((honeymoon) => (
//         <div key={honeymoon.id}>
//           <h2>{honeymoon.destination}</h2>
//           <p>{honeymoon.description}</p>
//           <img src={honeymoon.image} alt={honeymoon.destination} />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ExoticTravel;
