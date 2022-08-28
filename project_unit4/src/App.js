import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './Navbar';
import Img1 from './Img1';
import Product from './Product';
import Footer_1 from "./Footer_1";

function App() {
  return (
    <>
    <div className='logo'>
          <img src ="https://www.rodanandfields.com/en-us/medias/rf-logo.svg?context=bWFzdGVyfGltYWdlc3w3MzczfGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2g2MC9oYWIvODgyMjE0NzE4NjcxOC5zdmd8YjNmMmU2YTg5MTM0NTMzM2Y2ODg2ZmRkZTJhNmY2OWZhYmYyYjk5NWQxODkxODFiYjVkY2MxY2NjOWRlMzA5OA"  alt="none"/>
         </div>
         <hr></hr>
    <Navbar/>
    <Img1/>
    <Product/>
    <Product/>
    <Footer_1/>
   </>
  );
}

export default App;
