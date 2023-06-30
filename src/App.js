import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./global/Header";
import Footer from "./global/Footer";
import Home from "./pages/Home";
import Honeymoons from "./pages/Honeymoons";
import Resorts from "./pages/Resorts";
import Cruises from "./pages/Cruises";
import NorthAmerica from "./pages/NorthAmerica";
import ExoticTravel from "./pages/ExoticTravel";
import Register from "./auth/Register";
import Login from "./auth/Login";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/honeymoons" element={<Honeymoons />} />
          <Route path="/cruises" element={<Cruises />} />
          <Route path="/exotic-travel" element={<ExoticTravel />} />
          <Route path="/north-america" element={<NorthAmerica />} />
          <Route path="/resorts" element={<Resorts />} />
          <Route path="/register" element={<Register />} /> {/* Add this line */}
          <Route path="/login" element={<Login />} /> {/* Add this line */}
          {/* Add more routes for other pages */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;











// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./global/Header";
// import Footer from "./global/Footer";
// import Home from "./pages/Home";
// import Honeymoons from "./pages/Honeymoons";
// import Resorts from "./pages/Resorts";
// import Cruises from "./pages/Cruises";
// import NorthAmerica from "./pages/NorthAmerica";
// import ExoticTravel from "./pages/ExoticTravel";

// const App = () => {
//   return (
//     <Router>
//       <div>
//         <Header />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/honeymoons" element={<Honeymoons />} />
//           <Route path="/cruises" element={<Cruises />} />
//           <Route path="/exotic-travel" element={<ExoticTravel />} />
//           <Route path="/north-america" element={<NorthAmerica />} />
//           <Route path="/resorts" element={<Resorts />} /> {/* Add this line */}
//           {/* Add more routes for other pages */}
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// };

// export default App;







// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./global/Header";
// import Footer from "./global/Footer";
// import Home from "./pages/Home";
// import Honeymoons from "./pages/Honeymoons";

// const App = () => {
//   return (
//     <Router>
//       <div>
//         <Header />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/honeymoons" element={<Honeymoons />} />
//           {/* Add more routes for other pages */}
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// };

// export default App;






// import React from "react";
// // import { Cruises } from "./pages/Cruises";
// import Honeymoons from "./pages/Honeymoons";
// import Header from "./global/Header";
// import Footer from "./global/Footer";
    
//     const App = () => {
//       return (
//         <div>
//           <Header />
//           <h1>Honeymoons App</h1>
//           <Honeymoons />
//           <Footer />
//         </div>
//       );
//     };
    
//     export default App;
    
//     // <div>
//     //   <h1>Honeymoons App</h1>
//     //   <Cruises />
//     //   <Honeymoons />
//     // </div>
// //   );
// // };

// // export default App;









// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
