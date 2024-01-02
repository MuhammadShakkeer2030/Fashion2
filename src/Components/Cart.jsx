const CartPage = () => {
    const products = [
        {
            id: 1,
            name: 'Product 1',
            price: 10.99,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5hDPvPDv4h8AMfn5g_Z4XqmKWJsB8kkVf25rzGkxtbg&s',
            quantity: 2,
        },
        {
            id: 2,
            name: 'Product 2',
            price: 19.99,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5hDPvPDv4h8AMfn5g_Z4XqmKWJsB8kkVf25rzGkxtbg&s',
            quantity: 1,
        },
        // Add more products as needed
    ];

    return (
        <div className='container mx-auto px-4 py-8'>
            <h1 className='text-2xl font-bold mb-4'>Your Cart</h1>
            <div className='grid gap-6 lg:grid-cols-2 xl:grid-cols-3'>
                {products?.map((product) => (
                    <div key={product.id} className='bg-white rounded-lg overflow-hidden shadow-lg'>
                        <img src={product.image} alt={product.name} className='w-full h-64 object-cover' />
                        <div className='p-4'>
                            <h3 className='text-lg font-semibold mb-2'>{product.name}</h3>
                            <p className='text-gray-600 mb-2'>Price: ${product.price}</p>
                            <p className='text-gray-600 mb-2'>Quantity: {product.quantity}</p>
                            <p className='text-gray-600 mb-2'>
                                Total: ${(product.price * product.quantity).toFixed(2)}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CartPage;
