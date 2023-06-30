import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="https://latesttravel.com/wp-content/uploads/2023/06/latest-honeymoons-logo.png" alt="Logo" />
      </div>
      <span className="mobile-icon">
        <img src="https://latesttravel.com/wp-content/uploads/2023/06/icon-honeymoons.png" alt="Mobile Icon" />
      </span> {/* Mobile Icon */}
      {/* <h1 className="heading"></h1> */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cruises">Cruises</Link>
          </li>
          <li>
            <Link to="/exotic-travel">Exotic Travel</Link>
          </li>
          <li>
            <Link to="/honeymoons">Honeymoons</Link>
          </li>
          <li>
            <Link to="/north-america">North America</Link>
          </li>
          <li>
            <Link to="/resorts">Resorts</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;











// import React from "react";
// import { Link } from "react-router-dom";
// import "./Header.css";

// const Header = () => {
//   return (
//     <header className="header">
//       <div className="logo">
//         <img src="https://latesttravel.com/wp-content/uploads/2023/06/latest-honeymoons-logo.png" alt="Logo" />
//       </div>
//       <span className="mobile-icon">
//         <img src="https://latesttravel.com/wp-content/uploads/2023/06/icon-honeymoons.png" alt="Mobile Icon" />
//       </span> {/* Mobile Icon */}
//       {/* <h1 className="heading"></h1> */}
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/cruises">Cruises</Link>
//           </li>
//           <li>
//             <Link to="/exotic-travel">Exotic Travel</Link>
//           </li>
//           <li>
//             <Link to="/honeymoons">Honeymoons</Link>
//           </li>
//           <li>
//             <Link to="/north-america">North America</Link>
//           </li>
//           <li>
//             <Link to="/resorts">Resorts</Link>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;








// import React from "react";
// import { Link } from "react-router-dom";
// import "./Header.css";

// const Header = () => {
//   return (
//     <header className="header">
//       <div className="https://latesttravel.com/wp-content/uploads/2023/06/latest-honeymoons-logo.png">
//         {/* Your logo content */}
//       </div>
//       <h1 className="heading">Honeymoons</h1>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/cruises">Cruises</Link>
//           </li>
//           <li>
//             <Link to="/exotic-travel">Exotic Travel</Link>
//           </li>
//           <li>
//             <Link to="/honeymoons">Honeymoons</Link>
//           </li>
//           <li>
//             <Link to="/north-america">North America</Link>
//           </li>
//           <li>
//             <Link to="/resorts">Resorts</Link>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;









// import React from "react";
// import { Link } from "react-router-dom";

// const Header = () => {
//   return (
//     <header>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/honeymoons">Honeymoons</Link>
//           </li>
//           <li>
//             <Link to="/resorts">Resorts</Link>
//           </li>
//           {/* Add more navigation links for other pages */}
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;







// import React from "react";

// const Header = () => {
//   return (
//     <header>
//       <h1>My Website</h1>
//       {/* Add any additional header content */}
//     </header>
//   );
// };

// export default Header;

