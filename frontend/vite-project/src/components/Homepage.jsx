import React from "react";
import Slider from '../pages/Slider'
import ProductSection from "../pages/ProductSection";
import ProductContainer_1 from "../pages/ProductContainer_1";
import {ProductContainer_2,ProductContainer_3,ProductContainer_4} from "../pages/ProductContainer_2";
import Navbar from './Navbar'
import Slider2 from "../pages/Slider2";
const HomePage = () => {

  

  return (

 <nav>
 <div className="mx-auto overflow-x-hidden">
 <Navbar/>
  <ProductSection/>
  <Slider />
  <ProductContainer_2/>
  <ProductContainer_3 />
  <Slider2/>
  <ProductContainer_1/>
  <ProductContainer_4 />
  </div>
</nav>

    

  );
};

export default HomePage;







