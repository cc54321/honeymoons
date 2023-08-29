
import React from "react";
import resortData from "../data/ResortData";
import '../styles/Resorts.css';

const Resorts = () => {
  return (
    <div className="resorts-container">
      <h1 className="resorts-heading">Honeymoon Resorts</h1>
      <div className="resorts-grid">
        {resortData.map((resort) => (
          <div key={resort.id} className="resort-item">
            <a href={resort.imageLink} target="_blank" rel="noopener noreferrer">
              <img src={resort.image} alt={resort.name} className="resort-image" />
            </a>
            <h2 className="resort-name">{resort.name}</h2>
            <p className="resort-description">{resort.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resorts;





















// import React from "react";
// import resortData from "../data/ResortData";
// import '../styles/Resorts.css';

// const Resorts = () => {
//   return (
//     <div className="resorts-container">
//       <h1 className="resorts-heading">Honeymoon Resorts</h1>
//       <div className="resorts-grid">
//         {resortData.map((resort) => (
//           <div key={resort.id} className="resort-item">
//             <a href={resort.imageLink} target="_blank" rel="noopener noreferrer">
//               <img src={resort.image} alt={resort.name} />
//             </a>
//             <img src={resort.image} alt={resort.name} className="resort-image" />
//             <h2 className="resort-name">{resort.name}</h2>
//             <p className="resort-description">{resort.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Resorts;

