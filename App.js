//import logo from './logo.svg';
import { createBrowserRouter, createRoutesFromElements,Route,RouterProvider,Link } from 'react-router-dom';
import React from "react";
import './App.css';
import Home from "./components/Home/Home.jsx"
//<link rel="stylesheet" href="bootstrap.scss"/>
//import CartCard from "./components/Cart/dishCard";
//import ItemCard from "./components/Menu/ItemCard";
import Navbar from './components/Navbar/Navbar.jsx';
// import HorizontalNavBar from "./components/Navbar/navnav";
import LoginForm from './components/Login/Login';
import CustomItemContext from "./components/Contexts/ItemContext";
import RegisterForm from "./components/Register/register";

function App() {
  
  const routes=createRoutesFromElements([
     { path:"/",
       element:<Navbar/>,
       children:[
        {index:true, element:<Home/>},
        {path:"/login", element: <LoginForm/>},
        {path:"/register", element: <RegisterForm/>},
        // {path:"/menu", element: <Menu/>},
       ],
     }
  ]);

  const [currentPage, setCurrentPage] = useState('home');

  // const renderContent = () => {
  //   switch (currentPage) {
  //     case 'home':
  //       return <div>Home Page Content</div>;
  //     case 'about':
  //       return <div>About Page Content</div>;
  //     case 'services':
  //       return <div>Services Page Content</div>;
  //     case 'contact':
  //       return <div>Contact Page Content</div>;
  //     default:
  //       return <div>Select a Page</div>;
  //   }
  // };

  return(
    <>
      <CustomItemContext>
       <RouterProvider router={routes}/> 
     </CustomItemContext> 
        {/* <div className="app-container">
      <HorizontalNavBar onNavigate={setCurrentPage} />
      <div className="main-content">
        {renderContent()}
      </div>
    </div> 
    {/* <div>
      < />
    
    </div> */}
    
     
     </>
  );

  
}

export default App;
