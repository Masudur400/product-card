import PropTypes from 'prop-types';


const Product = ({product,handleAddCar}) => { 
    const {product_title,product_img,price,description}= product;
    return (
        <div className=" border-2 shadow-2xl border-gray-100 mb-5 p-5 rounded-lg">
            <div className="space-y-4">
               <div className="flex justify-center items-center">
               <img className="w-72" src={product_img} alt="" />
               </div>
                <h2 className="text-3xl font-bold">{product_title}</h2>
                <p>{description}</p>
                <div className="flex justify-between">
                    <h2 className="text-2xl font-bold">$ {price}</h2>
                    <button onClick={()=>handleAddCar(product)} className="bg-gray-300 px-6 py-3 rounded-md font-bold">Add to card</button>
                </div>
            </div>
        </div>
    );
};

Product.propTypes={
    product: PropTypes.object.isRequired,
    handleAddCar: PropTypes.func.isRequired,
}

export default Product;