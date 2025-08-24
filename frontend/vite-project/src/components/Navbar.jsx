import React from 'react'
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {

const [userName,setUsername]= useState("")

  // 👇 Run on page load
  useEffect(() => {
    const fetchUser =  () => {
      try {
       const storedName = localStorage.getItem("username")
       if(storedName) setUsername(storedName)
      } catch (err) {
        console.error("Error fetching user:", err);
      }
    };

    fetchUser();
  }, []); 

   
      const navigate = useNavigate();
      const role = localStorage.getItem("role");
      function handleProduct(){
        navigate("/Product")
      }
    
      function handleLogout (){
      localStorage.removeItem("token")
      localStorage.removeItem("username");
      localStorage.removeItem("role");
      localStorage.removeItem("isLoggedin");


      navigate("/");
      }
     
  return (
    <nav className=' bg-gray-500'>
        <div className='flex items-center justify-evenly'>

      <div>
<h1 className='text-white text-4xl p-4 font-mozilla font-extrabold  cursor-pointer'>Logo</h1>
      </div>
      <div>
        <input
      className="  w-100 mx-4 py-2 px-4 bg-gray-50 border-none hidden md:block rounded-sm"
      placeholder="Search Products, Brands and more"
    />
      </div>
      
       <div className="flex flex-rows items-center justify-center">
{role ==="admin" && ( <button onClick={handleProduct} className="mx-2 py-2 px-4 bg-blue-400 text-white border-none rounded-sm  md-xl hover:bg-white hover:text-black  cursor-pointer">
      Add Products 
    </button>)}
    {role ==="user" && ( <button className="mx-2 py-2 px-4 bg-blue-400 text-white border-none rounded-sm  md-xl hover:bg-white hover:text-black  cursor-pointer">
      View Cart
    </button>)}
   </div>
      <div>
   <button  onClick={handleLogout} className="mx-2 py-2 px-4 bg-red-400 text-white rounded-sm hover:bg-white hover:text-black  cursor-pointer">
      Logout
    </button>
      </div>
      <div className='hidden md:block'>
         <h1 className="text-bold hidden md:block text-white text-2xl ">Welcome {userName}</h1>
</div>
<div className="hidden md:block">
     <img
      src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAI0AjQMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYBAwQCB//EADoQAAICAQEFBQQIBAcAAAAAAAABAgMEEQUhMUFRBhITYXEiMoGRFCNCUmKxwdFyoeHxQ0RTc5PC8P/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD7iAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGnIyacaHfvsjCPnzODa214YmtVOk7/AD4R9f2KzfdbfY7Lpuc3zYE5ldoUtY4tOv4p/sR1u2M6z/G7i6QSRwgDe83Lf+av/wCWRmGfmQ93Ku+M2/zOcASdG3cyv33C1fiWj+aJbD27jXaRu1pn+J6x+ZVgBfU01qt6MlO2ftO/BklF9+rnW3u+HQtWHl1ZlKsplqua5p9GBvAAAAAAAAIrbe0volfg0tePNcfurqd+VfHGx53T92C19SlX3TvunbY9ZTer8gPDbbbbbb3tsAAADMISnJRhGUpPhGK1bAwDthsnNktfCUf4pJGu/Z+XQu9ZRLu9Y71/IDmAAA6MHLswr1bXvXCUeUkc4AvOLfDJojdU9Yy4eRtKt2fzPAyfAm/Yte7ylyLSAAAAAAQHafJ0VWNF8fbl+n6/IgDu23Y7Np3dI6RXwX9zhAAADdiY88m+NVa3vi3yXNlnxMWrEqUKo+snxZH9naUqbLtPalLuryS/uS4AAARW1tmRshK/HjpYt7ivtf1IAunqVTadKozrYRXst95LonvA5gAATaaaejW9PoXbAyPpWJVdzlHf68ykll7MWOWHZW/sT3ejAmQAAAAFIz3rn5P+7P8ANmg6dpR7m0MlP/Uk/m9TmAGDJgCxbAsTwZR13xsf8yS1RWdk5UcbI7tj0rs3N9HyZZVDXRp6gZTT5mO8uoUNOY7iAxGWmveZW9tTUto2aPhovXcT2ZdXi0Ssm/KK6voVWcnZOU5vWUnq2BgGEZAE92Vesstfwf8AYgSwdlY+zkz5NxXy1/cCeAAAAAVTtFV4e0HPlZFS+PBkYWjtFi+NheLFayp9r1XP9/gVcAAbcbHtybVXTHvPn0S6gajvwtp34ijXKPiU8lLdp6MlcPZOPQlKxK2zjrJbl6I7bKq7YdyyEZx6SWoHBDbeLLfJWRfTu6mu/blUY/UVSnLrLckdEtk4Unr4TXpNnurZuHVLvRoi3+L2vzArmXkXZNine239laaJLyNJcbaq7YdyyEZR6NENtDY3cTsw9WuLrfH4AQ4DWj3gAWrs7T4Wzoya32ScvhyKzi0yyMiumHGb09PMu9Vcaq4wgtIxSS9APYAAAADDWq0fBlP2tgvCyWkvqpvWD/T4FxNGbi15lEqrVufBrin1QFLpqnfbCqtazm9Ei1YWLXiU+HDe3vlL7zOXZezZ4Vls7tHL3Ytfd6/+6EiAAAAAAAABD7a2enGWVStJJfWR6+ZBl0IvF2Gvps7Lt+PF6wj9718gNnZ7AdVTyrVpOa9hPlH+pNGEZAAAAAAAAAw0mtGaZVte7vRvAHKDocVLijy6lybA0g2eD5r5GVT5gajKTluSNyriurPSSXADxCvTfLibAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/9k="
      alt="Logo"
      className="w-[60px] h-[60px] object-cover rounded-full  " 
    />
      </div>
      <div className='hidden md:block relative px-2 py-2 '>
        <img
      src="https://img.pikbest.com/png-images/20191028/little-boy-pushing-a-shopping-cart-to-buy-things-gif_2515305.png!bw700"
      alt="Logo"
      className="w-[60px] h-[60px] object-contain rounded-full   bg-white  cursor-pointer"
    />
    <p className='absolute inset-1 w-[30px] h-[27px] text-center bg-white font-bold text-red-700 rounded-full translate-x-14'>0</p>

      </div>
      
    </div>
    </nav>
    
  )
}

export default Navbar
