import { useEffect } from "react";
import { useState } from "react"
import AddToCart from "./components/AddToCart/AddToCart";
import Product from "./components/Product/Product";


function App() {
  const [products, setProducts] = useState([]);
  const [card, setCard] = useState([]);

  useEffect(() => {
    fetch('fakeData.json')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, []);

  const handleAddCar = (item) => {
    const isExist = card.find(pd => pd.id === item.id); 

   if(!isExist){
     setCard([...card, item]) 
   }
   else{
    alert('Already have')
   } 
  } ;

  const handleRemove = (id)=>{
    const newCard = card.filter(item => item.id !== id);
    setCard(newCard); 
  }

  return (
    <> <h1 className="text-7xl font-bold text-center my-10">Prouct Card </h1>
      <div className="container mx-auto px-10 flex justify-between gap-4">
        {/* product component  */}
        <div className="w-2/3">
          {
            products.map(product => <Product
              key={product.id}
              product={product}
              handleAddCar={handleAddCar}
            ></Product>)
          }
        </div>

          {/* card component  */}
        <div className="w-1/3 border-t-2 border-gray-200">
          <h2 className='text-lg font-bold text-center'>add to cart</h2>
          <hr />
          {
            card.map((item,idx) => <AddToCart
            key={item.id} 
            item={item}
             idx={idx}
             handleRemove={handleRemove}
             ></AddToCart>)
          }
        </div>
      </div>
    </>
  )
}

export default App
