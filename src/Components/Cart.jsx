const Cart = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-4xl font-bold my-6'>Product Name</h1>
            <img src='https://via.placeholder.com/300' alt='Product' className='mb-4' />
            <p className='mb-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className='flex justify-between w-full px-4 lg:w-1/2'>
                <button className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded'>
                    Add to Cart
                </button>
                <p className='text-gray-700 text-xl'>$99.99</p>
            </div>
        </div>
    );
};

export default Cart;
