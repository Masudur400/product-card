 
import PropTypes from 'prop-types';

const AddToCart = ({ item, idx, handleRemove }) => {
    const { product_title, price } = item;
    return (
        <div className='shadow-lg mt-3 p-3 rounded-lg flex justify-around mb-3'>
            <p className='font-bold'>{idx + 1}.</p>
            <h2 className='font-bold'>{product_title}</h2>
            <h2 className='font-bold'>{price}</h2>
            <button onClick={()=>handleRemove(item.id)} className='text-red-400'>Remove</button>

        </div>
    );
};


AddToCart.propTypes ={
    item: PropTypes.object.isRequired,
    idx: PropTypes.number.isRequired,
    handleRemove: PropTypes.func.isRequired,
}

export default AddToCart;