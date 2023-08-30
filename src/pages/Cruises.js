import React from 'react';
import cruiseData from '../data/CruiseData';
import '../styles/Cruises.css';

const Cruises = () => {
  return (
    <div className="cruises-container">
      <h1>Honeymoon Cruises</h1>
      <div className="cruises-grid">
        {cruiseData.map((cruise) => (
          <div className="cruise-item" key={cruise.id}>
             <a href={cruise.imageLink} target="_blank" rel="noopener noreferrer">
              <img src={cruise.image} alt={cruise.title} className="cruise-image" />
            </a>
            <h2>{cruise.title}</h2>
            <p>{cruise.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cruises;











// import React from 'react';
// import cruiseData from '../data/CruiseData';
// import '../styles/Cruises.css';

// const Cruises = () => {
//   return (
//     <div className="cruises-container">
//       <h1>Cruise Deals</h1>
//       <div className="cruises-grid">
//         {cruiseData.map((cruise) => (
//           <div className="cruise-item" key={cruise.id}>
//             <h2>{cruise.title}</h2>
//             <p>{cruise.description}</p>
//             <img src={cruise.image} alt={cruise.title} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Cruises;










// import React, { useEffect, useState } from "react";
// import cruiseData from "../data/CruiseData";

// export const Cruises = () => {
//   const [cruises, setCruises] = useState([]);

//   useEffect(() => {
//     // Set the mock cruise data to the state
//     setCruises(cruiseData);
//   }, []);

//   return (
//     <div>
//       <h1>Cruise Deals</h1>
//       {cruises.map((cruise) => (
//         <div key={cruise.id}>
//           <h2>{cruise.destination}</h2>
//           <p>Cruise Line: {cruise.cruiseLine}</p>
//           <p>Ship: {cruise.ship}</p>
//           <p>Duration: {cruise.duration}</p>
//           <p>Price: ${cruise.price}</p>
//           <ul>
//             {cruise.includes.map((item) => (
//               <li key={item}>{item}</li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// };



// export default Cruises;




// import React, { useEffect, useState } from "react";
// import cruiseData from "../data/CruiseData";

// const Cruises = () => {
//   const [cruises, setCruises] = useState([]);

//   useEffect(() => {
//     // Set the mock cruise data to the state
//     setCruises(cruiseData);
//   }, []);

//   return (
//     <div>
//       <h1>Cruise Deals</h1>
//       {cruises.map((cruise) => (
//         <div key={cruise.id}>
//           <h2>{cruise.destination}</h2>
//           <p>Cruise Line: {cruise.cruiseLine}</p>
//           <p>Ship: {cruise.ship}</p>
//           <p>Duration: {cruise.duration}</p>
//           <p>Price: ${cruise.price}</p>
//           <ul>
//             {cruise.includes.map((item) => (
//               <li key={item}>{item}</li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Cruises;









// import React from "react";
// import { useEffect, useState } from "react";
// import cruiseData from "../data/CruiseData";

// const Cruises = () => {
//   const [cruises, setCruises] = useState([]);

//   useEffect(() => {
//     // Set the mock cruise data to the state
//     setCruises(cruiseData);
//   }, []);

//   return (
//     <div>
//       <h1>Cruise Deals</h1>
//       {cruises.map((cruise) => (
//         <div key={cruise.id}>
//           <h2>{cruise.destination}</h2>
//           <p>Cruise Line: {cruise.cruiseLine}</p>
//           <p>Ship: {cruise.ship}</p>
//           <p>Duration: {cruise.duration}</p>
//           <p>Price: ${cruise.price}</p>
//           <ul>
//             {cruise.includes.map((item) => (
//               <li key={item}>{item}</li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Cruises;












// import React from "react";
// import axios from "axios";
// import { useEffect, useState } from "react";

// export const Cruises = () => {
//   const [cruises, setCruises] = useState([]);

//   useEffect(() => {
//     // Fetch cruise data from an external API using axios
//     axios.get("/api/cruises")
//       .then((response) => {
//         setCruises(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   return (
//     <div>
//       <h1>Cruise Deals</h1>
//       {cruises.map((cruise) => (
//         <div key={cruise.id}>
//           <h2>{cruise.destination}</h2>
//           <p>Cruise Line: {cruise.cruiseLine}</p>
//           <p>Ship: {cruise.ship}</p>
//           <p>Duration: {cruise.duration}</p>
//           <p>Price: ${cruise.price}</p>
//           <ul>
//             {cruise.includes.map((item) => (
//               <li key={item}>{item}</li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Cruises;
