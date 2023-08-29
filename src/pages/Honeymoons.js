import React from "react";
import HoneymoonData from "../data/HoneymoonData";
import '../styles/Honeymoon.css';

const Honeymoons = () => {
  return (
    <div className="honeymoon-container">
      <h1 className="honeymoon-heading">Unique Honeymoons</h1>
      <div className="honeymoon-grid">
        {HoneymoonData.map((honeymoon) => (
          <div className="honeymoon-item" key={honeymoon.id}>
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

export default Honeymoons;


// import React from "react";
// import HoneymoonData from "../data/HoneymoonData";
// import '../styles/Honeymoon.css'; // Update the CSS file name and import statement

// const Honeymoons = () => {
//   return (
//     <div className="honeymoon-container">
//       <h1 className="honeymoon-heading">Unique Honeymoons</h1>
//       <div className="honeymoon-grid">
//         {HoneymoonData.map((honeymoon) => (
//           <div className="honeymoon-item" key={honeymoon.id}>
//             <h2>{honeymoon.destination}</h2>
//             <img src={honeymoon.image} alt={honeymoon.destination} />
//             <p>{honeymoon.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };


// export default Honeymoons;











// // import React from "react";
// // import honeymoonData from "../data/HoneymoonData";
// // import '../styles/Honeymoon.css';

// // const Honeymoons = () => {
// //   return (
// //     <div className="honeymoon-container honeymoon-grid">
// //       <h1 className="honeymoon-heading">Honeymoons In North America</h1>
// //       <div className="honeymoon-container"></div>
// //       <div className="honeymoon-grid"></div>
// //       {honeymoonData.map((destination) => (
// //         <div key={destination.id}>
// //           <h2>{destination.destination}</h2>
// //           <p>{destination.description}</p>
// //           <img src={destination.image} alt={destination.destination} />
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default Honeymoons;
