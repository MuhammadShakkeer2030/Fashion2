const Checkout = () => {
    return (
        <div className='w-1/3 flex justify-center mt-10'>
            <div className='bg-white shadow-md p-8'>
                <h2 className='text-2xl font-bold mb-6'>Summary</h2>

                {/* Product Quantity */}
                <div className='mb-4'>
                    <p className='font-semibold'>Product Quantity:</p>
                    <p>10</p>
                </div>

                {/* Shipping */}
                <div className='mb-4'>
                    <p className='font-semibold'>Shipping:</p>
                    <p>Standard Shipping</p>
                </div>

                {/* Total Amount */}
                <div className='mb-4'>
                    <p className='font-semibold'>Total Amount:</p>
                    <p>$250</p>
                </div>

                {/* GST */}
                <div className='mb-6'>
                    <p className='font-semibold'>GST (Goods & Services Tax):</p>
                    <p>$25</p>
                </div>

                {/* Checkout Button */}
                <button className='w-full py-3 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none'>
                    Checkout
                </button>
            </div>
        </div>
    );
};

export default Checkout;
