function ProductSection () {
  const products = [
    { id: 1, name: "Mobiles and Tablets", price: "From ₹6990", img: "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/5f2ee7f883cdb774.png?q=100" },
    {id:2,name:"Tv and Monitor",price:"From ₹30000",img:"https://rukminim2.flixcart.com/fk-p-flap/64/64/image/e90944802d996756.jpg?q=100"},
    {id:3,name:"Fashion",price:"From ₹30000",img:"https://rukminim2.flixcart.com/fk-p-flap/64/64/image/ff559cb9d803d424.png?q=100"},
    {id:4,name:"Grocery",price:"From ₹30000",img:"https://rukminim2.flixcart.com/fk-p-flap/64/64/image/e730a834ad950bae.png?q=100"},
    {id:5,name:"Home and Furniture",price:"From ₹30000",img:"https://rukminim2.flixcart.com/fk-p-flap/64/64/image/1788f177649e6991.png?q=100"},
    {id:6,name:"Laptop and Audio",price:"Free",img:"https://rukminim2.flixcart.com/fk-p-flap/64/64/image/af646c36d74c4be9.png?q=100"},
    

  ];

  return (
    <div className="py-4">
   <div className="mt-4 p-2 rounded-lg bg-gray-100 shadow ">
<div className="grid grid-cols-2 md:grid-cols-6 gap-4 pt-2">
{products.map((product) =>( <div 
className="flex flex-col items-center text-center p-1 rounded-3xl  transition "
key={product.id}>
<img src={product.img} className="w-24 h-14 object-contain  " />
<h3 className=" mt-3 font-medium">{product.name}</h3>
<p className="text-gray-600 text-sm pb-2">{product.price}</p>
  </div>

))}


</div>

   </div>
   </div>
  );
};

export default ProductSection










