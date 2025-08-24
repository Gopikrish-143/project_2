import React from 'react'
 const products =[
        {id:1,name:"Cycles",img:"https://rukminim2.flixcart.com/image/110/110/l111lzk0/cycle/m/r/e/xc-900-grey-lite-26-15-5-cradiac-21-gear-120-original-imagczuzpxeweczm.jpeg?q=80",offer:70},
        {id:2,name:"Coffee Powder",img:"https://rukminim2.flixcart.com/image/110/110/kzzw5u80/coffee/s/b/x/-original-imagbwf3wvhzfh5z.jpeg?q=80",offer:90},
        {id:3,name:"Top Selling",img:"https://rukminim2.flixcart.com/image/110/110/kx50gi80/pen/h/z/k/119766-flair-original-imag9nzubznagufg.jpeg?q=80",offer:30},
        {id:4,name:"Toys",img:"https://rukminim2.flixcart.com/image/120/120/kzegk280/action-figure/9/v/t/3-30155-mcfarlane-2-5-original-imagbeyyzehpyk2m.jpeg?q=80",offer:30},
        {id:5,name:"Dry Fruits",img:"https://rukminim2.flixcart.com/image/120/120/k6fd47k0/nut-dry-fruit/p/z/7/200-100-natural-california-pouch-happilo-original-imafzvw2tcazeur6.jpeg?q=80",offer:30},
        {id:6,name:"Remote Control Toys",img:"https://rukminim2.flixcart.com/image/120/120/k0plpjk0/remote-control-toy/9/g/k/4-function-remote-control-high-speed-big-racing-car-toy-funkey-original-imafkg33umd8dy93.jpeg?q=80",offer:30},
        {id:7,name:"Food Spreads",img:"https://rukminim2.flixcart.com/image/120/120/klzhq4w0/jam-spread/w/q/u/510-chocolate-peanut-butter-crunchy-510g-jar-nut-butter-original-imagyzpqqfaguxny.jpeg?q=80",offer:30},
        {id:8,name:"Puzzles",img:"https://rukminim2.flixcart.com/image/120/120/kl5hh8w0/puzzle/g/n/g/60-wooden-earth-jigsaw-puzzle-60-pcs-webby-original-imagyc8hsdztzdzb.jpeg?q=80",offer:30},
        {id:9,name:"Musical Toys",img:"https://rukminim2.flixcart.com/image/120/120/kiqbma80-0/musical-toy/s/k/b/xylophone-guitar-wooden-kids-first-musical-sound-instrument-toy-original-imafyfszcjkjcwwz.jpeg?q=80",offer:30},
        {id:10,name:"BreakFast Cereal",img:"https://rukminim2.flixcart.com/image/120/120/ks6ef0w0/cereal-flake/q/w/h/1-oats-veggies-masala-oats-pouch-yogabar-original-imag5suhzvwy3xh4.jpeg?q=80",offer:30},

]
const ProductContainer_2 = () => {
  
  return (
   <div className=" bg-gray-200 mx-auto grid grid-cols-1 sm:grid-cols-4 gap-6 px-4 py-9">
  
  <div className="sm:col-span-3">
    <h1 className="text-2xl font-medium mb-6">Beauty, Food, Toys & more</h1>
    <div className=" grid grid-cols-2 md:grid-cols-2   lg:grid-cols-5 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white flex flex-col items-center justify-center shadow-xl rounded-lg p-4"
        >
          <img
            src={product.img}
            alt={product.name}
            className="bg-white p-4 w-[150px] h-[150px] object-contain"
          />
          <h3 className="font-medium mt-2">{product.name}</h3>
          <p className="text-white bg-indigo-400 px-3 py-1 mt-2 rounded-b-xl ">
            Upto {product.offer}% Off
          </p>
        </div>
      ))}
    </div>
  </div>

  <div className="hidden md:block col-span-1">
    <div className="flex flex-col items-center justify-center">
      <h3 className="mt-4 text-3xl">Advertisement</h3>
      <img
        src="https://rukminim2.flixcart.com/fk-p-flap/1000/1540/image/ce3cf81edb760559.jpg?q=80"
        alt={products.name}
        className="w-[340px] h-[500px] pt-10"
      />
    </div>
  </div>
</div>

  )
}


const ProductContainer_3 = () => {
  return (
    <div>
      <div className=' my-10 px-5 py-5 overflow-y-hidden'>
      <h1 className=' text-2xl font-medium  p-6'>Beauty,Food,Toys & more</h1>

      <div className=' grid grid-cols-2 md:grid-cols-5 mt-7 gap-10 shadow-xl '>{
        products.map((product)=>(<div 
        key={product.id}
        className='flex flex-col-reverse items-center justify-center shadow-xl'
        >
        <img 
        src ={product.img}
        alt ={product.name}
        className='p-6'
    />
    <h3 className='font-medium p-2'>{product.name}</h3>
    
    <p className=' text-white bg-indigo-400 px-2 py-2 mb-4 rounded-r-2xl'>Upto {product.offer}% Off</p>
    </div>
))}
      </div>
    </div>
    </div>
  )
}




const ProductContainer_4 = () => {
  return (
    <div>
      <div className=' my-10   bg-gray-300'>
      <h1 className=' text-2xl font-medium p-6 '>Beauty,Food,Toys & more</h1>

      <div className=' grid grid-cols-2 md:grid-cols-5 mt-7 px-5 py-5 gap-2 shadow-xl '>{
        products.map((product)=>(
          <div 
        key={product.id}
        className='flex flex-row  items-center bg-white justify-center shadow-xl border'
        >
        <div className=''>
        <img 
        src ={product.img}
        alt ={product.name}
        className='p-6 h-[120px] w-[100px]'
    />
    <h3 className='font-medium p-2 text-center'>{product.name}</h3>
    
    <p className=' text-white bg-indigo-400 px-2 py-2  p-94 mb-4 text-center rounded-2xl'>Upto {product.offer}% Off</p>
     </div>
    
    </div>
))}
      </div>
    </div>
    </div>
  )
}



export { ProductContainer_2, ProductContainer_3,ProductContainer_4 };
