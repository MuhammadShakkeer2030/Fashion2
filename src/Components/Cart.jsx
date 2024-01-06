import Checkout from './Checkout';
import { IoMdAdd } from 'react-icons/io';
import { HiMinusSm } from 'react-icons/hi';

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
        <div className='flex flex-col xl:flex-row justify-evenly items-center px-4 py-8'>
            <div className='w-2/3'>
                <h1 className='text-2xl font-bold mb-4'>Your Cart</h1>
                <div className='grid gap-6 lg:grid-cols-2 xl:grid-cols-3'>
                    {products?.map((product) => (
                        <div
                            key={product.id}
                            className='bg-white flex justify-between items-center rounded-lg overflow-hidden shadow-lg'
                        >
                            <img src={product.image} alt={product.name} className='w-1/3 h-[200px] object-contain' />
                            <div className='p-4'>
                                <h3 className='text-lg font-semibold mb-2'>{product.name}</h3>
                                <p className='text-gray-600 mb-2'>Price: ${product.price}</p>
                                <p className='text-gray-600 mb-2'>Quantity: {product.quantity}</p>
                                <p className='text-gray-600 mb-2'>
                                    Total: ${(product.price * product.quantity).toFixed(2)}
                                </p>
                            </div>
                            <div>
                                <button>
                                    <IoMdAdd />{' '}
                                </button>
                                <input type='number' value={1} className='border rounded-md w-5 outline-none ' />
                                <button>
                                    <HiMinusSm />{' '}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Checkout />
        </div>
    );
};

export default CartPage;
