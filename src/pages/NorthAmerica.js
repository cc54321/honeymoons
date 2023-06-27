import React from "react";
import northAmericaData from "../data/NorthAmericaData";
import '../styles/NorthAmerica.css';


const NorthAmerica = () => {
  return (
    <div className="north-america-container">
      <h1 className="north-heading">North America Honeymoons</h1>
      <div className="north-america-grid">
        {northAmericaData.map((honeymoon) => (
          <div className="north-item" key={honeymoon.id}>
            <h2>{honeymoon.destination}</h2>
            <img src={honeymoon.image} alt={honeymoon.destination} />
            <p>{honeymoon.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NorthAmerica;






// const NorthAmerica = () => {
//   return (
//     <div className="north-america-container">
//       <h1>Norh American Honeymoons</h1>
//       <div className="north-america-grid"></div>
//       <h1>Popular Honeymoons in North America</h1>
//       {northAmericaData.map((honeymoon) => (
//         <div key={honeymoon.id}>
//           <h2>{honeymoon.destination}</h2>
//           <h2>{honeymoon.title}</h2>
//           <p>{honeymoon.description}</p>
//           <img src={honeymoon.image} alt={honeymoon.destination} />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default NorthAmerica;
